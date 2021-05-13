import Vue from "vue";
import Vuex from "vuex";
import { auth, provider } from "./firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    king: "pete",
    selectedMentor: {},
    mentors: [],
    user: {
      username: "",
      html_url: "",
      email: "",
      avatar_url: "",
    },
    isLoggedIn: false,
  },
  mutations: {
    setSelectedMentor(state, mentor) {
      state.selectedMentor = mentor;
    },
    setMentors(state, mentors) {
      state.mentors = mentors;
    },
    loginUserSuccess(state, payload) {
      state.user.username = payload.username;
      state.user.html_url = payload.html_url;
      state.user.email = payload.email;
      state.user.avatar_url = payload.avatar_url;
      state.isLoggedIn = true;
    },
    loginUserFail(state, err) {
      state.isLoggedIn = false;
      console.error(err);
      alert("something went wrong trying to log in");
    },
  },
  actions: {
    loginUser: (context) => {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          context.commit("loginUserSuccess", {
            username: result.additionalUserInfo.profile.login,
            avatar_url: result.additionalUserInfo.profile.avatar_url,
            email: result.user.email,
            html_url: result.additionalUserInfo.profile.html_url,
          });
        })
        .catch((err) => context.commit("loginUserFail", err));
    },
  },
});
