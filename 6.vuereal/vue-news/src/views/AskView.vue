<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: [],
    };
  },
  async fetch() {
    const res = await axios.get("https://api.hnpwa.com/v0/show/1.json");
    console.log(res);
    this.user = res.data;
  },
};
</script>
