<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './assets/main.scss';
   #app {
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     padding: 0px;
    //  background: url("./assets/Background2:2.svg");
     background: url("./assets/background2-bw.svg");
     background-size: 100vw;
     overflow: hidden;
 }
</style>
