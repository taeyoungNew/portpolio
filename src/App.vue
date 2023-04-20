<template>
  <div id="app">
    <app-header class="abb-header"></app-header>
    <night-sky></night-sky>
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import appHeader from "@/components/common/AppHeader.vue";
import FooterComponent from "@/components/common/FooterComponent.vue";
import NightSky from "@/components/NightSky.vue";
export default {
  components: {
    appHeader,
    FooterComponent,
    NightSky,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.abb-header {
  position: absolute;
  display: inline-block;
  color: #ffffff;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
