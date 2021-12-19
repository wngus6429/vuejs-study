import Chart from "chart.js";
export default {
  install(Vue) {
    console.log("Chart Plugin Loaded");
    Vue.prototype.$_Chart = Chart;
    // $_ 방법은 vue 스타일가이드 공식 권고, 플러그인 속성, 함수의 프리픽스 접두사
    //차트를 plugin에서 한번만 로딩해오고 나머지는 계속
    //공용으로 가져다 쓸려고 이 플러그인을 만든거임
    // 모든 컴포넌트
    // BarChart.vue
    // this.$_Chart;
    // LineChart.vue
    // this.$_Chart;
  },
};
