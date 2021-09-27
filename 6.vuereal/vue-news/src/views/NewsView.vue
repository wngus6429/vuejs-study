<template>
  <main>
    <div v-for="user in users">{{ user.title }}</div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      users: [],
    };
  },
  created() {
    //axios는 프로미스 기반이다.
    //화살표 안쓰면 let vm = this; 를 해야함
    axios
      .get("https://api.hnpwa.com/v0/news/1.json")
      .then((response) => (this.users = response.data))
      .catch();
  },
};
</script>

<style></style>
