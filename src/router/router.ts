import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "首页",
      component: () => import("../views/Home.vue"),
    },
  ],
});

export default router;
