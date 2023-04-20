<template>
  <div>
    <div class="container">
      <h3>꿈을 꾸는 개발자</h3>
      <ul class="nav-list">
        <li>ABOUT ME</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>HISTORY</li>
        <li>CONTACT</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  margin: 0;
  cursor: pointer;
}
.container {
  height: 40px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  line-height: 40px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  /* justify-content: center; */
}

.nav-list {
  display: flex;
  position: absolute;
  right: 10px;
}

li {
  list-style: none;
  padding: 10px;
  cursor: pointer;
}
</style>
