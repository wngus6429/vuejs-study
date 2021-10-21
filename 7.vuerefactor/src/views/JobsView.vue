<template>
  <main>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <p class="news-title">
          <a :href="job.url">
            {{ job.title }}
          </a>
        </p>
        <small class="link-text">
          {{ job.time_ago }} by
          <a :href="job.url">
            {{ job.domain }}
          </a>
        </small>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
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
