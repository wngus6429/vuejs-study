<template>
  <main>
    <p v-for="job in this.$store.state.jobs">
      <a v-bind:href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }},{{ job.domain }}</small>
    </p>
  </main>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
