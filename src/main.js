import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import { fas } from "@fortawesome/free-solid-svg-icons";

// library.add();

Vue.component();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
