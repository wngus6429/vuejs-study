<template
  ><div>
    <ul>
      <!-- v-for는 인덱스 활용가능 -->
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <!-- compledted가 false면 v-bind:class="{ checkBtnCompleted: todoItem.compledted }" 부분이 사라짐 -->
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.compledted }"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>
        <!-- v-bind의 클래스, 동적인 값을 부여, compledted가 true면 체크 회색, 가운데선 나타나게끔 -->
        <span v-bind:class="{ textCompleted: todoItem.compledted }">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  //뷰 라이프사이클. create 인스턴스가 호출되자 마자 실행, 라이프사이클 훅
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
      //console.log(todoItem, index);
    },
    toggleComplete: function(todoItem, index) {
      this.$emit("toggleItem", todoItem, index);
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
</style>
