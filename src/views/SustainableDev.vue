<template>
  <VerticalParallaxSwiper>
    <!-- 首屏大图 -->
    <swiper-slide
      v-lazy:background-image="'/images/SustainableDev/SustainableDev1.webp'"
      class="bgimg-center-cover pt-0">
      <div
        class="w-100 h-100 d-flex flex-column text-white position-relative"
        style="text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)">
        <h1
          class="flex-grow-1 d-flex justify-content-center align-items-center"
          style="font-size: 3rem; letter-spacing: 0.7rem"
          data-swiper-parallax="-600">
          可持续发展
        </h1>
      </div>
    </swiper-slide>
    <!-- 可持续发展 -->
    <swiper-slide
      class="d-flex flex-column align-items-center justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">可持续发展</SlideTitie>
      <div
        class="mx-auto fs-5 fw-bold opacity-75"
        style="
          text-indent: 2.5rem;
          max-width: calc(var(--content-max-width) * 0.8);
        "
        data-swiper-parallax="-300">
        香龙香料始终坚持将可持续发展融入企业的核心战略。我们通过全面实施绿色生产技术，减少碳排放，优化资源利用率，以保护环境为己任。公司所有项目都严格遵循环保标准，确保在经济增长的同时为社会和环境创造积极影响。我们的目标是通过负责任的生产方式，实现经济、生态与社会的和谐发展。
      </div>
      <img
        v-lazy="'/images/SustainableDev/SustainableDev7.webp'"
        class="rounded-3 shadow object-fit-cover"
        style="
          object-position: center 53%;
          height: 60% !important;
          width: 70% !important;
        "
        data-swiper-parallax="-200" />
    </swiper-slide>
    <!-- 我们的战略 -->
    <swiper-slide
      class="d-flex flex-column align-items-center justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">我们的战略</SlideTitie>
      <div
        class="mx-auto fs-5 fw-bold opacity-75"
        style="max-width: calc(var(--content-max-width) * 0.8)"
        data-swiper-parallax="-400">
        香龙香料致力于构建绿色可持续发展的产业生态。公司不断推动创新技术的应用，开发天然环保的香精香料解决方案，减少对化学合成物质的依赖。我们秉承ESG理念，努力成为推动绿色发展的行业先锋。通过绿色科技与创新，香龙香料将继续引领行业，助力全球健康与环保事业的发展。
      </div>
      <img
        v-lazy="'/images/SustainableDev/SustainableDev2.webp'"
        class="rounded-3 shadow object-fit-cover"
        style="
          object-position: center 53%;
          height: 60% !important;
          width: 70% !important;
        "
        data-swiper-parallax="-200" />
    </swiper-slide>
    <!-- 我们的行动 -->
    <swiper-slide
      class="d-flex flex-column align-items-center justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">我们的行动</SlideTitie>
      <div
        class="mx-auto d-grid"
        style="
          width: var(--content-max-width);
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 15px;
        "
        data-swiper-parallax="-300">
        <div
          v-for="i in ourActions"
          v-lazy:background-image="i.bg"
          class="ourActionsCard transition750 rounded overflow-hidden shadow position-relative d-flex align-items-end"
          style="aspect-ratio: 10 / 15; background-size: cover"
          :style="'background-position: ' + i.bgPosition">
          <!-- 暗色遮罩 -->
          <div
            class="transition750 bg-dark opacity-75 w-100 h-50 text-white p-5">
            <div class="mb-3 fs-5 fw-bold">{{ i.title }}</div>
            <div class="mb-2" v-for="j in i.content">• {{ j }}</div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="h-auto pt-0">
      <Footer />
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  const ourActions = [
    {
      bg: "/images/SustainableDev/SustainableDev3.webp",
      bgPosition: "5% center",
      title: "稳健高效的公司治理",
      content: ["透明公司治理", "ESG治理"],
    },
    {
      bg: "/images/SustainableDev/SustainableDev4.webp",
      bgPosition: "center",
      title: "环境友好的绿色生产",
      content: ["优化资源管理", "低碳排放", "生态守护"],
    },
    {
      bg: "/images/SustainableDev/SustainableDev5.webp",
      bgPosition: "10% center",

      title: "合作共赢的产业生态",
      content: ["专注客户优先", "绿色供应链责任"],
    },
    {
      bg: "/images/SustainableDev/SustainableDev6.webp",
      bgPosition: "30% center",
      title: "共同富裕的社会责任",
      content: ["员工关怀", "助力社会贡献"],
    },
  ];
</script>
<style lang="scss" scoped>
  .ourActionsCard:hover {
    transform: scale(1.05) translate(0, -10px);
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5) !important;
    & > div {
      opacity: 0.9 !important;
    }
  }
</style>
