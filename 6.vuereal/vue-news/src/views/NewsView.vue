<template>
  <main>
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </main>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
