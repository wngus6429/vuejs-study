import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp';

Vue.use(Vuex);

//export 를 해서 store를 다운데서 접근 할수 있게 한거임.
export const store = new Vuex.Store({
  modules: {
    todoApp,
  },
});
