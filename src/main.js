import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./Store";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
