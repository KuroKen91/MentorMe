<template>
  <div class="main-page">
    <div class="all-mentors" v-if="isAllMentors">
      <div class="mentor" v-for="item in this.mentors" :key="item.name">
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
import Mentor from "../components/Mentor.vue";
import MentorFull from "./MentorFull.vue";
import axios from "axios";

export default {
  name: "MainPage",
  components: {
    Mentor,
    MentorFull,
  },
  data: function() {
    return {
      isAllMentors: true,
      currentMentor: {},
      mentors: [],
    };
  },
  created: async function() {
    const {data: fetchedMentors } = await axios.get("http://localhost:5000/api/mentors");
    this.mentors = fetchedMentors;
    //for mentor of fetchedMentors
    //build mentor object
    //push the mentor object to this.mentors 
    console.log("THIS.MENTORS", this.mentors);
    console.log(fetchedMentors);
    
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
