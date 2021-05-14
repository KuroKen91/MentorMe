import Vue from "vue";
import VueRouter from "vue-router";
import Mentors from "../views/Mentors";
import Splash from "../views/Splash";
import MentorFull from "../views/MentorFull";
import Success from "../views/Success";
import Register from "../views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/mentors",
    name: "Mentors",
    component: Mentors,
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
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
