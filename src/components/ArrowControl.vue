<template>
  <div>
    <spinning-cube :face="active_face"></spinning-cube>

    <button v-for="face in faces" v-on:click="active_face = face">
      {{ face }}
    </button>

    <div class="center">
      <button :class="'arrow--' + direction"
              :title="direction"
              v-for="direction in directions"
              v-on:click="turn(direction)">
      </button>
    </div>
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
        directions: ['left', 'right', 'up', 'down'],
      };
    },
    methods: {
      turn: function turn(direction) {
        const movMap = {
          front: { left: 'left', right: 'right', up: 'top', down: 'bottom' },
          back: { left: 'right', right: 'left', up: 'top', down: 'bottom' },
          left: { left: 'back', right: 'front', up: 'top', down: 'bottom' },
          right: { left: 'front', right: 'back', up: 'top', down: 'bottom' },
          top: { left: 'left', right: 'right', up: 'back', down: 'front' },
          bottom: { left: 'left', right: 'right', up: 'front', down: 'back' },
        };
        if (movMap[this.active_face]) {
          this.active_face = movMap[this.active_face][direction] || 'front';
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $cube-size: 30vh;
  $arrow-size: $cube-size / 6;
  // ◀,▶,▲,▼
  // ◁,▷,△,▽

  .arrow--left{
    left: - $cube-size;
    &:before{ content: "◀";}
  }
  .arrow--right{
    right: - $cube-size;
    &:before{ content: "▶";}
  }
  .arrow--up{
    top: - $cube-size;
    &:before{ content: "▲";}
  }
  .arrow--down{
    bottom: - $cube-size;
    &:before{ content: "▼";}
  }

  [class^='arrow']{
    font-size: $arrow-size;
    position: absolute;
    line-height: $arrow-size;
    margin-left: -$arrow-size / 2;
    margin-top: -$arrow-size / 2;

    &:hover{
      color: white;
      text-shadow: 0 0 1px black;
    }
  }

/* Button Reset Styles
   -------------------
   taken from (Takeru Suzuki) -> https://codepen.io/terkel/pen/dvejH */
  [role="button"],
  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
      -webkit-box-sizing: content-box;
         -moz-box-sizing: content-box;
              box-sizing: content-box;
  }

  /* Reset `button` and button-style `input` default styles */
  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
      background: none;
      border: 0;
      color: inherit;
      /* cursor: default; */
      font: inherit;
      line-height: normal;
      overflow: visible;
      padding: 0;
      -webkit-appearance: button; /* for input */
      -webkit-user-select: none; /* for button */
         -moz-user-select: none;
          -ms-user-select: none;
  }
  input::-moz-focus-inner,
  button::-moz-focus-inner {
      border: 0;
      padding: 0;
  }
/* END Button Reset Styles */
</style>
