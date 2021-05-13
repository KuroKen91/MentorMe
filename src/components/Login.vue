<template>
  <div v-if="loginState">
    <h1 @click="redirect">you are logged in. redirecting...</h1>
  </div>
  <div v-else>
    <h1>you are not logged in</h1>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  computed: {
    loginState() {
      return this.$store.state.isLoggedIn;
    },
  },

  methods: {
    redirect() {
      if (this.loginState) {
        this.$router.push("/mentors");
      }
      console.log(this.loginState);
    },
  },
};
</script>

<style scoped></style>
