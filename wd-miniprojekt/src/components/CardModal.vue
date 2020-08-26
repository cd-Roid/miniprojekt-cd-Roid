<template>
  <div>
    <div class="modal">
      <p>{{ article.title }}</p>
      <p>{{ article.dating }}</p>
      <img v-bind:src="article.images.sizes.s.src" v-bind:alt="article.title" />
      <section>{{ article.description }}</section>
      <p>{{ article.inventoryNumber }}</p>
      <p>{{ article.repository }}</p>
      <button @click.prevent="close">close Modal</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CardModal",
  props: {
    article: Object
  },
  methods: {
    ...mapActions(["closeModal"]),
    close() {
      this.closeModal();
    }
  }
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.modal {
  color: $grey;
  background-color: $grey-dark;
  display: flex;
  flex-direction: row;
  height: 460px;
  left: 33%;
  position: fixed;
  top: 28%;
  width: 940px;
  z-index: 1;
}
</style>
