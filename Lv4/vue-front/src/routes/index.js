import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

// export default new VueRouter({
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupPage.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/MainPage.vue"),
      meta: { auth: true },
    },
    {
      path: "/add",
      component: () => import("@/views/PostAddPage.vue"),
      meta: { auth: true },
    },
    {
      path: "/post/:id",
      component: () => import("@/views/PostEditPage.vue"),
      meta: { auth: true },
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});

// to 이동하려는 페이지 , from 현재 페이지
// next는 페이지 이동할때 호출하는 API
router.beforeEach((to, from, next) => {
  // auth는 임의로 전한것
  if (to.meta.auth && !store.getters.isLogin) {
    console.log("인증이 필요합니다");
    next("/login"); //로그인 안되어 있으면 욜로가라고
    return; // 밑에 next()가 실행 안되게끔
  }
  next(); //next() 안하면 다음으로 안 넘어감
});

export default router;
