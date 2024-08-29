<template>
  <VerticalParallaxSwiper>
    <!-- 首屏大图 -->
    <swiper-slide
      v-lazy:background-image="'/images/Honor/Honor1.webp'"
      class="bgimg-center-cover pt-0">
      <div
        class="w-100 h-100 d-flex flex-column text-white position-relative"
        style="text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)">
        <h1
          class="flex-grow-1 d-flex justify-content-center align-items-center"
          style="font-size: 3rem; letter-spacing: 0.7rem"
          data-swiper-parallax="-600">
          企业荣誉
        </h1>
      </div>
    </swiper-slide>
    <!-- 企业荣誉 -->
    <swiper-slide class="d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">企业荣誉</SlideTitie>
      <div
        class="d-grid justify-content-between mx-auto position-relative"
        style="
          max-width: var(--content-max-width);
          grid-template-columns: repeat(3, auto);
          gap: 2rem;
        "
        data-swiper-parallax="-300">
        <div
          v-for="i in honerText"
          class="honer transition750 border shadow-sm rounded p-4">
          <div class="bg-danger mb-3" style="width: 40px; height: 5px"></div>
          {{ i }}
        </div>
      </div>
    </swiper-slide>
    <!-- 公司资质 -->
    <swiper-slide class="d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">香龙香料所获资质</SlideTitie>
      <LiveShotSwiper
        :length="16"
        :thumbPathPrefix="'/images/LiveShot/AcquiredQualifications'"
        :thumbPathSuffix="'.jpg'"
        :origPathPrefix="'/images/LiveShot/AcquiredQualifications'"
        :origPathSuffix="'.webp'" />
    </swiper-slide>
    <!-- 页脚 -->
    <swiper-slide class="h-auto pt-0">
      <Footer />
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  // 资质与荣誉-------------
  const honerText = [
    '2023年，香龙香料荣获 广东省科学厅、广东省财政厅 颁发的"高新技术企业"称号',
    '2017年，香龙香料荣获"白云区江高镇纳税大户铜奖"称号',
    '2018年，香龙香料连续第二次，荣获"白云区江高镇纳税大户铜奖"称号',
    '2019年，香龙香料连续第三次，荣获"白云区江高镇纳税大户铜奖"称号',
    '2020年，香龙香料荣获"广东省守合同重信用企业"称号',
    '2020年，香龙香料荣获 中国质量认证监督管理中心 颁发的"AAA级别企业信用"称号',
    '2020年，香龙香料荣获 中国质量认证监督管理中心 颁发的"优秀产品质量奖"',
    '2020年，香龙香料荣获 中国质量认证监督管理中心 颁发的"广东省行业十佳品牌"荣誉称号',
  ];
</script>
<style lang="scss" scoped>
  .honer:hover {
    transform: translate(0px, -5px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3) !important;
  }
</style>
