<template>
  <div class="center">
  	<div perspective="center">
  		<div class="cube">
  			<div class="front"></div>
  			<div class="back"></div>
  			<div class="top"></div>
  			<div class="bottom"></div>
  			<div class="left"></div>
  			<div class="right"></div>
  		</cube>
  	</div>
  </div>
</template>


<script>
  export default {
    name: 'spinning-cube',
    data() {
      return {
        msg: 'uhh it`s spinning :D',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $size: 30vh;
  $perspective: $size*3;

  [perspective="center"] {
    perspective: $perspective;
    perspective-origin: 50% $size/2;
  }

  .cube {
    display: block;
    position: relative;
    width: $size;
    height: $size;
    transform-style: preserve-3d;

    > * {
      position: absolute;
      width: $size;
      height: $size;
      background-color: rgba(0,0,0,0.05);
      outline: 1px solid rgba(0,0,0,0.1);
    }

    .back {
      transform: translateZ(-$size/2) rotateY(180deg);
    }

    .right {
      transform: rotateY(-270deg) translateX($size/2);
      transform-origin: top right;
    }

    .left {
      transform: rotateY(270deg) translateX(-$size/2);
      transform-origin: center left;
    }

    .top {
      transform: rotateX(-90deg) translateY(-$size/2);
      transform-origin: top center;
    }

    .bottom {
      transform: rotateX(90deg) translateY($size/2);
      transform-origin: bottom center;
    }

    .front {
      transform: translateZ($size/2);
    }
  }

  @keyframes spinY {
    from { transform: rotateY(0); }
    to { transform: rotateY(360deg); }
  }

  @keyframes spinX {
    from { transform: rotateX(0); }
    to { transform: rotateX(360deg); }
  }

  .cube {
    animation:
    spinY 5s infinite;
  }
  
  .center{
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%, 0);
  }

  .author {
    color: rgba(0,0,0,0.4);
    padding-top: 50vh;
    font-size: 0.8em;
    &:before{
      content: "by ";
    }
  }

</style>
