import { createApp } from "vue";
import router from "./router/router";
import VueLazyload from "vue-lazyload"; // 引入

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

import App from "./App.vue";
import "./style/index.scss";

// register Swiper custom elements
register();

createApp(App).use(router).use(VueLazyload).mount("#app");
