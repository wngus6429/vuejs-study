<template>
  <div class="inputBox shadow">
    <!-- 참고로 shadow저건 App.vue 맨 밑에 있다 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
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
      //newTodoItem가
      if (this.newTodoItem !== "") {
        let obj = { compledted: false, item: this.newTodoItem };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        //객체를 string으로 변환해줌
        //mdn 검색, key와 value
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  /* background: linear-gradient(to right #e60de6, #8763fb); */
  background: rgba(133, 19, 19, 0.322);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: blue;
  vertical-align: middle;
}
</style>
