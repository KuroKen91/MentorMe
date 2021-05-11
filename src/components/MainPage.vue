<template>
  <div class="main-page">
    <div class="mentor-one mentor">
      <Mentor :mentorData="this.mentors[0]" />
    </div>
    <div class="mentor-two mentor">
      <Mentor :mentorData="this.mentors[1]" />
    </div>
    <div class="mentor-three mentor">
      <Mentor :mentorData="this.mentors[2]" />
    </div>
    <!-- <div class="empty-div"></div> -->
  </div>
</template>

<script>
import Mentor from "./Mentor.vue";

export default {
  name: "MainPage",
  components: {
    Mentor,
  },
  data: function () {
    return {
      mentors: [
        {
          name: "Ken",
          photoURL:
            "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
          bio: "Sgt Corporal in the CC Army of Awesome",
        },
        {
          name: "Johan",
          photoURL:
            "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
          bio: "Björn Borg Reborn",
        },
        {
          name: "Mussin",
          photoURL:
            "https://i.picsum.photos/id/1074/5472/3648.jpg?hmac=w-Fbv9bl0KpEUgZugbsiGk3Y2-LGAuiLZOYsRk0zo4A",
          bio: "Recursively Functional ",
        },
      ],
    };
  },
};
</script>

<style>
.main-page {
  background-color: #b4d455;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mentor {
  margin: 10px;
}

.empty-div {
  /* border: 1px solid red; */
  flex: 1;
}
</style>
