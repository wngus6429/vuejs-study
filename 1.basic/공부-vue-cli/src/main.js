import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
// new Vue({
//   el:'#app', 랜더쪽은 여기 없음.
// render:h=> h(app),
// })
