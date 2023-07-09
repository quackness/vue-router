import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

//use magic comments >> network tab, select JS

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination/:id/:slug/:experienceSlug",
    name: "experience.show",
    component: () => import("@/views/ExperienceCard.vue"),
    props: route => ({
      ...route.params,
      id: parseInt(route.params.id)
    }),
  },
  {
    path: "/destination/:id/:slug",
    name: 'destination.show',
    component: () => import("@/views/DestinationShow.vue"),
    props: route => ({
      ...route.params,
      id: parseInt(route.params.id)
    }),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
