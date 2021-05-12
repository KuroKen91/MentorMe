<template>
  <div class="main-page">
    <div class="all-mentors">
      <div class="mentor" v-for="item in mentors" :key="item.name">
        <Mentor :mentorData="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Mentor from "../components/Mentor.vue";
import axios from "axios";

export default {
  name: "MainPage",
  components: {
    Mentor,
  },
  computed: {
    mentors() {
      return this.$store.state.mentors;
    },
  },
  created: async function() {
    const { data: fetchedMentors } = await axios.get("/api/mentors");
    this.$store.commit("setMentors", fetchedMentors);
  },
};
</script>

<style>
.main-page {
  background-color: blue;
  height: 100vh;
  width: 100vw;
}

.all-mentors {
  /* fix the spacing problem here */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.mentor {
  margin: 20px;
}

.empty-div {
  flex: 1;
}
</style>
