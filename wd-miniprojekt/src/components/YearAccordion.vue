<template>
  <div>
    <div class="accordion" @click="toggle">
      <p class="accordion__date">{{ year }}</p>
      <div class="accordion__line"></div>
      <span class="material-icons material-icons__img-icon">photo</span>
      <p class="accordion__count">{{ count }}</p>
      <div class="accordion__line"></div>
      <span class="material-icons material-icons__arrowdown">{{
        arrowValue
      }}</span>
    </div>
    <CardList
      v-if="collapseAllItems"
      v-show="show"
      class="yearSection__cardList"
      :articles="articles"
    />
  </div>
</template>
<script>
import CardList from "../components/CardList";
import { mapState } from "vuex";
export default {
  name: "YearAccordion",
  components: {
    CardList
  },
  props: {
    year: Number,
    count: Number,
    articles: Array
  },
  data() {
    return {
      show: true,
      arrowValue: "keyboard_arrow_up",
      arrowUp: "keyboard_arrow_up",
      arrowDown: "keyboard_arrow_down"
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
      if (this.show == true) {
        this.arrowValue = this.arrowUp;
      } else {
        this.arrowValue = this.arrowDown;
      }
    }
  },
  computed: {
    ...mapState({ collapseAllItems: state => state.collapsed })
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
.accordion {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  margin-top: 30px;
  justify-content: space-evenly;
  &__date {
    font-size: $desktop-header;
    font-weight: bold;
    margin: 0px;
  }
  &__count {
    font-size: $desktop-fliestext;
    margin: auto;
    color: $grey-light;
    &:hover {
      cursor: default;
    }
  }
  &__line {
    width: 34%;
    height: 0;
    border: 1px solid #c4c4c4;
    margin: auto;
  }
  &:hover {
    cursor: pointer;
  }
}
.yearSection {
  &__cardList {
    display: grid;
    grid-template-columns: repeat(6, $desktop-image-size);
    grid-gap: $_desktop-gutter;
    margin-top: 3px;
    margin-bottom: 3px;
  }
}
.material-icons {
  &__img-icon {
    color: $grey-light;
    margin: auto;
  }
  &__arrowdown {
    margin: auto;
    font-size: $desktop-logo;
  }
}

@media (max-width: 768px) {
  .accordion {
    background-color: $grey-darker;
    margin: 0;
    &__date {
      color: $white;
      font-size: $mobile-logo;
      margin: 20px;
    }
    &__line {
      display: none;
    }
    &__count {
      margin-right: 40px;
      margin-left: 0px;
      font-size: $mobile-logo;
    }
  }
  .material-icons {
    &__arrowdown {
      display: none;
    }
    &__img-icon {
      font-size: $mobile-title;
      margin-right: 10px;
    }
  }
  .yearSection {
    &__cardList {
      display: grid;
      grid-template-columns: repeat(3, $_mobile-grid);
      grid-gap: 2px;
      margin-top: 3px;
      margin-bottom: 3px;
    }
  }
}
</style>
