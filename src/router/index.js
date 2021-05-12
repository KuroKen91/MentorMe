import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage";
import Splash from "../views/Splash";
import MentorFull from "../views/MentorFull";
import Successmodal from "../components/Successmodal";

Vue.use(VueRouter);

const routes = [
  {
    path: "/mainpage",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/",
    name: "Splash",
    component: Splash,
  },
  {
    path: "/mentorfull",
    name: "Mentorfull",
    component: MentorFull,
  },
  {
    path: "/success",
    name: "Success",
    component: Successmodal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
