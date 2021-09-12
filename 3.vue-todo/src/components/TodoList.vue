<template>
  <div>
    <ul>
      <!-- v-for는 인덱스 활용가능 -->
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <!-- compledted가 false면 v-bind:class="{ checkBtnCompleted: todoItem.compledted }" 부분이 사라짐 -->
        <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.compledted }" v-on:click="toggleComplete(todoItem, index)"></i>
        <!-- v-bind의 클래스, 동적인 값을 부여, compledted가 true면 체크 회색, 가운데선 나타나게끔 -->
        <span v-bind:class="{ textCompleted: todoItem.compledted }">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return { todoItems: [] };
  },
  //뷰 라이프사이클. create 인스턴스가 호출되자 마자 실행, 라이프사이클 훅
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
      //splice원본 변화 있음, slice는 자르고 반환하지만 원본은 변화 없음
    },
    toggleComplete: function(todoItem) {
      todoItem.compledted = !todoItem.compledted;
      //localstorage.update 갱신 같은게 없어서 이렇게 하는거임
      localStorage.removeItem(todoItem.item);
      //설정 값을 바꾸고 나서, 저장을 하는데. 저장할려면 갱신인데.
      //업데이트가 없어서 아이템을 지웠다가 동일하게 세팅하고, 대신이제 바뀐거를 stringify를 해서 저장한다.
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      //console.log(todoItem, index);
    },
  },
  created: function() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //JSON.parse는 string 을 객체로 바꿔준다.
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
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
