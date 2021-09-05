<template>
  <!-- 최상위 태그 하나로 감싸야함 -->
  <div>
    {{ str }}
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <!-- str에서 왼쪽에 넣고 내려가는데, AppHeader.vue랑 연결 -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
//상대경로임
import AppHeader from "./components/AppHeader.vue";

// let AppHeader={
//   template:'<header><h1>Header</h1></header>'
// }

// new Vue({
//   data: {
//     str: "hi",
//   },
// });

export default {
  data: function() {
    // 이렇게 해야한다. 리턴으로 새 객체를 반환해야함
    return {
      str: "Header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = "hi";
    },
  },
};
</script>

<style></style>
