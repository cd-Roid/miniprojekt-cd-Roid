<template>
  <div class="home">
    <Year />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Year from "../components/Year";
export default {
  name: "Home",
  components: {
    Year
  },
  computed: {
    ...mapState({ articles: state => state.data })
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
}
</style>
