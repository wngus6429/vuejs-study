<template>
  <main>
    <ul class="news-list">
      <li v-for="ask in fetchedAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ ask.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <p class="news-title">
          <router-link v-bind:to="`item/${ask.id}`">
            {{ ask.title }}
          </router-link>
        </p>
        <small class="link-text">
          {{ ask.time_ago }} by
          <router-link v-bind:to="`/user/${ask.user}`" class="link-text">
            {{ ask.user }}
          </router-link>
        </small>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    console.log("확인", this.fetchedAsk);
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid pink;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  /* flex써야 align-items 효과 들어감 */
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
