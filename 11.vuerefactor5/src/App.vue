<template>
  <div id="app">
    <!-- Strong Recommend -->
    <ToolBar></ToolBar>
    <!-- https://vuejs.org/v2/guide/transitions.html -->
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
    <!-- Essential -->
    <!-- <tool-bar></tool-bar> -->
  </div>
</template>

<script>
import ToolBar from "./components/TollBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";
export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    // bus.$on("start:spinner", () => (this.loadingStatus = true));
    console.log(process.env.VUE_APP_TITLE);
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  // 이벤트 등록하고 나면 이벤트 버스, 객체가 자꾸 쌓이기 때문에
  // 컴포넌트 역할이 끝나고 나서 이벤트를 받았기 때문에 on으로 addEventListener같은 걸 했기에
  // off를 해줘야 이벤트 객체가 쌓이는걸 방지하고 해제한다.
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
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
