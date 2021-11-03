import Vue from "vue";

// bus.js
export default new Vue();
// new Vue를 그대로 export를 하는거지

// 이벤트버스는 빈 이벤트객체를 만들어서,
// 객체를 통해서 컴포넌트간에 데이터를 전달 하는걸 의미함

// // bus.js
// export const bus = new Vue();
// // App.vue
// import { bus } from "./bus.js";
// // bus.js
// export default new Vue();
// // App.vue
// import bus from "./bus.js";
