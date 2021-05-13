import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import { auth, provider } from "./firebase";
=======
>>>>>>> 61ee6830a55495e543019fb2909a318519c56076

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
      state.mentors = mentors;
    },
  },
});
