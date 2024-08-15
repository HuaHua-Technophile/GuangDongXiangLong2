import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "首页",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/AboutUs",
      name: "关于我们",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/Estate",
      name: "产业&技术",
      component: () => import("../views/Estate.vue"),
    },
    {
      path: "/RDInnovation",
      name: "研发创新",
      component: () => import("../views/RDInnovation.vue"),
    },
    {
      path: "/MediaCenter",
      name: "媒体中心",
      component: () => import("../views/MediaCenter.vue"),
    },
  ],
});

export default router;
