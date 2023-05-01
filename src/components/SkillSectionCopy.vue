<template>
  <div>
    <div class="container">
      <h2>SKILLS</h2>
      <div class="skill-list">
        <div
          v-for="skill in skillsData"
          class="skill-box"
          @mouseenter="showText(skill.name)"
          @mouseleave="closeText(skill.name)"
          :key="skill.name"
        >
          <div class="side skill-box-frot">
            <span class="skill-name" v-bind:style="{ color: skill.color }">{{
              skill.name
            }}</span>
            <div
              class="progress-bar"
              :style="{ backgroundColor: skill.backColor }"
            >
              <div
                class="progress"
                :class="{ actives: skill.name }"
                v-bind:style="{
                  width: skill.percent,
                  backgroundColor: skill.color,
                }"
                style="transition: 0.5s"
              ></div>
            </div>
          </div>
          <!-- <p class="card-text" :class="skill.name">
            {{ skill.text }}
          </p> -->
          <div class="side skill-box-back">
            {{ skill.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiVuejs } from "@mdi/js";
export default {
  props: ["skillSecShow"],
  components: {},
  mounted() {},
  methods: {
    showText(param) {
      let className = document.getElementsByClassName("card-text");
      // console.log(className[0].classList[1]);
      // console.log(param);

      for (let i = 0; i < className.length; i++) {
        if (param == className[i].classList[1]) {
          // console.log("일치");
          className[i].classList.add("show-card-text");
          className[i].classList.remove("close-card-text");
        }
      }
    },
    closeText(param) {
      let className = document.getElementsByClassName("card-text");
      for (let i = 0; i < className.length; i++) {
        if (param == className[i].classList[1]) {
          // console.log("일치");
          className[i].classList.add("close-card-text");
          className[i].classList.remove("show-card-text");
        }
      }
    },
  },
  data() {
    return {
      showTag: "",
      isActive: true,
      mdiVuejs: mdiVuejs,
      skillsData: [
        {
          id: 1,
          name: "html",
          Logo: "html-logo.png",
          percent: "70%",
          text: "기본적인 웹페이지를 구조화 할 수 있고 ",
          color: "#e34c26",
          backColor: "rgba(227, 76, 38, 0.3)",
        },
        {
          id: 2,
          name: "css",
          Logo: "css-logo.png",
          percent: "60%",
          text: "기본적인 것을 사용가능",
          color: "#264de4",
          backColor: "rgb(38, 77, 228, 0.3)",
        },
        {
          id: 3,
          name: "js",
          Logo: "js-logo.png",
          percent: "75%",
          text: "기본적인 것을 사용가능",
          color: "#f0db4f",
          backColor: "rgb(240, 219, 79, 0.3)",
        },
        {
          id: 4,
          name: "vue",
          Logo: "vue-logo.png",
          percent: "80%",
          text: "기본적인 것을 사용가능",
          color: "#42b883",
          backColor: "rgb(66, 184, 131, 0.3)",
        },
        {
          id: 5,
          name: "node",
          Logo: "node-logo.png",
          percent: "55%",
          text: "기본적인 것을 사용가능",
          color: "#68a063",
          backColor: "rgb(104, 160, 99, 0.3)",
        },
        {
          id: 6,
          name: "github",
          Logo: "github-logo.png",
          percent: "78%",
          text: "기본적인 것을 사용가능",
          color: "#424242",
          backColor: "rgb(66, 66, 66, 0.3)",
        },
        {
          id: 7,
          name: "git",
          Logo: "git-logo.png",
          percent: "80%",
          text: "기본적인 것을 사용가능",
          color: "#f34f29",
          backColor: "rgb(243, 79, 41, 0.3)",
        },
        {
          id: 8,
          name: "vscode",
          Logo: "vscode-logo.png",
          percent: "66%",
          text: "기본적인 것을 사용가능",
          color: "#0078d7",
          backColor: "rgb(0, 120, 215, 0.3)",
        },
      ],
      // cssLogo: "css-logo.png",
      // vueLogo: "vue-logo.png",
      // jsLogo: "js-logo.png",
      // mysqlLogo: "mysql-logo.png",
      // nodeLogo: "node-logo.png",
      // gitLogo: "git-logo.png",
      // githubLogo: "github-logo.png",
      // vscodeLogo: "vscode-logo.png",
    };
  },
};
</script>

<style scoped>
.container {
  /* border: 1px solid black; */
  padding: 20px;
  box-sizing: border-box;
}
h2 {
  text-align: center;
}
img {
  width: 2.5em;
  height: 2.5em;
}
.skill-list {
  /* height: 70vh; */
  padding: 20px;
  display: flex;
  flex-direction: column;

  /* margin-bottom: 10px; */
}
.skill-box {
  height: 50px;
  width: 800px;
  margin: 0 auto;
  background-color: #ffff;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform-style: preserve-3d;
}
.skill-box:hover {
  transform: rotateX(180deg);
}
.side {
  backface-visibility: hidden;
}
.skill-box .skill-name {
  display: inline-block;
  margin-bottom: 5px;
}
.skill-box .skill-box-front,
.skill-box-back {
  width: 800px;
  position: absolute;
  top: 0;
  left: 0;
}

.skill-box .skill-box-front {
  backface-visibility: hidden;
}

.skill-box .skill-box-back {
  padding: 5px;
  display: inline-block;
  height: inherit;
  /* border: 1px solid black; */
  transform: rotateX(180deg);
  font-size: 14px;
}

.progress-bar {
  width: 100%;
  display: block;
}

.progress-bar .progress {
  background-color: white;
  width: 0;
  height: 20px;
  animation: movePersent 0.4s;
}

.skill-box:nth-child(1) .progress-bar .progress {
  /* width: 90%; */
  animation: movePersentHtml 1s;
}
.skill-box:nth-child(2) .progress-bar .progress {
  /* width: 90%; */
  animation: movePersentCss 1s;
}
.skill-box:nth-child(3) .progress-bar .progress {
  /* width: 90%; */
  animation: movePersentJs 1s;
}
.skill-box:nth-child(4) .progress-bar .progress {
  /* width: 90%; */
  animation: movePersentVue 1s;
}
.skill-box:nth-child(5) .progress-bar .progress {
  /* width: 90%; */
  animation: movePersentNode 1s;
}
.skill-box:nth-child(6) .progress-bar .progress {
  /* width: 90%; */
  animation: movePersentGithub 1s;
}
.skill-box:nth-child(7) .progress-bar .progress {
  /* width: 90%; */
  animation: movePersentGit 1s;
}
.skill-box:nth-child(8) .progress-bar .progress {
  /* width: 90%; */
  animation: movePersentVscode 1s;
}

@keyframes movePersentHtml {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}

@keyframes movePersentCss {
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
}

@keyframes movePersentJs {
  0% {
    width: 0%;
  }
  100% {
    width: 75%;
  }
}

@keyframes movePersentVue {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}

@keyframes movePersentNode {
  0% {
    width: 0%;
  }
  100% {
    width: 55%;
  }
}

@keyframes movePersentGithub {
  0% {
    width: 0%;
  }
  100% {
    width: 78%;
  }
}

@keyframes movePersentGit {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}

@keyframes movePersentVscode {
  0% {
    width: 0%;
  }
  100% {
    width: 66%;
  }
}

p {
  display: inline-block;
  position: absolute;
  width: 800px;
  height: 50px;
  margin: 0;
  left: 50%;
  transform: translate(-50%, 0);
  top: 0;
  z-index: -10;
  padding: 10px;
  box-sizing: border-box;
}
.close-card-text {
  /* display: inline-block; */
  position: absolute;
  /* top: 0; */
  transition: 0.5s;
  opacity: 0;
}
/* 
.show-card-text {
  font-size: 14px;
  color: black;
  position: absolute;
  margin: 0;
  left: 50%;
  top: 79%;
  transform: translate(-50%, 0);
  transition: 0.3s;

  z-index: 10;
  animation: showText 1;

  margin-top: 15px;
} */

/* .show-card-text:after {
  display: inline-block;
  content: "";
  background-color: black;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: rgba(227, 76, 38, 0.3);
} */

@keyframes showText {
  0% {
    opacity: 0.1;
  }

  100% {
    opacity: 0.7;
  }
}

/* .html {
   */
</style>
