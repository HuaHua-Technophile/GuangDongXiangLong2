<template>
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
  <!-- 行业动态 -->
  <SlideTitie class="my-5">行业动态</SlideTitie>
  <Footer />
</template>
<script lang="ts" setup>
  import mediaNews from "../data/MediaNews.json";
</script>
<style lang="scss" scoped></style>
