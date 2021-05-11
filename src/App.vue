<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Splash msg="Welcome to Your Vue.js App"/>
    <MainPage />
  </div>
</template>

<script>
import Splash from './components/Splash.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    Splash,
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
