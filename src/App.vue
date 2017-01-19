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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
