<template>
  <div class="center">
  	<div perspective="center">
  		<div id="cube" :class="face">
  			<div class="front">
          <span class="cube-title">
            MAKE<br>
            YOUR<br>
            CUBE
          </span>
        </div>
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
    props: ['face'],
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

  #cube {
    display: block;
    position: relative;
    width: $size;
    height: $size;
    transform-style: preserve-3d;

    .cube-title {
      font-size: 8vh;
      line-height: 9vh;
      font-weight: bold;
      display: block;
      margin-top: 2vh;
    }

    &:hover .cube-title{
      color: white;
      cursor: pointer;
    }

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

  @keyframes spinYhalf_1 {
    from { transform: rotateY(0); }
    to { transform: rotateY(180deg); }
  }

  @keyframes spinYhalf_1_c {
    from { transform: rotateY(180deg); }
    to { transform: rotateY(180deg); }
  }

  @keyframes spinYhalf_2 {
    from { transform: rotateY(180deg); }
    to { transform: rotateY(360deg); }
  }

  @keyframes dissolveText {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes dissolveText_c {
    from { opacity: 0; }
    to { opacity: 0; }
  }

  #cube {
    transition: transform 2s;

    &.front{transform: rotateY(0);}
    &.left{transform: rotateY(90deg) ;}
    &.back{transform: rotateY(180deg);}
    &.right{transform: rotateY(270deg);}
    &.top{transform: rotateX(-90deg);}
    &.bottom{transform: rotateX(90deg);}

    // &:hover {
    //   animation:
    //     spinYhalf_1 2s 1,
    //     spinYhalf_1_c 2s 2s infinite;
    //
    //   .cube-title {
    //     animation:
    //       dissolveText 1s 1 1s,
    //       dissolveText_c 1s 2s infinite;
    //   }
    // }
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
