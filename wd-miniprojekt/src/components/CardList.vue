<template>
  <div>
    <div v-for="article in articles" :key="article.objectId" class="card">
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
