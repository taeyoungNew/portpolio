<template>
  <div class="container">
    <about-me></about-me>
    <skill-section></skill-section>
    <project-section></project-section>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import SkillSection from "@/components/SkillSection.vue";
import ProjectSection from "@/components/ProjectSection.vue";

export default {
  components: { AboutMe, SkillSection, ProjectSection },
};
</script>

<style>
.container {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
