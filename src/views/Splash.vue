<template>
  <div>
    <div class="splash">
      <div class="main-wrapper">
        <div class="welcome-message-container">
          <h1>MentorMe</h1>
          <p class="welcome-message-text">
            One on one, online mentoring from industry professionals with skills
            YOU need to learn.
          </p>
          <p>
            Ask questions. Be curious. Grow your confidence.
          </p>
          <router-link to="/mentors">
            <button id="mentor-btn" class="btn-light">
              Our Mentors
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Splash",
  computed: {
    name() {
      return this.$store.state.king;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.splash {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("https://picsum.photos/id/5/1920/1080");
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-message-container {
  color: white;
  padding: 12px;
}

p {
  margin: 2px;
}

button {
  margin-top: 1rem;
  align-self: center;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  border-radius: 2px;
}

button:hover, button:focus, button:active{
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
