<template>
  <div class="card">
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
<style lang="scss">
@import "../styles/_variables.scss";
.card {
  grid-column: span 2;
  &__img {
    width: $desktop-image-size;
    height: $desktop-image-size;
    object-fit: cover;
    &:hover {
      cursor: pointer;
    }
  }
}
@media (max-width: 768px) {
  .card {
    grid-column: span 1;
    margin: 0;
    &__img {
      object-fit: contain;
      width: 100%;
    }
  }
}
</style>
