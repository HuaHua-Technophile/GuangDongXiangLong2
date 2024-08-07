<template>
  <VerticalParallaxSwiper>
    <!-- 首屏大图 -->
    <swiper-slide
      v-lazy:background-image="'/images/AboutUs/AboutUs1.jpg'"
      style="background-position: center; background-size: cover">
      <div
        class="w-100 h-100 border d-flex flex-column text-white position-relative"
        style="
          backdrop-filter: blur(4px);
          text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        ">
        <div
          class="flex-grow-1 d-flex justify-content-center align-items-center"
          style="font-size: 3rem; letter-spacing: 0.7rem"
          data-swiper-parallax="-600">
          关于我们
        </div>
        <div
          class="d-flex mx-auto fs-3 mb-3"
          style="max-width: var(--content-max-width)"
          data-swiper-parallax="-300">
          <div class="mx-3">企业概况</div>
          <div class="mx-3">公司简介</div>
          <div class="mx-3">公司简介</div>
          <div class="mx-3">公司简介</div>
        </div>
      </div>
    </swiper-slide>
    <!-- 企业概况 -->
    <swiper-slide
      class="d-flex flex-column justify-content-evenly"
      style="padding-top: 4.5rem">
      <SlideTitie data-swiper-parallax="-600">企业概况</SlideTitie>
      <div
        class="d-flex align-items-center justify-content-around mx-auto"
        style="max-width: var(--content-max-width)">
        <!-- 文案 -->
        <div class="col-5" style="text-indent: 2em">
          <p>
            广东香龙香料有限公司成立于2006年，是香龙集团的核心子公司，总部位于广东省广州市。公司专注于香精香料的研发、生产和销售，为全球客户提供高品质、创新型的香精香料解决方案。
          </p>
          <p>
            香龙香料拥有国家认定的高新技术企业资质，并设有"广东省企业技术中心"。公司在湖北、河南、广东等地设有生物种植基地，总面积约三万亩，确保原料供应的稳定性和高品质。近年来，公司年销售额持续增长，在行业内占据重要地位。公司多次获得行业协会和地方政府颁发的创新奖项，并积极参与行业标准的制定。
          </p>
          <p>
            香龙香料的发展历程可追溯至1996年成立的广州市香龙化工香料有限公司。二十多年来，公司不断创新发展，逐步成长为行业领军企业。特别是近十年，香龙香料积极拓展国际市场，在泰国、印度尼西亚等地设立销售代理，推动业务全球化。目前，公司已发展成为一家集研发、生产、销售于一体的现代化企业集团，业务涵盖烟用香精、食用香精和植物提取物等多个领域，产品广泛应用于烟草、食品、日化等行业。
          </p>
        </div>
        <!-- 图片 -->
        <img
          v-lazy="'/images/AboutUs/AboutUs2.webp'"
          class="企业概况img col-5 rounded-4 shadow transition750" />
      </div>
    </swiper-slide>
    <!-- 页脚 -->
    <swiper-slide class="h-auto">
      <Footer />
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
  .企业概况img:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5) !important;
  }
</style>
