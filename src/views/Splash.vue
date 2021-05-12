<template>
  <div>
    <div class="splash">
      <div class="main-wrapper">
        <div class="welcome-message-container">
          <p class="welcome-message-text">
            Buy me right now. I'm cheap. Don't miss out!
          </p>
          <router-link to="/mainpage">
            <button>Make me a coding God</button>
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
<style>
.splash {
  background-image: url("https://picsum.photos/id/5/1920/1080");
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-message-container {
  border: 3px solid whitesmoke;
  color: white;
  padding: 12px;
}
</style>
