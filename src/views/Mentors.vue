<template>
  <div class="main-page">
    <div class="all-mentors">
      <div
        class="mentor"
        v-for="item in this.$store.state.mentors"
        :key="item.name"
      >
        <Mentor :mentorData="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Mentor from "../components/Mentor.vue";
import axios from "axios";

export default {
  name: "Mentors",
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("https://img.pngio.com/dark-grey-background-high-resolution-photo-isk6e-free-dragonfly-dark-grey-png-1920_1200.png");
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
