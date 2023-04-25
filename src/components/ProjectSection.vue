<template>
  <div>
    <div class="container">
      <h2>projects</h2>
      <div class="tab-inner">
        <input type="radio" name="tabmenu" id="tab1" checked />
        <input type="radio" name="tabmenu" id="tab2" />
        <input type="radio" name="tabmenu" id="tab3" />
        <div class="slide">
          <div
            class="slide-inner"
            v-for="(data, index1) in projectsData"
            :key="index1"
          >
            <div class="project-box">
              <div class="img">
                <img :src="require(`../images/projectImg${data.img}`)" alt="" />
              </div>
              <div class="back-ground">
                <div class="project-manual">
                  <h2>{{ data.projectTitle }}</h2>
                  <h3>개요</h3>
                  <p>{{ data.projectOutLine }}</p>
                  <h3>기능구현리스트</h3>
                  <ul
                    v-for="(li1, index2) in data.siteFeatures"
                    :key="`o-${index2}`"
                  >
                    <li>{{ li1 }}</li>
                  </ul>
                  <h3>사용된 언어</h3>
                  <ul v-for="(li2, index3) in data.languages" :key="index3">
                    <li>{{ li2 }}</li>
                  </ul>
                  <h3>제작기간</h3>
                  <p>202207 ~ 202208</p>
                </div>
              </div>
            </div>
            <!-- <div class="project-box">
              <div class="img">
                <img src="@/images/projectImg/today-weather.png" alt="" />
              </div>
              <div class="back-ground">
                <div class="project-manual">
                  <h2>today's weather</h2>
                  <h3>개요</h3>
                  <p>전국의 기상상태와 공기오염상태를 검색할 수 있는 사이트</p>
                  <h3>기능구현리스트</h3>
                  <ul>
                    <li>검색창에 원하는 주소의 날씨 및 공기오염도 검색기능</li>
                    <li>
                      전국의 원하는곳을 클릭시 날씨 및 공기오염도 검색기능
                    </li>
                    <li>
                      현재 기온, 비, 습도, 풍속, 미세먼지, 초미세먼지, 오존,
                      일산화탄소 확인가능
                    </li>
                    <li>다음 날짜의 23시까지의 날씨데이터 확인 가능</li>
                  </ul>
                  <h3>사용된 언어</h3>
                  <ul>
                    <li>Vue</li>
                    <li>Vuetify</li>
                    <li>js</li>
                    <li>css</li>
                  </ul>
                  <h3>제작기간</h3>
                  <p>202207 ~ 202208</p>
                </div>
              </div>
            </div> -->

            <!-- <div class="project-box">
              <div class="img"></div>
              <div class="project-manual">
                <h2>today's weather</h2>
                <h3>개요</h3>
                <p>전국의 기상상태와 공기오염상태를 검색할 수 있는 사이트</p>
                <h3>기능구현리스트</h3>
                <ul>
                  <li>검색창에 원하는 주소의 날씨 및 공기오염도 검색기능</li>
                  <li>전국의 원하는곳을 클릭시 날씨 및 공기오염도 검색기능</li>
                  <li>
                    현재 기온, 비, 습도, 풍속, 미세먼지, 초미세먼지, 오존,
                    일산화탄소 확인가능
                  </li>
                  <li>다음 날짜의 23시의 날씨데이터 확인 가능</li>
                </ul>
                <h3>사용된 언어</h3>
                <ul>
                  <li>Vue</li>
                  <li>Vuetify</li>
                  <li>js</li>
                  <li>css</li>
                </ul>
                <h3>제작기간</h3>
              </div>
            </div> -->
          </div>
        </div>

        <div class="btn">
          <label for="tab1"></label>
          <label for="tab2"></label>
          <label for="tab3"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectsData: [
        {
          img: "today-weather.png",
          projectTitle: "today's weather",
          projectOutLine:
            "전국의 기상상태와 공기오염상태를 검색하고 한눈에 볼 수 있는 사이트",
          siteFeatures: [
            "검색창에 원하는 주소의 날씨 및 공기오염도 검색기능",
            "전국의 원하는곳을 클릭시 날씨 및 공기오염도 검색기능",
            " 현재 기온, 비, 습도, 풍속, 미세먼지, 초미세먼지, 오존일산화탄소 확인가능",
            "다음 날짜의 23시까지의 날씨데이터 확인 가능",
          ],

          languages: ["Vue", "vuetify", "js", "css"],
        },
        {
          img: "my-todos.png",
          projectTitle: "My Todos",
          projectOutLine: "데이터를 저장가능한 Todolist",
          siteFeatures: [
            "전국의 원하는곳을 클릭시 날씨 및 공기오염도 검색기능",
            " 현재 기온, 비, 습도, 풍속, 미세먼지, 초미세먼지, 오존일산화탄소 확인가능",
            "다음 날짜의 23시까지의 날씨데이터 확인 가능",
          ],

          languages: ["Nuxt", "Vue", "vuetify", "js", "css", "node", "MySql"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 3.5em;
}
.container h2 {
  text-align: center;
}
/* h3 {
  display: inline-block;
} */
img {
  width: 900px;
  height: 670px;
}
.container {
  /* border: 1px solid dodgerblue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 720px;
  line-height: 1.5em;
}

.tab-inner {
  /* border: 1px solid red; */
  width: inherit;
  height: inherit;
}
input[name="tabmenu"] {
  display: none;
}
.slide {
  /* border: 5px solid red; */
  position: relative;
  height: 680px;
  width: inherit;
  margin-left: auto;
  margin-right: auto;
  /* overflow: hidden; */
}
.slide-inner {
  border: 1px solid black;
  display: flex;
  width: 300%;
  height: 680px;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
}
.project-box {
  width: inherit;
  position: relative;
}

.project-box:nth-child(1) > .back-ground {
  display: inline-block;
  position: absolute;
  top: 100%;
  width: 900px;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: red;
  opacity: 1;
}
.project-box:nth-child(1) > .back-ground > .project-manual {
  /* background-color: antiquewhite; */
  display: inline-block;
  position: absolute;
  top: 0%;
  right: 0%;
  width: 40%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  opacity: 1;
  animation-timing-function: linear;
}

.project-box:nth-child(1):hover > .back-ground {
  display: inline-block;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  animation: showManual 0.7s;
}

.project-box:nth-child(1):hover > .back-ground .project-manual {
  display: inline-block;
  top: 0;
  background-color: white;
  animation: showManual 0.7s;
  opacity: 1;
}

@keyframes showManual {
  0% {
    top: 100%;
    opacity: 0;
  }

  100% {
    top: 0;
  }
}

/* .project-box:nth-child(1):not(:hover) > .back-ground {
  border: 1px solid black;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  animation: closeManual 0.7s;
  opacity: 1;
} */

/* .project-box:nth-child(1):not(:hover) > .back-ground .project-manual {
  top: 0;
  background-color: white;
  animation: closeManual 0.7s;
  opacity: 1;
} */

/* @keyframes closeManual {
  0% {
    top: 0;
    opacity: 0.5;
  }

  50% {
    top: 50%;
    opacity: 0.5;
  }

  100% {
    top: 100%;
    opacity: 0;
  }
} */

.project-box .img {
  /* background-color: red; */
  width: 70%;
  height: 100%;
}

.project-box .project-manual h2 {
  color: black;
  z-index: 100;
  font-size: 20px;
  text-align: start;
  border-bottom: 1px solid rgba(199, 190, 190, 0.5);
}
.project-box .project-manual h3 {
  color: black;
  z-index: 100;
  font-size: 15px;
  text-align: start;
}

.project-box .project-manual div span img {
  width: 30px;
  height: 30px;
}

.project-box .project-manual ul li {
  font-size: 13px;
  list-style: none;
}

.btn {
  text-align: center;
}
.btn label {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: lightgray;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}

input[id="tab1"]:checked ~ .btn label[for="tab1"] {
  background: dodgerblue;
}
input[id="tab2"]:checked ~ .btn label[for="tab2"] {
  background: dodgerblue;
}
input[id="tab3"]:checked ~ .btn label[for="tab3"] {
  background: dodgerblue;
}

input[id="tab1"]:checked ~ .slide .slide-inner {
  left: 0;
}

input[id="tab2"]:checked ~ .slide .slide-inner {
  left: -100%;
}

input[id="tab3"]:checked ~ .slide .slide-inner {
  left: -200%;
}
</style>
