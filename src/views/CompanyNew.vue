<template>
  <div>
    <!-- 首屏大图 -->
    <div
      v-lazy:background-image="'/images/MediaCenter/MediaCenter2.webp'"
      class="vw-100 vh-100 d-flex flex-column text-white bgimg-center-cover"
      style="text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)">
      <h1
        class="flex-grow-1 d-flex justify-content-center align-items-center"
        style="font-size: 3rem; letter-spacing: 0.7rem"
        data-swiper-parallax="-600">
        媒体中心
      </h1>
      <div
        class="d-flex mx-auto fs-4 mb-3"
        style="max-width: var(--content-max-width)"
        data-swiper-parallax="-300">
        <RouterLink
          to="/MediaCenter"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          企业新闻
        </RouterLink>
        <RouterLink
          to="/MediaCenter"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          行业动态
        </RouterLink>
      </div>
    </div>
    <!-- 具体内容 -->
    <div class="mx-auto" style="max-width: var(--content-max-width)">
      <SlideTitie class="my-5">新闻详情</SlideTitie>
      <img
        v-lazy="content?.img"
        class="w-75 rounded-4 shadow d-block mx-auto" />
      <h1 class="text-center my-5">{{ content?.title }}</h1>
      <div
        v-html="content?.content"
        class="fs-5"
        style="text-indent: 2rem"></div>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import CompanyNews from "../data/CompanyNews.json";

  const route = useRoute();

  const newsId = route.params.id;
  const content = CompanyNews.data.find((item) => item.id === newsId);
</script>
