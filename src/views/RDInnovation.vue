<template>
  <VerticalParallaxSwiper>
    <!-- 首屏大图 -->
    <swiper-slide
      v-lazy:background-image="'/images/RDInnovation/RDInnovation1.webp'"
      class="d-flex flex-column text-white bgimg-center-cover"
      style="text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)">
      <h1
        class="flex-grow-1 d-flex justify-content-center align-items-center"
        style="font-size: 3rem; letter-spacing: 0.7rem"
        data-swiper-parallax="-600">
        研发创新
      </h1>
      <div
        class="d-flex mx-auto fs-4 mb-3"
        style="max-width: var(--content-max-width)"
        data-swiper-parallax="-300">
        <RouterLink
          to="/Estate"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          产业板块
        </RouterLink>
        <RouterLink
          to="/Estate"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          研发创新
        </RouterLink>
      </div>
    </swiper-slide>
    <!-- 创新成果 -->
    <swiper-slide class="d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">创新成果</SlideTitie>
      <div
        class="mx-auto text-center"
        style="max-width: var(--content-max-width)">
        <p class="w-75 mx-auto">
          广东香龙香料有限公司始终以技术创新为企业发展的核心动力，凭借前瞻性的战略眼光，持续加大对产业链上下游技术的研究投入。公司在研发方面的专项资金占销售收入的比重逐年上升，尤其是在新设备引进和旧设备更新上的投入已达数亿人民币。我们建立了完善的技术研发人员培养体系和人才合作交流机制，通过系统化的研发项目全生命周期管理，确保技术研发的高效运作。
        </p>
        <p class="w-75 mx-auto">
          香龙香料已取得了大量具有自主知识产权的科研成果，这些创新成果不仅在技术投资和产业升级中得到了成功应用，还推动了新产业的孵化，显著提升了公司产品的核心竞争力。我们致力于通过持续的创新和技术进步，为客户提供更优质的产品和服务，保持在香精香料行业的领先地位。
        </p>
      </div>
      <div class="d-flex justify-content-center">
        <div v-for="(i, index) in RD_categorization" class="mx-4">
          <div
            :class="index % 2 == 0 ? 'flex-column' : 'flex-column-reverse'"
            class="d-flex">
            <div class="d-flex align-items-center">
              <i
                :class="i.icon"
                class="d-flex align-items-center justify-content-center text-xlxl border border-3 rounded-circle me-3"
                style="width: 6rem; height: 6rem; font-size: 4rem"></i>
              <span class="fs-3 opacity-75">{{ i.title }}</span>
            </div>
            <!-- 占位置空元素。调控挨个分布不同的上下 -->
            <div class="p-5"></div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- 专利与配方 -->
    <swiper-slide
      v-lazy:background-image="'/images/RDInnovation/RDInnovation2.webp'"
      class="d-flex flex-column justify-content-evenly bgimg-center-cover">
      <SlideTitie data-swiper-parallax="-600">专利与配方</SlideTitie>
      <div
        class="my-5 mx-auto text-center"
        style="max-width: var(--content-max-width)">
        截至2023年12月31日，广东香龙香料有限公司共拥有36项专利，其中包括1项发明专利和35项实用新型专利。同时，公司拥有上千种实现销售的香精配方。这些专利和配方不仅大幅提升了公司的技术水平，还显著增强了在香精香料行业的影响力，为客户提供了丰富的产品选择和创新解决方案。
      </div>
      <swiper-container
        ref="swiperInside"
        :init="false"
        :navigation="true"
        :pagination="true"
        :pagination-clickable="true"
        :keyboard="false"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :rewind="true"
        :autoplay-delay="2500"
        :effect="'coverflow'"
        :coverflow-effect-rotate="30"
        :coverflow-effect-stretch="0"
        :coverflow-effect-depth="100"
        :coverflow-effect-modifier="1"
        :coverflow-effect-slide-shadows="false"
        class="w-75 overflow-hidden">
        <swiper-slide
          v-for="i in 16"
          class="h-100 w-auto d-flex align-items-center justify-content-center rounded-5 overflow-hidden"
          style="aspect-ratio: 10 / 16">
          <el-image
            loading="lazy"
            class="w-75 h-75 FloatShadow transition750 rounded-4 shadow"
            :src="`/images/IP/IP${i}.jpg`"
            fit="cover"
            :preview-src-list="
              [...Array(16).keys()].map((num) => `/images/IP/IP${num + 1}.webp`)
            "
            :initial-index="i - 1"
            :preview-teleported="true" />
        </swiper-slide>
      </swiper-container>
    </swiper-slide>
    <!-- 页脚 -->
    <swiper-slide class="h-auto pt-0">
      <Footer />
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { SwiperContainer } from "swiper/element";
  import { onMounted, ref } from "vue";

  const RD_categorization = [
    {
      icon: "iconfont icon-zhuanli",
      title: "专利与配方",
    },
    {
      icon: "iconfont icon-rongyu",
      title: "创新荣誉",
    },
    {
      icon: "iconfont icon-yanfa",
      title: "研发中心",
    },
  ];

  const swiperInside = ref<SwiperContainer>();

  onMounted(() => {
    // swiper注入样式后延迟实例化
    Object.assign(swiperInside.value!, {
      injectStyles: [
        `:host {
        --swiper-theme-color: var(--bs-xlxl);
      }
      `,
      ],
    });
    swiperInside.value?.initialize();
  });
</script>
<style lang="scss" scoped>
  .urlChangeBtn:hover {
    transform: translate(0px, -5px);
  }
</style>
