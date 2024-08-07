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
  ],
});

export default router;
