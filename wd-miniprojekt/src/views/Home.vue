<template>
  <div class="home">
    <nav class="header">
      <p class="header__logo">CDA_</p>
      <Dropdown></Dropdown>
    </nav>
    <Year class="year" />
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
  beforeMount() {
    let currentLang = this.selectedLang;
    this.setData(currentLang);
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
.year {
  padding: 1% 15%;
  position: relative;
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
    margin-left: 15%;
    margin-top: 20px;
  }
}
</style>
