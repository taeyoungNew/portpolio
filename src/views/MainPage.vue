<template>
  <div class="container" v-on:scroll:="handleScroll">
    <night-sky></night-sky>
    <about-me id="about-me" class="hide-about-me"></about-me>
    <br />
    <skill-section-copy
      id="skill-section-copy"
      class="hide-skill-section"
      :skillSecShow="skillSecShow"
    ></skill-section-copy>
    <br />
    <project-section
      id="project-section"
      class="hide-project-section"
    ></project-section>
    <br />
    <my-history id="my-history" class="hide-my-history"></my-history>
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
  mounted() {
    addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      scrollPosition: 0,
      skillSecShow: false,
    };
  },
  methods: {
    handleScroll() {
      // 태그의 단순 높이값
      // let test = document.getElementById("about-me").scrollHeight;

      let winY = window.pageYOffset;
      let innerHeight = window.innerHeight;
      //컴포넌트를 클래스네임으로 탐색
      let aboutMe = document.getElementById("about-me");
      let skillSection = document.getElementById("skill-section-copy");
      let projectSection = document.getElementById("project-section");
      let myHistory = document.getElementById("my-history");

      // 컴포넌트들의 상단좌표값 구하기
      let aboutMeOffsetTop = document.getElementById("about-me").offsetTop;
      let skillSecOffsetTop =
        document.getElementById("skill-section-copy").offsetTop;
      let projectSecOffsetTop =
        document.getElementById("project-section").offsetTop;
      let MyHistoryOffsetTop = document.getElementById("my-history").offsetTop;

      // 컴포넌트들의 순수 스크롤 높이값구하기
      let aboutMeScrollHeight =
        document.getElementById("about-me").scrollHeight;

      let skillSectionScrollHeight =
        document.getElementById("skill-section-copy").scrollHeight;
      let projectSectionScrollHeight =
        document.getElementById("project-section").scrollHeight;
      let myhistoryScrollHeight =
        document.getElementById("my-history").scrollHeight;

      // 컴포넌트의 절반 좌표 구하기
      let aboutMeHalf = aboutMeOffsetTop + aboutMeScrollHeight / 2;
      let skillSecHalf = skillSecOffsetTop + skillSectionScrollHeight / 2;
      let projectSecHalf = projectSecOffsetTop + projectSectionScrollHeight / 2;
      let myHistoryHalf = MyHistoryOffsetTop + myhistoryScrollHeight / 2;
      console.log();
      // console.log("winY", winY);
      // console.log("aboutMeHalf", aboutMeHalf);
      if (winY + innerHeight > aboutMeHalf) {
        if (aboutMe.classList[0].includes("hide-about-me")) {
          aboutMe.className = "show-page";
        }
      }

      if (winY > aboutMeHalf || winY + innerHeight < aboutMeHalf) {
        if (aboutMe.classList[0].includes("show-page")) {
          aboutMe.className = "hide-about-me";
        }
      }
      // console.log(skillSecHalf);
      // dispay가 none이면 height가 0이므로 스크롤이벤트에 처음부터 영향을 받음
      if (winY + innerHeight > skillSecHalf) {
        if (skillSection.classList[0].includes("hide-skill-section")) {
          skillSection.className = "show-page";
          if (this.skillSecShow == false) {
            this.skillSecShow = true;
          }
        }
      }

      if (winY > skillSecHalf || winY + innerHeight < skillSecHalf) {
        if (skillSection.classList[0].includes("show-page")) {
          skillSection.className = "hide-skill-section";
          if (this.skillSecShow == true) {
            this.skillSecShow = false;
          }
        }
      }

      // 스킬섹션이 위로 올라갈때 컴포넌트 감추기
      if (winY + innerHeight > projectSecHalf) {
        if (projectSection.classList[0].includes("hide-project-section")) {
          projectSection.className = "show-page";
        }
      }
      if (winY > projectSecHalf || winY + innerHeight < projectSecHalf) {
        if (projectSection.classList[0].includes("show-page")) {
          projectSection.className = "hide-project-section";
        }
      }

      if (winY + innerHeight > myHistoryHalf) {
        if (myHistory.classList[0].includes("hide-my-history")) {
          myHistory.className = "show-page";
        }
      }

      if (winY + innerHeight < myHistoryHalf) {
        if (myHistory.classList[0].includes("show-page")) {
          myHistory.className = "hide-my-history";
        }
      }
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

/* 
.show-skill-section {
  visibility: visible;
  opacity: 1;
}
 {
  visibility: hidden;
} */

/* .hide-skill-section,
.hide-about-me,
.hide-project-section,
.hide-my-history {
  visibility: hidden;
  opacity: 0;
  transition: 0.7s;
} */
.show-page {
  visibility: visible;
  opacity: 1;
  transition: 0.7s;
}
</style>
