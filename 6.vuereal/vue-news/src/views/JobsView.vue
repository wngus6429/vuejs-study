<template>
  <main>
    <div v-for="job in jobs">{{ job.title }}</div>
  </main>
</template>

<script>
import { fetchJobs } from "../api/index";
export default {
  components: {},
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    //axios는 프로미스 기반이다.
    //화살표 안쓰면 let vm = this; 를 해야함
    fetchJobs()
      .then((response) => (this.jobs = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
