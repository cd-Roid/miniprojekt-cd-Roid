<template>
  <div>
    <img
      class="card__img"
      @error="setPlaceholder"
      v-bind:src="article.images.sizes.s.src"
      v-bind:alt="article.title"
      @click="modalAction(article)"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Card",
  props: {
    article: Object
  },
  methods: {
    ...mapActions(["removeImg", "openModal"]),
    setPlaceholder() {
      const link = "https://via.placeholder.com/300";
      event.target.src = link;
    },
    modalAction(article) {
      this.openModal(article);
    }
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
.card {
  grid-column: span 1;
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
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
