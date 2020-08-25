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
  position: fixed;
  display: flex;
  flex-direction: row;
  z-index: 1;
  background-color: $grey-dark;
  width: 940px;
  height: 460px;
  color: $grey;
  top: 28%;
  left: 33%;
}
</style>
