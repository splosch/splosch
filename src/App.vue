<template>
  <div id="app">
    <spinning-cube></spinning-cube>
  </div>
</template>

<script>
  import SpinningCube from './components/SpinningCube';

  export default {
    name: 'app',
    components: {
      SpinningCube,
    },
  };
</script>

<style>
  body{
    height: 100vh;
    width: 100vw;
    margin: 0;
  }

  #app {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(35deg, rgb(168, 201, 190), rgb(237, 241, 238));

    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
