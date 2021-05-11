<template>
  <div class="main-page">
    <div class="all-mentors" v-if="isAllMentors">
      <div class="mentor" v-for="item in this.mentors" :key="item.name">
        <Mentor :mentorData="item" @mentor-full-please="toggleToMentorFull" />
      </div>
    </div>

    <div v-else>
      <MentorFull :mentorData="currentMentor" @return-to-MainPage-please="toggleToMainPage" />
    </div>

    <!-- <div class="empty-div"></div> -->
  </div>
</template>

<script>
import Mentor from "./Mentor.vue";
import MentorFull from "./MentorFull.vue";

export default {
  name: "MainPage",
  components: {
    Mentor,
    MentorFull
  },
  data: function () {
    return {
      isAllMentors: true,
      currentMentor: {},
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
    };
  },
  methods: {
        toggleToMentorFull(name) {
          this.isAllMentors = false;
          for (let mentor of this.mentors) {
            if (mentor.name === name) {
              this.currentMentor = mentor
            }
          }
        },
        toggleToMainPage() {
          console.log("heeeeeey")
          this.isAllMentors = true;
          this.currentMentor = {}
        }
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
