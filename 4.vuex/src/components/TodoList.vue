<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- v-for는 인덱스 활용가능 -->
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
        <!-- compledted가 false면 v-bind:class="{ checkBtnCompleted: todoItem.compledted }" 부분이 사라짐 -->
        <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.compledted }" v-on:click="toggleComplete(todoItem, index)"></i>
        <!-- v-bind의 클래스, 동적인 값을 부여, compledted가 true면 체크 회색, 가운데선 나타나게끔 -->
        <span v-bind:class="{ textCompleted: todoItem.compledted }">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  //뷰 라이프사이클. create 인스턴스가 호출되자 마자 실행, 라이프사이클 훅
  methods: {
    //this.$store.commit("addOneItem", this.newTodoItem);
    removeTodo(todoItem, index) {
      //const obj = {todoItem, index} 이렇게 해서 밑에 obj 넣어도됨
      this.$store.commit("removeOneItem", { todoItem, index });
    },
    toggleComplete(todoItem, index) {
      this.$store.commit("toggleOneItem", { todoItem, index });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 10px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
