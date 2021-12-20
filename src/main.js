import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/main.scss";

// NProgress
import "nprogress/nprogress.js";
import "nprogress/nprogress.css";

createApp(App).use(router).mount("#app");
