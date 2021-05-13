import Vue from "vue";
import VueRouter from "vue-router";
import Mentors from "../views/Mentors";
import Splash from "../views/Splash";
import MentorFull from "../views/MentorFull";
import Success from "../views/Success";
import Login from "../components/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/mentors",
    name: "Mentors",
    component: Mentors,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
    component: Success,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
