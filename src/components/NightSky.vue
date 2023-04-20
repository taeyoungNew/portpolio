<template>
  <div>
    <div class="container">
      <div class="star star-1"></div>
      <div class="star star-2"></div>
      <div class="star star-3"></div>
      <div class="star star-4"></div>
      <div class="star star-5"></div>
      <div class="star star-6"></div>
      <div class="star star-7"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star-2"></div>
      <div class="moon"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: #113755;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
}

.moon {
  height: 5.2em;
  width: 5.2em;
  background-color: #ffffff;
  position: absolute;
  left: 15.62em;
  top: 8.4em;
  border-radius: 50%;
  box-shadow: 0 0 0 1.02em rgba(32, 105, 149, 0.6),
    0 0 0 2.02em rgba(32, 105, 149, 0.3), 0 0 0 3.22em rgba(32, 105, 149, 0.08);
}

.moon::before {
  content: "";
  position: absolute;
  background-color: #ebefe7;
  height: 1.82em;
  width: 1.82em;
  border-radius: 50%;
  top: 0.8em;
  left: 0.7em;
}

.moon::after {
  content: "";
  position: absolute;
  background-color: #ebefe7;
  height: 0.73em;
  width: 0.73em;
  border-radius: 50%;
  top: 2.8em;
  left: 1.8em;
}

.shooting-star {
  height: 0.18em;
  width: 2.5em;
  background-color: #ffffff;
  /* background-color: orange; */
  transform: rotate(-25deg);
  position: absolute;
  top: 1em;
  left: 120em;
  opacity: 0.3;
  transform: 0.3s;
  animation: shooting-star 5s infinite;
}
@keyframes shooting-star {
  10% {
    transform: rotate(-30deg) translate(-60em, 0);
    opacity: 0;
  }
  50% {
    transform: rotate(-30deg) translate(-60em, 0);
    opacity: 0;
  }
  100% {
    transform: rotate(-30deg) translate(-60em, 0);
    opacity: 0;
  }
}

.shooting-star-2 {
  height: 0.18em;
  width: 1.5em;
  background-color: #ffffff;
  /* background-color: orange; */
  transform: rotate(-25deg);
  position: absolute;
  top: 15em;
  left: 100em;
  opacity: 0.3;
  transform: 0.1s;
  animation: shooting-star-2 8s infinite;
}

@keyframes shooting-star-2 {
  10% {
    transform: rotate(-40deg) translate(-80em, 0);
    opacity: 0;
  }
  50% {
    transform: rotate(-40deg) translate(-80em, 0);
    opacity: 0;
  }
  100% {
    transform: rotate(-40deg) translate(-80em, 0);
    opacity: 0;
  }
}

.star,
.star::before,
.star::after {
  background-color: #ffffff;
  height: 0.2em;
  width: 0.2em;
  border-radius: 50%;
  position: absolute;
  opacity: 0.2;
  animation: twinkle 2s infinite;
}

@keyframes twinkle {
  50% {
    opacity: 1;
  }
}

.star-1 {
  top: 5em;
  left: 80.75em;
  animation-delay: 0.2s;
}

.star-1::before {
  content: "";
  top: 20em;
  left: -10.75em;
  animation-delay: 0.4s;
}

.star-1::after {
  content: "";
  top: 70em;
  left: -14.75em;
  animation-delay: 0.8s;
}

/* .star-1,
.star-1::before,
.star-1::after {
  animation-delay: 0.4s;
} */
.star-2 {
  top: 15em;
  left: 20.25em;
  animation-delay: 0.38s;
}

.star-2::before {
  content: "";
  top: 11em;
  left: -8.75em;
  animation-delay: 0.75s;
}

.star-2::after {
  content: "";
  top: 32em;
  left: -35.75em;
  animation-delay: 1.1s;
}
.star-3 {
  top: 22em;
  left: 12.75em;
  animation-delay: 1.2s;
}

.star-3::before {
  content: "";
  top: 20em;
  left: -44.75em;
  animation-delay: 0.3s;
}

.star-3::after {
  content: "";
  top: 18em;
  left: -03.75em;
  animation-delay: 0.75s;
}
.star-4 {
  top: 42em;
  left: 80.75em;
  animation-delay: 0.9s;
}

.star-4::before {
  content: "";
  top: 20em;
  left: 44.75em;
  animation-delay: 1.8s;
}

.star-4::after {
  content: "";
  top: 18em;
  left: 33.75em;
  animation-delay: 0.6s;
}
.star-5 {
  top: 2em;
  left: 100.75em;
  animation-delay: 0.53s;
}

.star-5::before {
  content: "";
  top: 4em;
  left: 24.28em;
  animation-delay: 1s;
}

.star-5::after {
  content: "";
  top: 25em;
  left: 35.75em;
  animation-delay: 0.2s;
}
.star-6 {
  top: 11em;
  left: 15.75em;
  animation-delay: 0.6s;
}

.star-6::before {
  content: "";
  top: 18em;
  left: 15.24em;
  animation-delay: 0.9s;
}

.star-6::after {
  content: "";
  top: 23em;
  left: 18.62em;
  animation-delay: 1.2s;
}
.star-7 {
  top: 12em;
  left: 10.75em;
  animation-delay: 0.6s;
}

.star-7::before {
  content: "";
  top: 50em;
  left: 10.24em;
  animation-delay: 1.1s;
}

.star-7::after {
  content: "";
  top: 58em;
  left: 2.02em;
  animation-delay: 1.7s;
}
</style>
