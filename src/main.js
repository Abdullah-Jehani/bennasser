import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(router).use(pinia).use(Toast).mount("#app"); // Chain .mount() here
