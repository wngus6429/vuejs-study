<template>
  <div>
    <ul>
      <!-- v-for는 인덱스 활용가능 -->
      <li v-for="(todoItem, index) in todoItems" v-bind:key="{ todoItem, index } + 'key'" class="shadow">
        {{ todoItem }}
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: [],
    };
  },
  //뷰 라이프사이클. create 인스턴스가 호출되자 마자 실행, 라이프사이클 훅
  created: function() {
    console.log("확인");
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        //webpack 이부분이 배열에 들어가지 않기 위해
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(i));
        }
        //console.log(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
      //splice원본 변화 있음, slice는 자르고 반환하지만 원본은 변화 없음
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
