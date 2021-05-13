<template>
  <div>
    <div class="footer-container">
      <div class="copywrite">
        <p>©2021 Team Pelican</p>
      </div>
      <div class="links">   
        <span><a href="">About us</a></span>
        <span><a href="">Terms and Conditions</a></span>
        <span><a href="">Privacy</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer-container {
    height: 5vh;
  background-color: rgba(0,0,0, 0.1);
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.copywrite {
    margin-right: auto;
    margin-left: 10px;
    color: rgba(255, 255, 255, 0.7)
}

span {
    margin: 0 .5vw;
    color: rgba(255, 255, 255, 0.7)
}

.links {
    margin-right: 10px;
}

a:link, a:visited {
    color: white;
}

a:hover, a:active {
  color: lightgray;
}
</style>
