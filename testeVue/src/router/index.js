import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import showInfoPoke from "../views/ShowInfoPoke.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
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
