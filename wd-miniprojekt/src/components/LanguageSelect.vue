<template>
  <div class="dropdown">
    <div class="dropdown__selected" @click="open">
      {{ selected }}
    </div>
    <div v-if="isOpen == true">
      <div
        @click="setLanguage(language.lang)"
        class="dropdown__items"
        href="#"
        v-for="language in languages"
        :key="language.id"
      >
        {{ language.lang }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "LanguageDropdown",
  computed: {
    ...mapState({
      languages: state => state.language,
      isOpen: state => state.langOpen,
      selected: state => state.selectedLang
    })
  },
  methods: {
    ...mapActions([
      "setData",
      "openLangModal",
      "closeLangModal",
      "destructure",
      "emptyFiltered"
    ]),
    open() {
      this.openLangModal();
    },
    setLanguage(lang) {
      this.closeLangModal();
      this.emptyFiltered();
      this.setData(lang);
      this.destructure();
    }
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
.dropdown {
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  margin: auto 15%;
  width: max-content;
  &__items {
    transform: translateY(30%);
    height: 28px;
    padding: 5px 15px;
    border: 1px solid #000000;
    background-color: $grey;
    max-width: inherit;
  }
  &__selected {
    transform: translateY(30%);
    height: 28px;
    padding: 5px 15px;
    border: 1px solid #000000;
    background-color: $grey;
    max-width: inherit;
  }
}
</style>
