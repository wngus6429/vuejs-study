<template>
  <main>
    <!-- <p>name : {{ this.$store.state.user.id }}</p>
    <p>karma : {{ this.$store.state.user.karma }}</p>
    <p>created : {{ this.$store.state.user.created }}</p> -->
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </main>
</template>

<script>
// import { fetchUserInfo } from "../api/index";

export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    console.log(this.$route);
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName); //한개만 넘겨야해서 복수면 객체로
    // console.log(this.$route.params);
    // const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
  },
};
// Store 사용 안 했을 경우
// import axios from "axios";
// export default {
//   created() {
//     console.log(this.$route.params);
//     const userName = this.$route.params.id;
//     axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
//   },
// };
</script>

<style></style>
