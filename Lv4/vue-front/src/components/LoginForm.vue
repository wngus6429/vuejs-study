<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID:</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW:</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">로그인</button>
    <p>{{ logMessage }}</p>
    <p>{{ logError }}</p>
  </form>
</template>

<script>
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";

export default {
  data() {
    return {
      username: "",
      password: "",
      //log
      logMessage: "",
      logError: "",
    };
  },
  // 데이터변화에 따라서, 프롭스건, 데이터건, 스토어든 내용을 자동으로 계산
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const loginData = {
          username: this.username,
          password: this.password,
        };
        const response = await loginUser(loginData);
        console.log(response);
        this.logMessage = `${response.data.user.username}님 환영합니다`;
        // this.initForm();
      } catch (error) {
        console.log(error.response.data);
        this.logError = error.response.data;
        // this.initForm();
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
