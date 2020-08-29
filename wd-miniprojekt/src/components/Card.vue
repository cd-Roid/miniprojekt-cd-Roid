<template>
  <div>
    <img
      class="card__img"
      @error="setPlaceholder"
      v-bind:src="article.images.sizes.xs.src"
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
      if (this.article.images === null) {
        this.removeImg();
      } else {
        const link = "https://via.placeholder.com/300";
        event.target.src = link;
      }
    },
    modalAction(article) {
      this.openModal(article);
    }
  }
};
</script>
