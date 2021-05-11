<template>
  <div id="app">
    <Navbar />
    <div class="main">
      <div v-if="mainPageClicked"><MainPage /></div>
      <div v-else><Splash @toggle-page-please="togglePage" /></div>
    </div>
  </div>
</template>

<script>
import Splash from "./components/Splash.vue";
import MainPage from "./components/MainPage.vue";
import Navbar from "./components/Navbar.vue";

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export default {
  name: "App",
  components: {
    Splash,
    MainPage,
    Navbar,
  },
  data: function () {
    return {
      mainPageClicked: false,
    };
  },
  methods: {
    togglePage() {
      this.mainPageClicked = true;
    },
  },
};
</script>

<style>
.main {
  position: absolute;
  top: 0;
  height: 100%;
}

.nav {
  width: 100;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
