<template>
  <div class="success">
    <div class="success-splash">
      <p>
        You have successfully purchased a mentoring session from a leading
        industry professional! <br />
        <br />
        Please check your email for a confirmation message. If it doesn’t show
        up in a few minutes, check your spam folder. <br />
        <br />
        Feel free to click
        <router-link to="/mainpage">here</router-link> to see other mentors!
      </p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",
};
</script>

<style>
.success {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.success-splash {
  font-weight: bolder;
  text-align: left;
}
</style>
