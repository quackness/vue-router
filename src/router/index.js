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
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName:"brazil"*/ '@/views/BrazilView.vue'),
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import(/* webpackChunkName:"panama"*/ "@/views/PanamaView.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import(/* webpackChunkName:"jamaica"*/ "@/views/JamaicaView.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import(/* webpackChunkName:"hawaii"*/ "@/views/HawaiiView.vue"),
  },
  {
    path: "/vue-router/:id",
    name: 'destination.show',
    component: () => import("@/views/DestinationShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
