import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    king: "pete",
    selectedMentor: {},
    mentors: [
      {
        name: "Ken",
        photoURL:
          "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
        tag: "Has more subscribers than you",
      },
      {
        name: "Johan",
        photoURL:
          "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
        tag: "Björn Borg Reborn",
      },
      {
        name: "Mussin",
        photoURL:
          "https://i.picsum.photos/id/1074/5472/3648.jpg?hmac=w-Fbv9bl0KpEUgZugbsiGk3Y2-LGAuiLZOYsRk0zo4A",
        tag: "Recursively Functional ",
      },
    ],
  },
  mutations: {
    setSelectedMentor(state, mentor) {
      console.log(mentor);
      state.selectedMentor = mentor;
    },
  },
});
