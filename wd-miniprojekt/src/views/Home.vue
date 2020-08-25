<template>
  <div class="home">
    <Year />
    <ExtendedCard v-if="isVisible === true" :article="toView" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ExtendedCard from "../components/CardModal";
import Year from "../components/Year";
export default {
  name: "Home",
  components: {
    Year,
    ExtendedCard
  },
  computed: {
    ...mapState({
      articles: state => state.data,
      isVisible: state => state.modalOpen,
      toView: state => state.viewedArticle
    })
  },
  methods: {
    ...mapActions(["setData", "destructure"])
  },
  created() {
    this.setData("en");
    this.destructure();
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
.home {
  padding: 10% 15%;
  position: relative;
}
</style>
