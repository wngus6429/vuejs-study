<template>
  <main>
    <div v-for="ask in asks">{{ ask.title }}</div>
  </main>
</template>

<script>
import { fetchAskList } from "../api/index";
export default {
  components: {},
  data() {
    return {
      asks: [],
    };
  },
  created() {
    //axios는 프로미스 기반이다.
    //화살표 안쓰면 let vm = this; 를 해야함
    fetchAskList()
      .then((response) => (this.asks = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
