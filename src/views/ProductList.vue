<template>
  <VerticalParallaxSwiper
    ref="swiperOut"
    :swiperslidechange="SwiperOutSlideChange">
    <!-- 首屏大图 -->
    <swiper-slide
      v-lazy:background-image="'/images/ProductList/ProductList1.webp'"
      class="d-flex flex-column text-white bgimg-center-cover"
      style="text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)">
      <h1
        class="flex-grow-1 d-flex justify-content-center align-items-center"
        style="font-size: 3rem; letter-spacing: 0.7rem"
        data-swiper-parallax="-600">
        产品列表
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
          to="/RDInnovation"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          研发创新
        </RouterLink>
        <RouterLink
          to="/ProductList"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          产品列表
        </RouterLink>
      </div>
    </swiper-slide>
    <!-- 产品列表 -->
    <swiper-slide
      v-for="i in productList"
      class="d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">{{ i.title }}</SlideTitie>
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
        :coverflow-effect-rotate="35"
        :coverflow-effect-stretch="0"
        :coverflow-effect-depth="0"
        :coverflow-effect-modifier="1"
        :coverflow-effect-slide-shadows="false"
        class="overflow-hidden"
        style="max-width: var(--content-max-width)"
        data-swiper-parallax="-100">
        <swiper-slide
          v-for="j in i.item"
          class="productItem transition750 d-flex flex-column align-items-center w-25 overflow-hidden">
          <img
            v-lazy="`/images/ProductList/${i.title}/${j}.webp`"
            class="w-100 h-100 rounded-5 shadow object-fit-cover"
            data-swiper-parallax="-200" />
          <div data-swiper-parallax="-300">
            <p class="transition750 fw-bold opacity-75 fs-3 mt-3 pb-4">
              {{ j }}
            </p>
          </div>
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
  import { Swiper } from "swiper/types";
  import { ref } from "vue";

  const swiperInside = ref<SwiperContainer[]>();
  const swiperOut = ref<{ swiperOut: SwiperContainer }>();
  const SwiperOutSlideChange = (e: CustomEvent<[Swiper]>) => {
    // onSlideChange事件会被内层swiper实例触发，莫名其妙？？？，且无法通过event.stopPropagation组织冒泡.于是在最外层再做一次判断来自哪个实例触发
    if (
      e.detail[0] == swiperOut.value?.swiperOut.swiper &&
      e.detail[0].activeIndex > 0 &&
      !productList.value[e.detail[0].activeIndex - 1].initialize
    ) {
      // swiper注入样式后延迟实例化
      Object.assign(swiperInside.value![e.detail[0].activeIndex - 1], {
        injectStyles: [
          `:host {
        --swiper-theme-color: var(--bs-xlxl);
      }
      `,
        ],
      });
      swiperInside.value![e.detail[0].activeIndex - 1].initialize();
      productList.value[e.detail[0].activeIndex - 1].initialize = true;
    }
  };

  const productList = ref([
    {
      initialize: false,
      title: "烟草类",
      item: ["烟膏", "烟油", "烟酊"],
    },
    {
      initialize: false,
      title: "蛋奶类",
      item: [
        "蛋糕",
        "黄油（白脱，牛油）",
        "鸡蛋",
        "奶酪（芝士）",
        "牛奶",
        "咸蛋黄",
        "椰奶",
      ],
    },
    {
      initialize: false,
      title: "花茶类",
      item: ["薄荷", "桂花", "红茶", "绿茶", "玫瑰", "茉莉", "樱花"],
    },
    {
      initialize: false,
      title: "坚果类",
      item: ["核桃", "花生", "咖啡", "巧克力", "杏仁", "燕麦", "芝麻"],
    },
    {
      initialize: false,
      title: "蔬果类",
      item: [
        "葱油",
        "大蒜",
        "枸杞",
        "红豆",
        "红薯",
        "红枣",
        "黄瓜",
        "绿豆",
        "枇杷",
        "西红柿",
        "香菇",
        "香芋",
        "玉米",
      ],
    },
    {
      initialize: false,
      title: "水果类",
      item: [
        "百香果",
        "草莓",
        "车厘子",
        "番石榴",
        "柑橘",
        "哈密瓜",
        "蓝莓",
        "荔枝",
        "榴莲",
        "芒果",
        "柠檬",
        "苹果",
        "葡萄",
        "水蜜桃",
        "西瓜",
        "鲜橙",
        "香蕉",
        "椰子",
      ],
    },
  ]);
</script>
<style lang="scss" scoped>
  .urlChangeBtn:hover {
    transform: translate(0px, -5px);
  }
  .productItem:hover p {
    color: var(--bs-xlxl) !important;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    transform: translate(0px, -5px);
  }
</style>
