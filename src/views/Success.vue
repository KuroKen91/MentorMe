<template>
  <div class="success">
    <div class="success-splash">
      <h1>Purchase Successful! Thank you! 🔥</h1>
      <p>
        You have successfully purchased a mentoring session from a leading
        industry professional! <br />

        Please check your inbox for a confirmation email. If it doesn’t show up
        in a few minutes, check your spam folder. <br />
        <br />
        Please click
        <router-link to="/mentors">here</router-link> if you are not redirected
        within a few seconds.
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

<style scoped>
.success {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("https://img.pngio.com/dark-grey-background-high-resolution-photo-isk6e-free-dragonfly-dark-grey-png-1920_1200.png");
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: white;
}
.success-splash {
  font-weight: bolder;
  text-align: left;
  color: rgb(223, 223, 223);
  padding: 12px;
}

p {
  margin: 2px;
}
</style>
