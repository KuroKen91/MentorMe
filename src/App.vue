<template>
  <div id="app">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
.navbar {
  padding: 0px;
}

.main {
  position: absolute;
  top: 0;
  height: 100%;
}

#app {
  display: flex;
  justify-content: flex-end;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
