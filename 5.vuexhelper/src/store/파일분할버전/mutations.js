const addOneItem = (state, todoItem) => {
  let obj = { compledted: false, item: todoItem };
  localStorage.setItem(todoItem, JSON.stringify(obj)); //객체를 string으로 변환해줌
  state.todoItems.push(obj); //위에 부분은 local저장, 여기는 화면에 반영
  console.log(state);
};

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
  //splice원본 변화 있음, slice는 자르고 반환하지만 원본은 변화 없음
};

const toggleOneItem = (state, payload) => {
  console.log(state, payload);
  //todoItem.compledted = !todoItem.compledted;
  state.todoItems[payload.index].compledted = !state.todoItems[payload.index].compledted;
  //localstorage.update 갱신 같은게 없어서 이렇게 하는거임
  localStorage.removeItem(payload.todoItem.item);
  //아이템을 지웠다가 동일하게 세팅하고, 대신이제 바뀐거를 stringify를 해서 저장한다.
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};

const clearAllItem = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItem };
