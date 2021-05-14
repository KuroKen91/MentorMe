<template>
  <div>
    <div class="splash">
      <div class="main-wrapper">
        <div class="welcome-message-container">
          <h1 class="mentor-title">MentorMe</h1>
          <p class="welcome-message-text">
            One on one, online mentoring from industry professionals with skills
            YOU need to learn.
          </p>
          <p class="welcome-message-text-cool">
            {{ `&lt; Ask questions. Be curious. Grow your confidence />` }}
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
.main-wrapper {
  display: flex;
  justify-content: center;
}

.mentor-title {
  color: tomato;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 50px;
}

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
  width: 45%;
  margin-top: -15px;
  margin-bottom: 170px;
  margin-right: 135px;
}

.welcome-message-text {
  font-size: 2rem;
  font-weight: 700;
}

p {
  margin: 2px;
}

.welcome-message-text-cool {
  font-size: 1.8;
  color: tomato;
  margin: 20px;
}

button {
  margin-top: 1rem;
  color: black;
  font-weight: bolder;
  align-self: center;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  background-color: white;
  transform: perspective(1px) translateZ(0);
  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0); */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  border-radius: 2px;
  border: none;
}

button:hover,
button:focus,
button:active {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  background-color: white;
  opacity: 0.95;
}
</style>
