import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Carousel3d from "vue-carousel-3d";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
Vue.use(Carousel3d);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
