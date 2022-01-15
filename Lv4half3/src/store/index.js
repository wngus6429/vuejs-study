import Vue from "vue";
import Vuex from "vuex";
import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from "@/utils/cookies";
import { loginUser } from "@/api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
    // 있으면 쓰고 없으면 없다
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit("setToken", data.token);
      commit("setUsername", data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data; //나중에 활용을 위해
      //기본적으로 프로미스 반환되지만 걍 넣어둠
    },
  },
});
