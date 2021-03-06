import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
// * 아스타리스크는 전부를 가져온다는 거임
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

//export 를 해서 store를 다운데서 접근 할수 있게 한거임.
export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters, //getters: getters
  mutations, //mutations: mutations
});
