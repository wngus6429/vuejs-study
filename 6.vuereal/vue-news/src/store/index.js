import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchJobs, fetchAskList } from "../api/index";
import mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
  },
  mutations: mutations,
  getters: {
    //computed랑 동일속성
    fetchedAsk(state) {
      return state.asks;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => context.commit("SET_NEWS", response.data))
        //state.new = response data 안됨 ㅋㅋ 뮤테이션 써야함
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_JOBS(context) {
      fetchJobs()
        .then(({ data }) => context.commit("SET_JOBS", data))
        .catch((error) => console.log(error));
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => commit("SET_ASK", data))
        .catch((error) => console.log(error));
    },
  },
});
