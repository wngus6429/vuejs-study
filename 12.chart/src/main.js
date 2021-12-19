import Vue from "vue";
import App from "./App.vue";
import ChartPlugin from "./plugins/ChartPlugin";

Vue.config.productionTip = false;

// install() 실행, ChartPlugin.js
// $_Chart를 어디든지 사용할수 있게 한다.
Vue.use(ChartPlugin);
// new Vuex.Store({});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
