import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router";

// 1. creation des differentes routes



// 2. initualisation du router

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 3. creation de l'application
const app = createApp(App);

app.use(router);

// 4. Monter l'apllication dans la div ('#root')

app.mount("#root");
