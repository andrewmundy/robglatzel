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
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0px;
    background: url("./assets/Background2:2.svg");
    background-size: cover;
    overflow: hidden;
  }

  body {
    height: 100%;
    background: #340099;
    margin: 0px;
    padding: 0px;
  }

  h1 {
    color: white;
    font-weight: 800;
  }

  h2 {
    color: rgba(255, 255, 255, 0.719);
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  @media screen and (max-device-width: 1024px) {
    body {
      background: #340099;
    }
    #app {
      background-position: -200px 200px;
    }
  }

  @keyframes hvr-bob {
    0% {
      transform: translateY(-8px) skew(-2deg, 2deg);
    }

    50% {
      transform: translateY(-4px) skew(-2deg, 2deg);
    }

    100% {
      transform: skew(-2deg, 2deg) translateY(-8px);
    }
  }


  .hvr-bob {
    animation: hvr-bob 2s 0.3s ease-in-out infinite;
    text-shadow: 0px 0px 10px black;
  }
</style>
