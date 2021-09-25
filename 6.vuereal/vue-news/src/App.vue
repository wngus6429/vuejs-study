<template>
  <div id="app">
    <!-- Strong Recommend -->
    <ToolBar></ToolBar>
    <router-view></router-view>
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
</style>
