<template>
  <div class="header-wrapper">
    <div class="logo"><h2>This is our logo</h2></div>
    <div class="navbar">
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>Navbar text</b-nav-text>
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

<style >
.header-wrapper {
    position: fixed;
    display: flex;
    justify-content: space-between;
    position: sticky;
    z-index: 2;
}

.logo {
    flex: 1;
}

.navbar {
    flex: 1;
}

#nav-text-collapse {
  justify-content: flex-end;
}
</style>