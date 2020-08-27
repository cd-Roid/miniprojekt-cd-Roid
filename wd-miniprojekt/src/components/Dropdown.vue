<template>
  <div class="dropdown">
    <div class="dropdown__selected" @click="open">
      {{ selected }}
      <span class="material-icons material-icons--arrow">arrow_drop_down</span>
    </div>
    <div v-if="isOpen == true">
      <ul class="dropdown__items">
        <li
          @click="setLanguage(language.lang)"
          href="#"
          v-for="language in languages"
          :key="language.id"
        >
          {{ language.lang }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Dropdown",
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
  padding: 20px 15px;
  margin: auto 15%;
  max-width: max-content;
  &__selected {
    display: flex;
    height: 28px;
    padding: 5px;
    border: 1px solid $grey-light;
    background-color: $grey;
    max-width: inherit;
    margin: auto;
  }
  &__items {
    position: absolute;
    height: max-content;
    padding: 5px 14.5px;
    border: 1px solid $grey-light;
    background-color: $grey;
    width: 60px;
  }
}
.material-icons--arrow {
  margin: auto;
  padding-bottom: 10px;
}
</style>
