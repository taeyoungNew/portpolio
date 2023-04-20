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
                <p>설명</p>
              </div>
            </div>
            <div class="skill-card">
              <div>
                <span class="img"> </span>
                <p>설명</p>
              </div>
            </div>
            <div class="skill-card">
              <div>
                <span class="img"> </span>
                <p>설명</p>
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
                  <p>설명</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="skill-card">
                <div>
                  <span class="img"> </span>
                  <p>설명</p>
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
                  <p>설명</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div>
                <div>
                  <span class="img"> </span>
                  <p>설명</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tool"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import svgIcon from "@jamescoyle/vue-icon";
import { mdiVuejs } from "@mdi/js";
export default {
  components: {},
  data() {
    return {
      mdiVuejs: mdiVuejs,
    };
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
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
  width: 150px;
  height: 200px;
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
  background-image: url("@/images/free-icon-css.png");
}
.skill-box .front div .skill-card:nth-child(3) div span {
  background-image: url("@/images/free-icon-js.png");
}
.skill-box .frame-work div .skill-card:nth-child(1) div span {
  background-image: url("@/images/Vue-icon.png");
}
.skill-box .frame-work div .skill-card:nth-child(2) div span {
  background-image: url("@/images/Nuxt_logo.png");
}
.skill-box .back div .skill-card:nth-child(1) div span {
  background-image: url("@/images/node-logo.png");
}

.skill-box .back div .skill-card:nth-child(2) div span {
  background-image: url("@/images/mysql-icon.png");
}
</style>
