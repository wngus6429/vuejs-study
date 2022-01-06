<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">아이디</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">닉네임</label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">로그인</button>
    <!-- submit누르면 위에 @submit이 반응한다 -->
  </form>
</template>

<script>
// 여기서 axios를 불러올수도 있으나 안함
import { registerUser } from "@/api/index.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    submitForm() {
      console.log("확인");
      registerUser();
    },
  },
};
</script>

<style></style>
