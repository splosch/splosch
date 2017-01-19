<template>
  <div id="app">
    <spinning-cube></spinning-cube>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import SpinningCube from './components/SpinningCube';
  import AppFooter from './components/Footer';

  export default {
    name: 'app',
    components: {
      SpinningCube,
      AppFooter,
    },
  };
</script>

<style lang="scss">
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

  [meta]{
    color: rgba(255,255,255,0.6);
    font-family: Consolas, Robot, monospace ;
    
    &:before{
      content: "{ "
    }
    &:after{
      content: " }"
    }
  }
</style>
