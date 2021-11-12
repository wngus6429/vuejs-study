import Vue from "vue";
import VueRouter from "vue-router";
import NewView from "../views/NewsView";
// import AskView from "../views/AskView";
// import JobsView from "../views/JobsView";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", //이걸 해줘야 주소에 #이 사라짐
  routes: [
    // path = url주소, component 보여질것
    // { path: "/", redirect: "/news" },
    {
      path: "/news",
      name: "news",
      component: NewView,
      // createListView("NewsView")
    },
    // 하이오더컴포넌트 사용 X 위
    // 하이오더컴포넌트 사용 O 아래
    {
      path: "/ask",
      name: "ask",
      // component: AskView,
      component: createListView("AskView"),
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: JobsView,
      component: createListView("JobsView"),
    },
    { path: "/item", component: ItemView },
    { path: "/user/:id", component: UserView },
    { path: "/item/:id", component: ItemView },
  ],
});
