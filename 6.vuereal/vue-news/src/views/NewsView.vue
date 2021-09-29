<template>
  <main>
    <div v-for="user in users">{{ user.title }}</div>
  </main>
</template>

<script>
import { fetchNewsList } from "../api/index";
export default {
  components: {},
  data() {
    return {
      users: [],
    };
  },
  created() {
    //화살표 안쓰면 let vm = this; 를 해야함
    fetchNewsList()
      .then((response) => (this.users = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
