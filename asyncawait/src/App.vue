<template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-bind:key="item + 1" v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { handleException } from "./utils/handler";
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    // then() 구문 쓸려면 catch 꼭 붙여줘야함
    loginUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          if (response.data.id === 1) {
            console.log("사용자가 인증되었습니다.");
            axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
              console.log(response);
              this.items = response.data;
            });
          }
        })
        .catch((error) => console.log(error));
    },
    async loginUser1() {
      // 당연히 try catch 써야하지
      try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        if (response.data.id === 1) {
          console.log("사용자가 인증되었습니다.");
          let list = await axios.get("https://jsonplaceholder.typicode.com/todos");
          this.items = list.data;
        }
      } catch (error) {
        handleException(error.status);
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
