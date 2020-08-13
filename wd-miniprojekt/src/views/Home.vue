<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-for="article in articles" :key="article.objectId">
      {{ article.titles[0].title }} - {{ article.sortingNumber}}
    </div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({ articles: state => state.data_en })
  },
  methods: {
    ...mapActions(["fetchDataEnglish"])
  },
  created() {
    this.fetchDataEnglish();
  }
};
</script>
