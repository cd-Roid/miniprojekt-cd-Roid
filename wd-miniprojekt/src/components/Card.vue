<template>
  <div class="card">
    <img
      class="card-img"
      @error="setPlaceholder"
      v-bind:src="article.images.sizes.s.src"
      v-bind:alt="article.title"
      @click="CardExtendend"
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
    ...mapActions(["removeImg"]),
    setPlaceholder() {
      if (this.article.images === null) {
        this.removeImg();
      } else {
        const link = "https://via.placeholder.com/300";
        event.target.src = link;
      }
    }
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
.card {
  margin: $_desktop-gutter;
  overflow: hidden;
  &-img {
    width: $desktop-image-size;
    height: $desktop-image-size;
    object-fit: cover;
  }
}
</style>
