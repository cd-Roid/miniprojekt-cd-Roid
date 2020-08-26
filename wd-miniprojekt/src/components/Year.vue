<template>
  <div>
    <div class="yearSection" v-for="year in years" :key="year">
      <YearStat :year="year" :count="orderByYear(year).count" />
      <CardList
        class="yearSection__cardList"
        :articles="orderByYear(year).cardInput"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardList from "../components/CardList";
import YearStat from "../components/YearStats";
export default {
  name: "Year",
  components: {
    CardList,
    YearStat
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
      const count = cardInput.length;
      return { cardInput, count };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.yearSection {
  display: flex;
  flex-direction: column;
  &__cardList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
