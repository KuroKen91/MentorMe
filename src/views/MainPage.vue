<template>
  <div class="main-page">
    <div class="all-mentors" v-if="isAllMentors">
      <div class="mentor" v-for="item in mentors" :key="item.name">
        <Mentor :mentorData="item" @mentor-full-please="toggleToMentorFull" />
      </div>
    </div>

    <div v-else>
      <MentorFull
        :mentorData="currentMentor"
        @return-to-MainPage-please="toggleToMainPage"
      />
    </div>

    <!-- <div class="empty-div"></div> -->
  </div>
</template>

<script>
import Mentor from "../components/Mentor";
import MentorFull from "../views/MentorFull.vue";

export default {
  name: "MainPage",
  components: {
    Mentor,
    MentorFull,
  },
  computed: {
    mentors() {
      return this.$store.state.mentors;
    },
  },
  data: function() {
    return {
      isAllMentors: true,
      // currentMentor:
    };
  },
  methods: {
    toggleToMentorFull(name) {
      this.isAllMentors = false;
      for (let mentor of this.mentors) {
        if (mentor.name === name) {
          this.currentMentor = mentor;
        }
      }
    },
    toggleToMainPage() {
      console.log("heeeeeey");
      this.isAllMentors = true;
      this.currentMentor = {};
    },
  },
};
</script>

<style>
.main-page {
  background-color: #b4d455;
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
  /* border: 1px solid red; */
  flex: 1;
}
</style>
