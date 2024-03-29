import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};
//export 를 해서 store를 다운데서 접근 할수 있게 한거임.
export const store = new Vuex.Store({
  state: { todoItems: storage.fetch() },
  mutations: {
    addOneItem(state, todoItem) {
      console.log('스텟', state);
      let obj = { compledted: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj)); //객체를 string으로 변환해줌
      state.todoItems.push(obj); //위에 부분은 local저장, 여기는 화면에 반영
    },
    removeOneItem(state, payload) {
      console.log(payload);
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
      //splice원본 변화 있음, slice는 자르고 반환하지만 원본은 변화 없음
    },
    toggleOneItem(state, payload) {
      console.log(state, payload);
      // todoItem.compledted = !todoItem.compledted;
      state.todoItems[payload.index].compledted = !state.todoItems[payload.index].compledted;
      //localstorage.update 갱신 같은게 없어서 이렇게 하는거임
      localStorage.removeItem(payload.todoItem.item);
      //아이템을 지웠다가 동일하게 세팅하고, 대신이제 바뀐거를 stringify를 해서 저장한다.
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
