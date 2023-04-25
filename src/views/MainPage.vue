<template>
  <div class="container">
    <about-me></about-me>
    <br />
    <skill-section-copy></skill-section-copy>
    <br />
    <project-section></project-section>
    <br />
    <my-history></my-history>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
// import SkillSection from "@/components/SkillSection.vue";
import ProjectSection from "@/components/ProjectSection.vue";
import SkillSectionCopy from "@/components/SkillSectionCopy.vue";
import MyHistory from "@/components/MyHistory.vue";

export default {
  components: { AboutMe, ProjectSection, SkillSectionCopy, MyHistory },
};
</script>

<style>
.container {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(#113755);
}
</style>
