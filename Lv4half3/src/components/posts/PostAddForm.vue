<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="content">Contents:</label>
          <textarea id="content" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from "@/api/index";
export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: "",
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length < 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
        this.$router.push("/main");
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  /* form-wrapper안에 .form이 있을 경우 */
  width: 100%;
}
.btn {
  color: white;
}
</style>
