<template>
  <div>
    <nav class="header">
      <p class="header__logo">CDA_</p>
      <span
        class="material-icons material-icons__settings-menu"
        @click="openSettingModal"
        >menu</span
      >
      <span
        class="material-icons material-icons__collapse-all"
        @click="collapseAllItems"
        >menu</span
      >
    </nav>
    <section class="content">
      <Year class="content__year" />
    </section>
    <ExtendedCard v-if="isVisible === true" :article="toView" />
    <Settings v-if="setttingsOpen === true" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ExtendedCard from "../components/CardModal";
import Year from "../components/Year";
import Settings from "../components/SettingsModal";
export default {
  name: "Home",
  components: {
    Year,
    ExtendedCard,
    Settings
  },
  computed: {
    ...mapState({
      articles: state => state.data,
      selectedLang: state => state.selectedLang,
      isVisible: state => state.modalOpen,
      toView: state => state.viewedArticle,
      setttingsOpen: state => state.setttingsModalOpen
    })
  },
  methods: {
    ...mapActions(["setData", "collapseAll", "openSettings"]),
    collapseAllItems() {
      this.collapseAll();
    },
    openSettingModal() {
      this.openSettings();
    }
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
    padding-top: 20px;
    padding-left: calc((100vw - 940px) / 2);
    padding-bottom: 20px;
  }
}
.material-icons {
  &__collapse-all {
    display: none;
  }

  &__settings-menu {
    padding-top: 20px;
    padding-right: calc((100vw - 940px) / 2);
    font-size: $desktop-logo;
  }
}

@media (max-width: 768px) {
  .header {
    width: 100%;
    position: fixed;
    background-color: $grey;
    bottom: 0;
    margin: 0;
    padding: 0;
    border-top: 1px solid $grey-darker;
    border-bottom: 0;
    z-index: 1;
    &__logo {
      margin-left: 20px;
    }
  }
  .content {
    width: 100vw;
    &__year {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .material-icons {
      &__collapse-all {
        display: block;
        font-size: $mobile-logo;
        position: absolute;
        right: 20px;
        bottom: 20px;
      }
    }
  }
}
</style>
