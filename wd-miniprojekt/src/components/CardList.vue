<template>
  <div>
    <div
      class="cardContainer"
      v-for="article in articles"
      :key="article.objectId"
    >
      <Card :article="article" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "CardList",
  components: {
    Card
  },
  props: {
    articles: Array
  }
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.cardContainer {
  display: flex;
  flex-direction: column;
}
</style>
