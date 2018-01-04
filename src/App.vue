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

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100vh; */
  padding: 0px;
  background: url("./assets/Background.svg") no-repeat center center fixed;
  background-size: cover;
}
body{
  background: linear-gradient(10deg,rgb(255, 118, 54), rgb(255, 137, 107)) no-repeat center center fixed;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  height: 100vh;
}
h1{
  color:white;
  font-weight: 800;
}
</style>
