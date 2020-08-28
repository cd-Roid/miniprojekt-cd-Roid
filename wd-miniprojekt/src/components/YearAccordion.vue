<template>
  <div>
    <div class="accordion">
      <p class="accordion__date">{{ year }}</p>
      <div class="accordion__line"></div>
      <span class="material-icons material-icons__img-icon">photo</span>
      <p class="accordion__count">{{ count }}</p>
      <div class="accordion__line"></div>
      <span class="material-icons material-icons__arrowdown" @click="toggle">
        {{ arrowValue }}
      </span>
    </div>
    <CardList
      v-show="show"
      class="yearSection__cardList"
      :articles="articles"
    />
  </div>
</template>
<script>
import CardList from "../components/CardList";
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
  }
  &__line {
    width: 38%;
    height: 0;
    border: 1px solid #c4c4c4;
    margin: auto;
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
</style>
