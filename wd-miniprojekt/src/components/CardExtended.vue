<template>
  <div>
    <p>{{ article.titles[0].title }}</p>
    <img
      v-bind:src="article.images.sizes.s.src"
      v-bind:alt="article.inventoryNumber"
    />
    <section>{{ article.description }}</section>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    article: Object
  }
};
</script>

<style></style>
