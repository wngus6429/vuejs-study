<template>
  <div>
    <input type="text" v-model="newTodoItem" />
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem);
      //저장하는 로직
      localStorage.setItem("으악", this.newTodoItem); //mdn 검색, key와 value
      this.newTodoItem = ""; //초기화 비워줌
    },
  },
};
</script>

<style></style>
