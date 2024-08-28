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
      name: "企业概览",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/Honor",
      name: "企业荣誉",
      component: () => import("../views/Honor.vue"),
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
    {
      path: "/MediaCenter/:id",
      name: "新闻详情",
      props: true,
      component: () => import("../views/CompanyNew.vue"),
    },
    {
      path: "/SustainableDev",
      name: "可持续发展",
      props: true,
      component: () => import("../views/SustainableDev.vue"),
    },
    {
      path: "/ContactUs",
      name: "联系方式",
      props: true,
      component: () => import("../views/ContactUs.vue"),
    },
  ],
});

export default router;
