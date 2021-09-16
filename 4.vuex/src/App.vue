<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addTodoItem="addOneItem" />
    <!-- TodoInput에서 addTodoItem으로 이벤트가 오면 addOneItem이 실행 -->
    <!-- <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름='현재 컴포넌트의 메소드명' /> -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem" />
    <!-- <TodoList v-bind:내려보낼 프롭스 속성="현재 위치의 컴포넌트 데이터속성" /> -->
    <!-- removeItem이라는 이벤트가 발생하면 removeOneItem 메소드이 실행되는거지 -->
    <TodoFooter v-on:clearAll="clearAllItem" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return {
      todoItems: [],
      //리팩토링으로 todolist.vue에 있던걸 여기다 적었으니
      //App.vue에서 관리가 되는거지, todolist의 props로 내렸다는걸 기억
      //todoItems는 어디서든 사용하는 데이터
    };
  },
  methods: {
    addOneItem(todoItem) {
      let obj = { compledted: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj)); //객체를 string으로 변환해줌
      this.todoItems.push(obj); //위에 부분은 local저장, 여기는 화면에 반영
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
      //splice원본 변화 있음, slice는 자르고 반환하지만 원본은 변화 없음
    },
    toggleOneItem(todoItem, index) {
      console.log(todoItem, index);
      //todoItem.compledted = !todoItem.compledted;
      this.todoItems[index].compledted = !this.todoItems[index].compledted;
      //localstorage.update 갱신 같은게 없어서 이렇게 하는거임
      localStorage.removeItem(todoItem.item);
      //아이템을 지웠다가 동일하게 세팅하고, 대신이제 바뀐거를 stringify를 해서 저장한다.
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem() {
      localStorage.clear();
      this.todoItems = [];
    },
  },

  name: "App",
  components: {
    TodoHeader, //'TodoHeader' : TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10x 10px rgba(0, 0, 0, 0.03);
}
</style>
