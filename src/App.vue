<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
}
</script>

<style lang="scss">
  @import "~@/styles/layout.scss";
  @import "~@/styles/variables.scss";
  body {
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
  }
  #app {
    min-height: 100vh;
    min-width: 100vw;
    background-color: $primary;
  }
</style>