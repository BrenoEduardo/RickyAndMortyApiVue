import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import showInfoPoke from "../views/ShowInfoPoke.vue";
import pageInicial from "../views/pageInicial.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: pageInicial,
    },
    {
      path: "/home",
      name: "telaAfterHome",
      component: HomeView,
    },
    {
      path: "/showInfoPokemon",
      name: "showInfoPoke",
      component: showInfoPoke,
    },
  ],
});

export default router;
