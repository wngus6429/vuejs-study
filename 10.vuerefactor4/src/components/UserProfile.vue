<template>
  <div class="user-container">
    <div>
      <i class="far fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <!-- ItemView -> info.user
           UserView -> info.id
      이렇게 안하고 slot으로 정리한거지 -->
      <div class="time">
        <!-- time: {{ info.created }} -->
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <slot name="karma">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   },
  // },
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
