<template>
  <div>
    <spinning-cube :face="active_face"></spinning-cube>

    <div class="cube_unfolded">
      <button :class="'side--' + face + (active_face == face ? ' active' : '')"
              :title="face"
              v-for="face in faces"
              v-on:click="active_face = face">
        {{ face }}
      </button>
    </div>

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

  // stupid Me can't do the darn math !!!
  // movMap defines for each
  //  a starting face, when applying a direction
  //  the resulting face
  const movMap = {
    front: { left: 'left', right: 'right', up: 'top', down: 'bottom' },
    back: { left: 'right', right: 'left', up: 'top', down: 'bottom' },
    left: { left: 'back', right: 'front', up: 'top', down: 'bottom' },
    right: { left: 'front', right: 'back', up: 'top', down: 'bottom' },
    top: { left: 'left', right: 'right', up: 'back', down: 'front' },
    bottom: { left: 'left', right: 'right', up: 'front', down: 'back' },
  };

  export default {
    name: 'arrow-control',
    components: {
      SpinningCube,
    },
    data() {
      return {
        active_face: 'front',
        faces: ['top', 'left', 'front', 'right', 'bottom', 'back'],
        directions: ['left', 'right', 'up', 'down'],
      };
    },
    methods: {
      turn: function turn(direction) {
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

  /* cube_map_unfolded */
  $map_side: 6vw;

  .cube_unfolded {
    width: $map_side * 3 + 5;
    height: $map_side * 6;
    position: absolute;
    right: $map_side / 2;
    top: $map_side / 2;

    > [class^='side--'] {
      width: $map_side;
      height: $map_side;
      display: inline-block;
      background-color: rgba(0, 0, 0, 0.05);
      outline: 1px solid rgba(0, 0, 0, 0.1);
      font-size: $map_side / 3.5;
      margin: 3px;

      &:hover, &.active{
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    .side--top, .side--bottom, .side--back {
      margin-left: $map_side; margin-right: $map_side;
    }
  }
</style>
