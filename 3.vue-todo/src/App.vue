<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addTodoItem="addOneItem" />
    <!-- TodoInput에서 addTodoItem으로 이벤트가 오면 addOneItem이 실행 -->
    <!-- <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름='현재 컴포넌트의 메소드명' /> -->
    <TodoList v-bind:propsdata="todoItems" />
    <!-- <TodoList v-bind:내려보낼 프롭스 속성="현재 위치의 컴포넌트 데이터속성" /> -->
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data: function() {
    return {
      todoItems: [],
      //리팩토링으로 todolist.vue에 있던걸 여기다 적었으니
      //App.vue에서 관리가 되는거지, 이걸 todolist로 보내줘야함
      //todoItems는 어디서든 사용하는 데이터
    };
  },
  methods: {
    addOneItem: function(todoItem) {
      let obj = { compledted: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj)); //객체를 string으로 변환해줌
      this.todoItems.push(obj); //위에 부분은 local저장, 여기는 화면에 반영
    },
  },
  created: function() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //this.todoItems.push(localStorage.key(i)); ,  JSON.parse는 string 을 객체로 바꿔준다.
        }
      }
    }
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
