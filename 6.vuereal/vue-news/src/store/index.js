import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    user: {},
    item: [],
  },
  getters: {
    //computed랑 동일속성
    fetchedAsk(state) {
      return state.asks;
    },
  },
  mutations: mutations, // mutations만 적어도됨
  actions: actions,
});
