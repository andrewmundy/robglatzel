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
  padding: 0px;
  background: url("./assets/Background.svg") no-repeat center center fixed;
  background-size: cover;
}
body{
  background: linear-gradient(10deg,rgb(255, 118, 54), rgb(255, 137, 107)) no-repeat center center fixed;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  
}
h1{
  color:white;
  font-weight: 800;
}
h2{
  color:rgba(255, 255, 255, 0.719);
}



@media screen and (max-device-width: 1024px){
  body{
    background: linear-gradient(10deg,rgb(139, 185, 255), rgb(225, 107, 255));
  }
  #app{
    background-position: 0 0;
  }
}
</style>
