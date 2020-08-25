<template>
  <div>
    <div class="yearSection" v-for="year in years" :key="year">
      <p class="yearSection-date">{{ year }}</p>
      <CardList class="yearSection-cardList" :articles="orderByYear(year)" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardList from "../components/CardList";
export default {
  name: "Year",
  components: {
    CardList
  },
  computed: {
    ...mapState({
      years: state => state.years,
      article: state => state.filtered
    })
  },
  methods: {
    orderByYear(year) {
      let cardInput = {};
      cardInput = this.article.find(item => item[0].dating == year);
      return cardInput;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.yearSection {
  display: flex;
  flex-direction: column;
  &-date {
    font-size: $desktop-header;
    background-color: $grey-lightest;
  }
  &-cardList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
