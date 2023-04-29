<template>
  <div>
    <div class="container">
      <h2>ABOUT ME</h2>
      <div>
        <div class="picture">
          <img src="@/images/증명사진.jpg" alt="" />
          <h4>안녕하세여</h4>
          <p>
            전 직장에서 우연한 계기로 프로그래밍을 접한 후 개발자에 대한 매력과
            동경으로 웹개발자를 희망하게 되었습니다.
          </p>
        </div>
        <div class="about-me">
          <span>
            <h5>이름</h5>
            :
            <h5>민태영</h5>
          </span>
          <span>
            <h5>주소</h5>
            :
            <h5>경기 구리시 행복주택</h5>
          </span>
          <span>
            <h5>이메일</h5>
            :
            <h5>dndbxhd10@naver.com</h5>
          </span>
          <span>
            <h5>생년월일</h5>
            :
            <h5>1993.05.25</h5>
          </span>
          <span>
            <h5>연락처</h5>
            :
            <h5>010-2496-4752</h5>
          </span>
          <span>
            <h5>github</h5>
            :
            <a href="https://github.com/"> https://github.com/ </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 1200px;
}
.container > div {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
}

.container > div div {
  padding: 0 50px;
}

.picture {
  width: 230px;
  /* height: 300px; */
}

.picture img {
  width: 230px;
  height: 300px;
}
h2 {
  text-align: center;
  font-weight: 800;
}
h4 {
  margin-bottom: 5px;
}
h5 {
  display: inline-block;
  font-weight: 700;
  font-size: 15px;
}
p {
  margin: 0;
}

.about-me {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-me span {
  /* border: 1px solid black; */
  flex-grow: 0.5;
}
</style>
