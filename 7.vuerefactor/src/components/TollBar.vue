<template>
  <div class="header">
    <router-link to="/news">News</router-link> | <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/ask">Ask</router-link>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  background-color: #42b883;
  padding: 8px;
}
/* a태그에 */
/* .header a:active { */
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: white;
}
</style>
