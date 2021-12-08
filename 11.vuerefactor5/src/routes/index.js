import Vue from "vue";
import VueRouter from "vue-router";
import NewView from "../views/NewsView";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView from "../views/CreateListView.js";
import bus from "../utils/bus";
import { store } from "../store/index.js";

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
      // beforeEnter는 특정 위치로 갈떄 인증 정보가 있는지 없는지
      // 로그인 인증 정보때 많이 사용한다.
      beforeEnter: (to, from, next) => {
        // from 현재, to 이동할곳, next는 func, 현재 데이터 호출을 위해서 사용
        // #1
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // #5
            console.log(5);
            console.log("Newsfetched");
            bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
        // console.log("to", to);
        // console.log("from", from);
        // console.log("next", next);
        // next(); //이거 안해주면 NewView 접근 불가
        // if (to.auth) {
        //   next();
        // } else {
        //   router.replace("/login");
        // }
      },
      // createListView("NewsView")
    },
    // 하이오더컴포넌트 사용 X 위
    // 하이오더컴포넌트 사용 O 아래
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      // component: createListView("AskView"),
      beforeEnter: (to, from, next) => {
        // from 현재, to 이동할곳, next는 func, 현재 데이터 호출을 위해서 사용
        // #1
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // #5
            console.log(5);
            console.log("Asksfetched");
            // bus.$emit("end:spinner"); //데이터가 불러와서도 스피너가 살짝 돌앗음
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      // component: createListView("JobsView"),
      beforeEnter: (to, from, next) => {
        // from 현재, to 이동할곳, next는 func, 현재 데이터 호출을 위해서 사용
        // #1
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // #5
            console.log(5);
            console.log("Jobsfetched");
            // bus.$emit("end:spinner"); //데이터가 불러와서도 스피너가 살짝 돌앗음
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    { path: "/item", component: ItemView },
    { path: "/user/:id", component: UserView },
    { path: "/item/:id", component: ItemView },
  ],
});
