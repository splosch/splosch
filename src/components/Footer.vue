<template>
  <div class="footer">
    <span meta>author: {{ author }}</span>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
    data() {
      return {
        author: '"Mario Winkler"',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .footer {
    position: absolute;
    bottom: 1vh;
    left: 1vw;
  }
</style>
