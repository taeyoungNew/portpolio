<template>
  <div>
    <div class="container">
      <h2>SKILLS</h2>
      <div class="skill-box">
        <div class="front">
          <h3>front</h3>
          <div>
            <div class="skill-card">
              <div>
                <span class="img"> </span>
              </div>
            </div>
            <div class="skill-card">
              <div>
                <span class="img"> </span>
              </div>
            </div>
            <div class="skill-card">
              <div>
                <span class="img"> </span>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-work">
          <h3>frame work</h3>
          <div>
            <div class="skill-card">
              <div class="skill-card">
                <div>
                  <span class="img"> </span>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="skill-card">
                <div>
                  <span class="img"> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="back">
          <h3>back/data-base</h3>
          <div>
            <div class="skill-card">
              <div>
                <div>
                  <span class="img"> </span>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div>
                <div>
                  <span class="img"> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tool">
          <h3>tool/version control</h3>
          <div>
            <div class="skill-card">
              <div>
                <div>
                  <span class="img"> </span>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div>
                <div>
                  <span class="img"> </span>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div>
                <div>
                  <span class="img"> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import svgIcon from "@jamescoyle/vue-icon";
import { mdiVuejs } from "@mdi/js";
export default {
  components: {},
  mounted() {
    let event = document.getElementsByClassName("skill-card");
    console.log(event[0]);
    // event[1].addEventListener("mouseenter", this.mouseEnter);
    // test.addeventlistener("mouseenter", this.mouseEnter, false);
    // console.log(test);
  },
  data() {
    return {
      mdiVuejs: mdiVuejs,
    };
  },
  methods: {
    mouseEnter(e) {
      console.log("여기요", e.target);
    },
  },
};
</script>

<style scoped>
.container {
  /* border: 1px solid black; */
  padding: 10px;
  box-sizing: border-box;
}
h2 {
  text-align: center;
}

h3 {
  text-align: center;
  /* border-bottom: 1px solid grey; */
  /* border-bottom-style: width 80%; */
}
.skill-box {
  display: flex;
  flex-direction: column;
}
.skill-box > div > div {
  display: flex;
  justify-content: space-around;
}

.skill-card {
  display: block;
  /* border: 1px solid black; */
  width: 200px;
  height: 250px;
}

.skill-card div {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid black;
}

.skill-box div div .skill-card div span {
  flex-grow: 2;
  object-fit: cover;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.skill-box .front div .skill-card:nth-child(1) div span {
  background-image: url("@/images/html-logo.png");
}

.skill-box .front div .skill-card:nth-child(2) div span {
  background-image: url("@/images/css-logo.png");
}
.skill-box .front div .skill-card:nth-child(3) div span {
  background-image: url("@/images/js-logo.png");
}
.skill-box .frame-work div .skill-card:nth-child(1) div span {
  background-image: url("@/images/vue-logo.png");
}
.skill-box .frame-work div .skill-card:nth-child(2) div span {
  background-image: url("@/images/nuxt-logo.png");
}
.skill-box .back div .skill-card:nth-child(1) div span {
  background-image: url("@/images/node-logo.png");
}

.skill-box .back div .skill-card:nth-child(2) div span {
  background-image: url("@/images/mysql-logo.png");
}

.skill-box .tool div .skill-card:nth-child(1) div span {
  background-image: url("@/images/vscode-logo.png");
}
.skill-box .tool div .skill-card:nth-child(2) div span {
  background-image: url("@/images/github-logo.png");
}
.skill-box .tool div .skill-card:nth-child(3) div span {
  background-image: url("@/images/git-logo.png");
}
</style>
