<template>
  <div id="app">
    <!-- Strong Recommend -->
    <ToolBar></ToolBar>
    <!-- https://vuejs.org/v2/guide/transitions.html -->
    <transition name="page">
      <router-view></router-view>
    </transition>
    <!-- Essential -->
    <!-- <tool-bar></tool-bar> -->
  </div>
</template>

<script>
import ToolBar from "./components/TollBar.vue";
export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  /* a태그 달면 밑줄 생기는거 삭제 */
  text-decoration: none;
  color: #34495e;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
/* 클릭해서 활성화 한거는 밑줄 효과 */
a.router-link-exact-active {
  text-decoration: underline;
}
/* 라우터 트랜지션, 부드러워지거나 여러효과 */
/* <!-- https://vuejs.org/v2/guide/transitions.html --> */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
