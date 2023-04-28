import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/today-weather",
    name: "today's weather",
    component: () => import("@/views/TodayWeather.vue"),
  },
  {
    path: "/my-todos",
    name: "my todos",
    component: () => import("@/views/MyTodos.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
