<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
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

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
