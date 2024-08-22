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
  <div
    class="d-grid mx-auto"
    style="
      max-width: var(--content-max-width);
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      /* grid-auto-rows: auto; */
      grid-template-rows: masonry;
    ">
    <a
      v-for="i in mediaNews.data"
      :key="i.title"
      :href="i.url"
      target="_blank"
      rel="noopener noreferrer"
      class="MediaNews transition500 h-auto d-block text-decoration-none text-black"
      style="
        break-inside: avoid;
        background: #f1f1f1;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
      ">
      <img
        :src="i.img"
        class="mediaNewsImg transition500 w-100 rounded-3 shadow mb-3" />
      <div class="opacity-75">
        <div
          class="title transition500 fw-bold mb-3"
          style="font-size: 1.08rem">
          {{ i.title }}
        </div>
        <el-text line-clamp="2">
          {{ i.content }}
        </el-text>
      </div>
    </a>
  </div>
  <Footer />
</template>
<script lang="ts" setup>
  import mediaNews from "../data/MediaNews.json";
</script>
<style lang="scss" scoped>
  .mediaNewsImg:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5) !important;
  }

  .MediaNews:hover {
    color: var(--bs-xlxl) !important;
    .title {
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      font-size: 1.15rem !important;
    }
  }
  .MediaNewsFather {
    @supports (grid-template-rows: masonry) {
      grid-template-rows: masonry;
      .MediaNews {
        height: auto;
      }
    }
  }
</style>
