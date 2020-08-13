<template>
  <div>
    <img :src="realUrl" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    url: Object
  },
  data() {
    return {
      realUrl: this.url.sizes.s.src
    };
  }
};
</script>

<style></style>
