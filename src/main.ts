import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";

import "./styles/common.css";

createApp(App).use(router).use(store).mount("#app");
