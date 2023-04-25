<template>
  <div id="app">
    <app-header
      id="app-header"
      class="abb-header"
      :class="{ active: isActive }"
    ></app-header>
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
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    // document.documentElement.scrollTop; // 현재 스크롤바 위치
    // windowHeight = window.innerHeight; // 스크린 창
    // document.body.scrollHeight; // margin 값은 포함 x
    window.addEventListener("scroll", () => {
      let scrollLocation = document.documentElement.scrollTop;

      if (scrollLocation > 0) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });
  },

  methods: {},
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
  position: fixed;
  display: inline-block;
  color: #ffffff;
  top: -40px;
  left: 50%;
  transform: translate(-50%, 0);
  transition: 0.5s;
}

.active {
  top: 0px;
}
</style>
