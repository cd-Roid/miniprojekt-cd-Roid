<template>
  <div>
    <nav class="header">
      <p class="header__logo">CDA_</p>
      <Dropdown />
    </nav>
    <section class="content">
      <Year class="content__year" />
    </section>
    <ExtendedCard v-if="isVisible === true" :article="toView" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ExtendedCard from "../components/CardModal";
import Year from "../components/Year";
import Dropdown from "../components/Dropdown";
export default {
  name: "Home",
  components: {
    Year,
    ExtendedCard,
    Dropdown
  },
  computed: {
    ...mapState({
      articles: state => state.data,
      selectedLang: state => state.selectedLang,
      isVisible: state => state.modalOpen,
      toView: state => state.viewedArticle
    })
  },
  methods: {
    ...mapActions(["setData"])
  },
  created() {
    let currentLang = this.selectedLang;
    this.setData(currentLang);
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";

.content {
  padding-left: calc((100vw - 940px) / 2);
  padding-right: calc((100vw - 940px) / 2);
  &__year {
    position: relative;
    grid-column: 1 / end;
  }
}
.header {
  border-bottom: 1px solid $grey-darker;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__logo {
    font-size: $desktop-logo;
    font-weight: bold;
    color: #000000;
    max-width: 100%;
    margin-top: 20px;
    margin-left: calc((100vw - 940px) / 2);
    margin-right: calc((100vw - 940px) / 2);
    margin-bottom: 20px;
  }
}
@media (max-width: 768px) {
  .header {
    width: 105%;
    overflow: hidden;
    &__logo {
      margin: 20px;
    }
  }
  .content {
    padding: 0px;
    width: auto;
    &__year {
      width: 100%;
    }
  }
}
</style>
