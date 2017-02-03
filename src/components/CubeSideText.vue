<template>
  <span v-html="text" class="cube-title"></span>
</template>

<script>
  export default {
    name: 'cube-side-text',
    data() {
      return {
        text: 'JUST<br>A<br>CUBE',
      };
    },
  };
</script>
