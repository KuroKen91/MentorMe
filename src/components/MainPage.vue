<template>
  <div class="main-page">
    <div class="mentor-one"><Mentor :mentorData="this.mentors[0]" /></div>
    <div class="empty-div"></div>
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
        { name: "Johan", photoURL: "" },
        { name: "Mussin", photoURL: "" },
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
.mentor-one {
  /* border: 3px solid hotpink; */
  flex: 2
}

.empty-div {
  /* border: 1px solid red; */
  flex: 1
}
</style>
