<template>
  <div class="header-wrapper">
    <div class="navbar" v-if="loggedInState !== true">
      <div class="main-nav-container">
        <img src="../assets/MentorMe.png" id="logo" alt="mentor-me-logo" />
        <div class="navbar">
          <b-navbar toggleable="sm" type="dark">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav>
                <!-- <div class="welcome-user">
              <b-avatar :src="`${user.avatar_url}`"></b-avatar>
              <b-nav-text id="welcome-dude">
                Welcome {{ user.username }}
              </b-nav-text>
            </div> -->
                <router-link to="/mentors">
                  <b-nav-text id="all-mentors-link">All Mentors</b-nav-text>
                </router-link>
                <router-link to="/register">
                  <b-nav-text id="all-mentors-link">Register</b-nav-text>
                </router-link>
                <router-link to="/mentors">
                  <b-nav-text id="all-mentors-link" @click="loginUser"
                    >Login</b-nav-text
                  >
                </router-link>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="main-nav-container">
        <img src="../assets/MentorMe.png" id="logo" alt="mentor-me-logo" />
        <div class="navbar">
          <b-navbar toggleable="sm" type="dark">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav>
                <!-- <div class="welcome-user">
              <b-avatar :src="`${user.avatar_url}`"></b-avatar>
              <b-nav-text id="welcome-dude">
                Welcome {{ user.username }}
              </b-nav-text>
            </div> -->
                <router-link to="/mentors">
                  <b-nav-text id="all-mentors-link">All Mentors</b-nav-text>
                </router-link>
                <router-link to="/register">
                  <b-nav-text id="all-mentors-link">Register</b-nav-text>
                </router-link>
                <router-link to="/mentors">
                  <b-nav-text id="all-mentors-link" @click="loginUser"
                    >Login</b-nav-text
                  >
                </router-link>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    loggedInState() {
      return this.$store.state.isLoggedIn;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser");
    },
  },
  showMe() {
    console.log(this.user.avatar_url);
  },
};
</script>

<style>
#logo {
  height: 170px;
  width: 310px;
  cursor: pointer;
}

.main-nav-container {
  margin-top: -50px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
}
nav {
  width: 50vw;
}

.header-wrapper {
  display: flex;
  z-index: 1;
  margin-bottom: 50px;
}

.navbar-nav {
  justify-content: space-around;
  background-color: none;
  width: 40vw;
  margin-top: -50px;
}

#all-mentors-link:hover {
  cursor: pointer;
  opacity: 0.7;
  transform: scale(1.05);
  color: white;
}
#all-mentors-link {
  font-size: 1.2rem;
}

a {
  text-decoration: none;
}

#nav-text-collapse {
  justify-content: flex-end;
}

.welcome-user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#welcome-dude {
  font-size: 0.7rem;
}

/* .navbar-nav {
  width: 100vw;
} */
</style>
