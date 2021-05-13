<template>
  <div class="header-wrapper">
    <div class="navbar">
      <b-navbar toggleable="sm" type="dark">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/mentors">
              <b-nav-text id="all-mentors-link">All Mentors</b-nav-text>
            </router-link>
            <router-link to="/register">
              <b-nav-text id="all-mentors-link">Register</b-nav-text>
            </router-link>
            <router-link to="/login">
              <b-nav-text id="all-mentors-link" @click="loginUser"
                >Login</b-nav-text
              >
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser");
    },
  },
};
</script>

<style>
.header-wrapper {
  display: flex;
  justify-content: center;
  z-index: 1;
}

.navbar-nav {
  justify-content: space-around;
  background-color: none;
  width: 25vw;
}

a {
  text-decoration: none;
  color: white;
}

#nav-text-collapse {
  justify-content: flex-end;
}
</style>
