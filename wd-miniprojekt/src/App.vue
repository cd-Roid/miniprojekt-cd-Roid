<template>
  <div id="app">
    <Home class="home" />
  </div>
</template>
<script>
import Home from "./views/Home";
export default {
  components: {
    Home
  }
};
</script>
<style lang="scss">
@import "./styles/_reset.scss";
@import "./styles/_variables.scss";
#app {
  font-family: Source Sans Pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $grey-darker;
}
</style>
