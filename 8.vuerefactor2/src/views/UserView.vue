<template>
  <main>
    <!-- <UserProfile /> -->
    <UserProfile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">{{ userInfo.created }}</template>
      <div slot="karma">{{ userInfo.karma }}</div>
      <!-- 템플릿태그는 태그 없이 텍스트만 들어감 -->
    </UserProfile>
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
  created() {
    console.log(this.$route);
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName); //한개만 넘겨야해서 복수면 객체로
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
};
</script>

<style></style>
