<template>
  <div class="main-page">
    <Mentor :mentorData="this.mentors[0]"/>
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
        { name: "Ken", photoURL: "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y", bio: "Sgt Corporal in the CC Army of Awesome" },
        { name: "Johan", photoURL: "" },
        { name: "Mussin", photoURL: "" },
      ],
    };
  },
};
</script>

<style>
.main-page {
  background-color: hotpink;
  border: 1px dotted hotpink;
  height: 100vh;
  width: 100vw;
}
</style>
