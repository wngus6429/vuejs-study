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
