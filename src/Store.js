import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    king: "pete",
    selectedMentor: {},
    mentors: [],
  },
  mutations: {
    setSelectedMentor(state, mentor) {
      state.selectedMentor = mentor;
    },
    setMentors(state, mentors) {
      console.log("IM SETTING MENTORS", mentors);
      state.mentors = mentors;
    },
  },
});
