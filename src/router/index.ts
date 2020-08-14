import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/github",
    name: "Github",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Github.vue"),
  },
  {
    path: "/music",
    name: "Music",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Music.vue"),
  },
  {
    path: "/music-cool",
    name: "Music",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MusicCool.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
