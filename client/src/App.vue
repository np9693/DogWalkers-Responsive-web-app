<template>
  <div id="app">
    <Header />

    <!--<div id="nav">
      <router-link class="home-link" to="/">Home</router-link>
      <router-link class="about-link" to="/About">About</router-link>
      <router-link to="/random">Random</router-link>
    </div>-->
    <!-- Render the content of the current page view -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home-link {
  margin-right: 20px;
}

.getwalker-link {
  margin-right: 20px;
}

.becomewalker-link {
  margin-right: 20px;
}
</style>
