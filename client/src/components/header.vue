<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
    <div class="container">
      <a class="brand" href="/">
        <img src="../assets/2.png" style="width: 100px; height: 100px" />
      </a>
      <div>
        <b-navbar toggleable="lg" type="light" variant="info">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/dogowners">🐾Owners</b-nav-item>
              <b-nav-item href="/dogowners" disabled></b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav>
              <b-nav-item href="/walkers">🐾Walkers</b-nav-item>
              <b-nav-item href="/walkers" disabled></b-nav-item>
            </b-navbar-nav>

            <!-- <b-navbar-nav>
              <b-nav-item href="/Dogowners">💜Login</b-nav-item>
              <b-nav-item href="/Dogowners" disabled></b-nav-item>
            </b-navbar-nav> -->

            <div>
              <b-dropdown
                id="dropdown-right"
                right
                text=" 💜Register"
                variant="secondary"
              >
                <b-dropdown-item href="/postwalker">Become a Walker 🐾</b-dropdown-item>
                <b-dropdown-item href="/postowner">Become a Owner 🐾</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
.navbar {
  background: #f1f1e9 !important;
}
.color {
  color: #fff;
}
a.router-link-active {
  color: white;
}

a.about-link {
  color: #fff;
}
</style>
