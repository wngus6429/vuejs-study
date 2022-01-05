import Vue from "vue";
import VueRouter from "vue-router";
// import LoginPage from "@/views/LoginPage.vue";
// import SignupPage from "@/views/SignupPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
      // / 에 접속하면 자동으로 /login으로 간다.
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
      // component: LoginPage
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupPage.vue"),
      // component: SignupPage
    },
    {
      // 위쪽을 제외한 모든
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
