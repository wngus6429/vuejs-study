<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading" />
      <ul v-else>
        <PostListItem v-for="postItem in postItems" :key="postItem._id" :postItem="postItem" />
      </ul>
      <!-- 스타일링은 common/css에 있다. -->
      <!-- <li v-for="postItem in postItems" v-bind:key="postItem._id">
          <div class="post-title">
            {{ postItem.title }}
          </div>
          <div class="post-content">
            {{ postItem.contents }}
          </div>
          <div class="post-time">
            {{ postItem.createdAt }}
          </div>
        </li> -->
    </div>
  </div>
</template>

<script>
import PostListItem from "../components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import { fetchPosts } from "@/api/index";
export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      console.log(data.posts);
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
