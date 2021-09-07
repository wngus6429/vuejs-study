<template>
  <div>
    <!-- <form v-on:submit.prevent="submitForm"> -->
    <form v-on:submit="submitForm">
      <div>
        <label for="username">ID: </label>
        <input id="username" type="text" v-model="username" />
        <!-- v-model 어떤 값이 입력될때 마다 username 서로 연결 해서 같이 변화 -->
      </div>
      <div>
        <label for="password">PW: </label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  //데이터라는 속성에 원래 객체를 썻지만 컴포넌트 단위면 컴포넌트간에
  //데이터가 공유되지 않게,
  //데이터에 function을 연결해서 새객체를 리턴해주는 구문을 사용하면됨
  data: function() {
    return {
      username: "", //타입 string이라 null 아니라 빈문자열
      password: "",
    };
  },
  methods: {
    submitForm: function(event) {
      event.preventDefault();
      console.log(this.username, this.password);
      let 주소 = "https://jsonplaceholder.typicode.com/users";
      let 데이터 = { username: this.username, password: this.password };
      axios
        .post(주소, 데이터)
        .then(function(response) {
          console.log("성공");
          console.log(response);
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        }); //http통신 이용, 데이터 보내고 받기 라이브러리
    },
    // submitForm(e) {
    //   e.preventDefault();
    //   console.log(this.username, this.password);
    // },
  },
};
</script>

<style></style>
