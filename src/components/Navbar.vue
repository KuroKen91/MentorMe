<template>
  <div class="header-wrapper">
    <div class="logo">
      <h1>:thinking:</h1>
    </div>
    <div class="empty-div"></div>
    <div class="navbar">
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/mainpage">
              <b-nav-text id="all-mentors-link">All mentors</b-nav-text>
            </router-link>
            <b-nav-text>Signup</b-nav-text>
            <b-nav-text>Login</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.header-wrapper {
  position: fixed;
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 2;
}

.logo {
  flex: 1;
  border: 1px black solid;
}

.navbar-nav {
  justify-content: space-around;
  border: 1px solid hotpink;
  flex: 1;
  width: 45vw;
}

a {
  text-decoration: none;
}

.empty-div {
}

#nav-text-collapse {
  justify-content: flex-end;
}
</style>
