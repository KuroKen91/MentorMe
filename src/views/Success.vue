<template>
  <div class="success">
    <h1>Success! Please check for a confirmation email. Feel free to click <router-link to="/mainpage">here</router-link> to see other mentors!</h1>
  </div>
</template>

<script>
export default {
  name: "Success",
};
</script>

<style>
.success {
  background-color: red;
  height: 100vh;
  width: 100vw;
}
</style>
