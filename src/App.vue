<template>
  <div id="app">
    <arrow-control></arrow-control>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from './components/Footer';
  import ArrowControl from './components/ArrowControl';

  export default {
    name: 'app',
    components: {
      AppFooter,
      ArrowControl,
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

  a {
    color: rgba(0,0,0,0.8);
  }

  [meta]{
    color: rgba(255,255,255,0.6);
    font-family: Consolas, Robot, monospace ;

    &[meta="obj"]{
      &:before{
        content: "{ "
      }
      &:after{
        content: " }"
      }
    }

    &[meta="prop"]{
      white-space: nowrap;
    }

    & em {
      color: rgba(0,0,0,0.5);
    }
  }
</style>
