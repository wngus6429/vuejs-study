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
    <button :disabled="!isUsernameValid || !password" type="submit">
      회원가입
    </button>
    <!-- submit누르면 위에 @submit이 반응한다 -->
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
// 여기서 axios를 불러올수도 있으나 안함
import { registerUser } from "../api/index";
import { validateEmail } from "@/utils/validation";

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      // log
      logMessage: "",
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      console.log("확인");
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      // const response = await registerUser(userData);
      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username}님이 가입 되었습니다`;
      this.initForm();
    },
    initForm() {
      this.username = ""; // null 도 가능
      this.password = "";
      this.nickname = "";
    },
  },
};
</script>

<style></style>
