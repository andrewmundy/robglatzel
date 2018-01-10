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
html{
  background:rgb(24, 24, 24);
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  background: url("./assets/Background2:2.svg");
  background-size: cover;
  overflow:hidden;
}
body{
  background:linear-gradient(10deg, rgb(139, 185, 255),rgb(255, 107, 188));
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
a{
  cursor: pointer;
  text-decoration: none;
  color:inherit;
}
button{
  cursor: pointer;
}
li{
  list-style: none;
}


@media screen and (max-device-width: 1024px){
  body{
    background: linear-gradient(10deg,rgb(139, 185, 255), rgb(225, 107, 255));
  }
  #app{
    background-position: -200px 200px;
  }
}
</style>
