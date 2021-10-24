import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", //이걸 해줘야 주소에 #이 사라짐
  routes: [
    // path = url주소, component 보여질것
    // { path: "/", redirect: "/news" },
    { path: "/news", name: "news", component: NewsView },
    { path: "/ask", name: "ask", component: AskView },
    { path: "/jobs", name: "jobs", component: JobsView },
    { path: "/item", component: ItemView },
    { path: "/user/:id", component: UserView },
    { path: "/item/:id", component: ItemView },
  ],
});
