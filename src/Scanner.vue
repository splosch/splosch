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

</style>
