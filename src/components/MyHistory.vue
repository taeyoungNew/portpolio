<template>
  <div>
    <div class="container">
      <h2>My History</h2>
      <div class="line-in-box"></div>
      <div class="career-list">
        <div class="career-box">
          <span class="circle"></span>
          <div class="career">
            <h3>선문대학교</h3>
            <br />
            <div class="text-box">
              <span>재학기간 : </span>&nbsp;
              <p>2012.03 ~ 2019.03</p>
            </div>
            <br />
            <div class="text-box">
              <span>전공 : </span>&nbsp;
              <p>일어일본어학</p>
            </div>
            <br />
            <div class="text-box">
              <span>복수전공 : </span>&nbsp;
              <p>상담산업심리학</p>
            </div>
            <br />
            <div class="text-box">
              <span>최종학점 : </span>&nbsp;
              <p>3.6/4.5</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="career-box">
          <span class="circle"></span>
          <div class="career">
            <h3>홋카이도 프린스호텔</h3>
            <br />
            <div class="text-box">
              <span>제직기간 : </span>
              <p>2014.06 ~ 2015.08</p>
              &nbsp;
            </div>
            <br />
            <div class="text-box">
              <span>근무내용 : </span>&nbsp;
              <p>홀 접객 업무 전반</p>
            </div>
            <br />
            <div class="text-box">
              <span>배웠던 점 : </span>&nbsp;
              <p>
                일본에서의 첫 근무로 그동안 배웠던 일본어를 사용할 좋은
                경험이었습니다.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="career-box">
          <span class="circle"></span>
          <div class="career">
            <h3>군복무</h3>
            <br />
            <div class="text-box">
              <span>군복무기간 : </span>&nbsp;
              <p>2015.09 ~ 2017.05</p>
            </div>
            <br />
            <div class="text-box">
              <span>복무지역 : </span>&nbsp;
              <p>연천GOP(5사단)</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="career-box">
          <span class="circle"></span>
          <div class="career">
            <h3>(주)화이어오토도아</h3>
            <br />
            <div class="text-box">
              <span>재직기간 : </span>&nbsp;
              <p>2019.04 ~ 2020.03</p>
            </div>
            <br />
            <div class="text-box">
              <span>근무내용 : </span>&nbsp;
              <p>자동문시공 및 수리</p>
            </div>
            <br />
            <div class="text-box">
              <span>배웠던 점: </span>&nbsp;
              <p>
                자동문수리를 함으로서 고장으로인해 곤경에 처한 고객들의 근심이
                없어지는 표정을 보며 뿌듯함을 느꼈고 기술자에 대한 자부심과
                책임감을 느끼게 되면서 일을 할 때 더욱 꼼꼼하고 디테일을 살피게
                되었습니다.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="career-box">
          <span class="circle"></span>
          <div class="career">
            <h3>(주)사이디라이트</h3>
            <br />
            <div class="text-box">
              <span>재직기간 : </span>&nbsp;
              <p>2020.05 ~ 2021.03</p>
            </div>
            <br />
            <div class="text-box">
              <span>근무내용 : </span>&nbsp;
              <p>일본어 문서번역 및 Vue기반 프론트엔드 개발</p>
            </div>

            <h4>참여프로젝트</h4>
            <div class="text-box">
              <br />
              <h4>1) 충무로 :</h4>
              &nbsp;
              <p>
                한국영화를 번역 및 자막작업을 하여 제휴된 일본미디어회사에 납품
              </p>
            </div>
            <br />
            <div class="text-box">
              <span>배웠던 점 : </span>&nbsp;
              <p></p>
            </div>
            <br />
            <div class="text-box">
              <br />
              <h4>2) Tiny Eihba :</h4>
              &nbsp;
              <p>비슷한 두 곡을 유저가 듣고 유사성검사를 하는 어플리케이션</p>
            </div>
            <br />
            <div class="text-box">
              <span>담당파트 : </span>&nbsp;
              <ul>
                <li>로그인화면 구현</li>
                <li>음원재생페이지 및 유사성체크박스 구현</li>
              </ul>
            </div>
            <br />
            <div class="text-box">
              <span>배웠던 점 : </span>&nbsp;
              <p>
                개발부서에 소속된 후 처음으로 맡은 프로젝트로 2인으로 작업을
                진행 하였습니다. 미숙한 부분이 많아 html, js, css Vue 등을
                사전에 학습하여 프로젝트에 참가하였고 어려운점도 있었지만 팀원과
                소통을 하면서 잘 마무리하였습니다. 이 계기로 처음으로
                프론트엔드에 접하게 되었으며 저에게 개발자의 꿈을 가지게 한
                경험이었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container .career-list .career-box .career h3 {
  margin: 0;
  border-bottom: 1px solid lightslategray;
  width: 300px;
}
.container {
  border: 1px solid black;
  width: 900px;
  min-height: 150vh;
  padding: 20px;
  box-sizing: border-box;
  /* height: 50vh; */
  position: relative;
  /* text-align: center; */
}
.container h2 {
  text-align: center;
}
.container .line-in-box {
  display: inline;
  position: absolute;
  border: 1px solid lightslategray;
  height: 90%;
  left: 15%;
  top: 100px;
}

.container .career-list {
  left: 20%;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 600px;
}

.container .career-list .career-box {
  position: relative;
  display: flex;

  /* left: 20%; */
  /* border: 1px solid black; */
}

.container .career-list .career-box p {
  max-width: 590px;
}
.container .career-list .career-box .circle {
  background-color: lightslategray;
  width: 10px;
  height: 10px;
  position: absolute;
  left: -49px;
  border-radius: 50%;
}

.container .career-list .career-box .circle {
  /* top: 1.8em; */
  top: 10px;
}
/* .container .career-list .career-box:nth-child(2) .circle {
  top: 10px;
  background-color: red;
} */

.text-box {
  width: 100%;
  display: flex;
  align-items: baseline;
}
.text-box p {
  margin: 0;
  /* background-color: antiquewhite; */
  width: 400px;
}
</style>
