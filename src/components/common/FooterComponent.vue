<template>
  <div>
    <footer>
      <div class="footer-icons">
        <a href="">
          <img src="@/images/github-logo.png" alt="" />
        </a>
        <img class="email-logo" src="@/images/mail-logo.png" alt="" />
        <!-- <img src="@/images/mobile_phone_icon.png" alt="" />
        <img src="@/images/pointer_place_icon.png" alt="" /> -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  border: 1px solid black;
  height: 100px;
  display: flex;
  justify-content: center;
  line-height: 1.5em;
  align-items: center;
  /* background-color: #000; */
}

img {
  width: 50px;
  height: 50px;
}

.footer-icons {
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  box-sizing: border-box;
}

.footer-icons > .email-logo {
  color: white;
}
</style>
