<template>
  <div class="container" v-on:scroll:="handleScroll">
    <night-sky></night-sky>
    <about-me id="about-me" class="hide-about-me"></about-me>
    <br />
    <skill-section-copy
      id="skill-section-copy"
      class="hide-skill-section"
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
      // let skillSection = document.getElementsByClassName("hide-skill-section");
      // let projectSection = document.getElementsByClassName(
      //   "hide-project-section"
      // );
      // let myHistory = document.getElementsByClassName("hide-my-history");

      // 컴포넌트들의 상단좌표값 구하기
      let aboutMeOffsetTop = document.getElementById("about-me").offsetTop;
      // let skillSecOffsetTop =
      //   document.getElementById("skill-section-copy").offsetTop;
      // let projectSecOffsetTop =
      //   document.getElementById("project-section").offsetTop;
      // let MyHistoryOffsetTop = document.getElementById("my-history").offsetTop;

      // 컴포넌트들의 순수 스크롤 높이값구하기
      let aboutMeScrollHeight =
        document.getElementById("about-me").scrollHeight;

      // let skillSectionScrollHeight =
      //   document.getElementById("skill-section-copy").scrollHeight;
      // let projectSectionScrollHeight =
      //   document.getElementById("project-section").scrollHeight;
      // let myhistoryScrollHeight =
      //   document.getElementById("my-history").scrollHeight;

      // 컴포넌트의 절반 좌표 구하기
      let aboutMeHalf = aboutMeOffsetTop + aboutMeScrollHeight / 2;
      // let skillSecHalf = skillSecOffsetTop + skillSectionScrollHeight / 2;
      // let projectSecHalf = projectSecOffsetTop + projectSectionScrollHeight / 2;
      // let myHistoryHalf = MyHistoryOffsetTop + myhistoryScrollHeight / 2;
      console.log();
      // console.log("winY", winY);
      // console.log("aboutMeHalf", aboutMeHalf);
      if (winY + innerHeight > aboutMeHalf + 20) {
        if (aboutMe.classList[0].includes("hide-about-me")) {
          aboutMe.className = "show-page";
          console.log("컨텐츠가 아래에서 나타남");
        }
      }

      if (winY > aboutMeHalf || winY < 300) {
        if (aboutMe.classList[0].includes("show-page")) {
          aboutMe.className = "hide-about-me";
          console.log("컨텐츠가 위로 사라짐");
        }
      }

      // if (winY + innerHeight > skillSecHalf + 20) {
      //   // console.log("어바웃 절반 좌표");
      //   // console.log("aboutMe = ", aboutME);
      //   skillSection[0].classList.add("show-skill-section");
      // } else if (winY < skillSecHalf + 20) {
      //   // console.log("어바웃 절반 좌표");
      //   // console.log("aboutMe = ", aboutME);
      //   skillSection[0].classList.remove("show-skill-section");
      // }

      // if (winY + innerHeight >= projectSecHalf + 20) {
      //   // console.log("어바웃 절반 좌표");
      //   // console.log("aboutMe = ", aboutME);
      //   projectSection[0].classList.add("show-page");
      // }
      // if (winY + innerHeight < projectSecHalf + 20) {
      //   // console.log("어바웃 절반 좌표");
      //   // console.log("aboutMe = ", aboutME);
      //   projectSection[0].classList.remove("show-page");
      // }
      // if (winY + innerHeight > myHistoryHalf + 20) {
      //   // console.log("어바웃 절반 좌표");
      //   // console.log("aboutMe = ", aboutME);
      //   myHistory[0].classList.add("show-page");
      // } else if (winY + innerHeight < myHistoryHalf + 20) {
      //   // console.log("어바웃 절반 좌표");
      //   // console.log("aboutMe = ", aboutME);
      //   myHistory[0].classList.remove("show-page");
      // }
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

.hide-skill-section {
  display: none;
  opacity: 0;
  transition: 0.5s;
}
.show-skill-section {
  display: flex;
  opacity: 1;
}

.hide-about-me,
.hide-project-section,
.hide-my-history {
  visibility: hidden;
  opacity: 0;
  transition: 0.7s;
}
.show-page {
  visibility: visible;
  opacity: 1;
  transition: 0.7s;
}
</style>
