<template>
  <div class="mentor-full">
    <button @click="emitReturnToMainPage">Return to Mentors</button>
    <div class="mentor-card">
      <img
        :src="this.mentorData.photoURL"
        :alt="'Photo of' + ' ' + this.mentorData.name"
        class="mentor-photo"
      />
      <div class="namecard">
        <h2>{{ this.mentorData.name }}</h2>
        <h4>timezone</h4>
      </div>
      <div class="bio">
        <p>{{ this.mentorData.tag }}</p>
      </div>
      <button>Book Me!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MentorFull",
  props: {
    mentorData: {
      name: String,
      photoURL: String,
      tag: String,
    },
  },
  methods: {
    emitReturnToMainPage() {
      this.$emit("return-to-MainPage-please")
    }
  }
};
</script>

<style scoped>
.mentor-full {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.mentor-card {
  border: 1px solid black
}

.mentor-photo {
  height: 30vh;
}
</style>