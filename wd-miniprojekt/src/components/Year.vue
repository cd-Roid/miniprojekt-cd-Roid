<template>
  <div>
    <div class="yearSection" v-for="year in years" :key="year">
      <YearAccordion
        :year="year"
        :count="orderByYear(year).count"
        :articles="orderByYear(year).cardInput"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import YearAccordion from "../components/YearAccordion";
export default {
  name: "Year",
  components: {
    YearAccordion
  },
  computed: {
    ...mapState({
      years: state => state.years,
      article: state => state.filtered,
      show: state => state.accordionOpen
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
