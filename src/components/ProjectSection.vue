<template>
  <div>
    <h2>projects</h2>
    <div class="container">
      <div class="tab-inner">
        <input type="radio" name="tabmenu" id="tab1" checked />
        <input type="radio" name="tabmenu" id="tab2" />
        <input type="radio" name="tabmenu" id="tab3" />

        <div class="slide">
          <div class="slide-inner">
            <a href="#none1">
              <img src="@/images/mysql-icon.png" alt="" />
            </a>
            <a href="#none2">
              <img src="@/images/free-icon-html-5.png" alt="" />
            </a>
            <a href="#none3">
              <img src="@/images/Nuxt_logo.png" alt="" />
            </a>
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
export default {};
</script>

<style scoped>
img {
  width: 1000px;
  height: 600px;
}
h2 {
  text-align: center;
}
.container {
  border: 1px solid black;
  display: flex;
  width: 100%;
  height: 700px;
  justify-content: center;
  line-height: 1.5em;
  align-items: center;
}

.tab-inner {
  /* border: 1px solid red; */
  width: 100%;
  height: 600px;
}
input[name="tabmenu"] {
  display: none;
}
.slide {
  border: 5px solid red;
  position: relative;
  height: 600px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
.slide-inner {
  border: 1px solid dodgerblue;
  width: 300%;
  height: 600px;
  font-size: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
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
  margin: 10px 0 0 0;
  cursor: pointer;
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
