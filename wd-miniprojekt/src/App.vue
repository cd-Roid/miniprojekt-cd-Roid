<template>
  <div id="app">
    <Home />
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
