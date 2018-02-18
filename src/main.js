// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Scanner from './Scanner';
import StackedBarChart from './components/StackedBarChart';

const NotFound = { template: '<p>Page not found :(</p>' };
const Home = App;
const QRScanner = Scanner;
const Overview = StackedBarChart;

const routes = {
  '/': Home,
  '/cube': Home,
  '/scan': QRScanner,
  '/overview': Overview,
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  data: {
    currentRoute: window.location.pathname,
  },
  components: { App },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
