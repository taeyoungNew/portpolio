<template>
  <div class="container" v-on:scroll:="handleScroll">
    <night-sky></night-sky>
    <about-me class="about-me"></about-me>
    <br />
    <skill-section-copy class="skill-section-copy"></skill-section-copy>
    <br />
    <project-section class="project-section"></project-section>
    <br />
    <my-history class="my-history"></my-history>
  </div>
</template>

<script>
import NightSky from "@/components/NightSky.vue";
import AboutMe from "@/components/AboutMe.vue";
// import SkillSection from "@/components/SkillSection.vue";
import ProjectSection from "@/components/ProjectSection.vue";
import SkillSectionCopy from "@/components/SkillSectionCopy.vue";
import MyHistory from "@/components/MyHistory.vue";

export default {
  components: {
    NightSky,
    AboutMe,
    ProjectSection,
    SkillSectionCopy,
    MyHistory,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    handleScroll(e) {
      console.log(e);
    },
  },
};
</script>

<style>
.container {
  /* width: 1200px; */
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(#113755);
}
</style>
