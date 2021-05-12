import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage";
// import Splash from "../components/Splash";

Vue.use(VueRouter);

const routes = [
  {
    path: "/mainpage",
    name: "MainPage",
    component: MainPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
