<template>
  <div class="inputBox shadow">
    <!-- 참고로 shadow저건 App.vue 맨 밑에 있다 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <modal v-if="showModal" @close="showModal = false">
      <!-- you can use custom content here to overwrite default content -->
      <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== "") {
        // this.$emit('이벤트이름', 인자1, 인자2, ...)
        this.$emit("addTodoItem", this.newTodoItem); //이게 App.vue 4번째로 가지
        this.clearInput();
      } else {
        <modal />;
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    },
  },
  components: { Modal: Modal },
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
