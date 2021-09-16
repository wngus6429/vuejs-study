import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store"; //변수라서 {}로 감싼거임

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
