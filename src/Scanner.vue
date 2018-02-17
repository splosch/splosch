<template>
  <div id="scanner">
    <h1>Scan Me!</h1>
    <qrcode-reader></qrcode-reader>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { QrcodeReader } from 'vue-qrcode-reader';
  import AppFooter from './components/Footer';

  export default {
    name: 'scanner',
    components: {
      AppFooter,
      QrcodeReader,
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

  .center{
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%, 0);
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
