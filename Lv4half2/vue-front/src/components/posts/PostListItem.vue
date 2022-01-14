<template>
  <!-- 스타일링은 common/css에 있다. -->
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-content">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
