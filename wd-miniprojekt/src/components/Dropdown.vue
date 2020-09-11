<template>
  <div class="dropdown">
    <div class="dropdown__selected" @click="toggle">
      {{ selected }}
      <span class="material-icons material-icons__dropdown__arrow"
        >arrow_drop_down</span
      >
    </div>
    <div v-if="show == true">
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
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapState({
      languages: state => state.language,
      selected: state => state.selectedLang
    })
  },
  methods: {
    ...mapActions(["setData", "destructure", "emptyFiltered"]),
    toggle() {
      this.show = !this.show;
    },
    setLanguage(lang) {
      this.show = false;
      this.emptyFiltered();
      this.setData(lang);
      this.destructure();
    }
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
/**
 */
.dropdown {
  position: relative;
  &__selected {
    display: flex;
    height: 20px;
    padding: 2px;
    justify-content: space-between;
    border: 1px solid $grey-light;
    background-color: $grey;
    width: 120px;
    &:hover {
      cursor: pointer;
    }
  }
  &__items {
    position: absolute;
    height: max-content;
    padding: 4px;
    border: 1px solid $grey-light;
    background-color: $grey;
    width: 101px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
