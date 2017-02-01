<template>
  <div>
    <spinning-cube :face="active_face"></spinning-cube>

    <button v-for="face in faces" v-on:click="active_face = face">
      {{ face }}
    </button>
  </div>
</template>


<script>
  import SpinningCube from './SpinningCube';

  export default {
    name: 'arrow-control',
    components: {
      SpinningCube,
    },
    data() {
      return {
        active_face: 'front',
        faces: ['top', 'bottom', 'back', 'front', 'left', 'right'],
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
