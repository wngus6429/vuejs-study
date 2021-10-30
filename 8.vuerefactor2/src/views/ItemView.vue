<template>
  <main>
    <section>
      <!-- 사용자 정보 -->
      <UserProfile :info="fetchedItem">
        <div slot="username">{{ fetchedItem.user }}</div>
        <template slot="time">{{ fetchedItem.time_ago }}</template>
      </UserProfile>
      <!-- <div class="user-container">
        <div>
          <i class="far fa-user"></i>
        </div>
        <div class="user-description">
          <!-- v-bind:to="`user/${fetchedItem.user}` -->
      <!-- 이렇게 하면 주소가 http://localhost:8080/item/user/boppo1 이런식으로 나옴 -->
      <!-- 앞에 item이 빠져야함 -->
      <!--<router-link v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div> -->
      <!-- {{ this.$store.state.item.title }} -->
      <!-- </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content" />
      <!-- {{ fetchedItem.content }} 이렇게 하면 태그들도 나옴 그래서 v-html-->
    </section>
    <div>
      <p>
        <!-- {{ this.$store.state.item.content }} -->
      </p>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  //이 페이지에 오면 데이터 처리를 하고 위, 템플릿에서 표시하는거지
  created() {
    console.log(this.$route);
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
