<template>
  <main>
    <!-- <UserProfile /> -->
    <UserProfile :info="userInfo" />
    <!-- <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p> -->
  </main>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    console.log(this.$route);
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName); //한개만 넘겨야해서 복수면 객체로
  },
};
</script>

<style></style>
