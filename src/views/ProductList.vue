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
            v-lazy="j.img"
            class="w-100 h-100 rounded-5 shadow object-fit-cover"
            data-swiper-parallax="-200" />
          <div data-swiper-parallax="-300">
            <p class="transition750 fw-bold opacity-75 fs-3 mt-3 pb-4">
              {{ j.name }}
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
      item: [
        { name: "烟膏", img: "/images/ProductList/YanChao/烟膏_1.webp" },
        {
          name: "烟油",
          img: "/images/ProductList/YanChao/烟油_2.webp",
        },
        {
          name: "烟油",
          img: "/images/ProductList/YanChao/烟油_2.webp",
        },
      ],
    },
    {
      initialize: false,
      title: "蛋奶类",
      item: [
        { name: "蛋糕", img: "/images/ProductList/DanNai/蛋糕_6.webp" },
        {
          name: "黄油（白脱，牛油）",
          img: "/images/ProductList/DanNai/黄油（白脱，牛油）_7.webp",
        },
        { name: "鸡蛋", img: "/images/ProductList/DanNai/鸡蛋_1.webp" },
        { name: "奶酪（芝士）", img: "/images/ProductList/DanNai/鸡蛋_1.webp" },
        { name: "牛奶", img: "/images/ProductList/DanNai/奶酪（芝士）_2.webp" },
        { name: "咸蛋黄", img: "/images/ProductList/DanNai/咸蛋黄_4.webp" },
        { name: "椰奶", img: "/images/ProductList/DanNai/椰奶_5.webp" },
      ],
    },
    {
      initialize: false,
      title: "花茶类",
      item: [
        { name: "薄荷", img: "/images/ProductList/HuaCha/薄荷_6.webp" },
        {
          name: "桂花",
          img: "/images/ProductList/HuaCha/桂花_7.webp",
        },
        { name: "红茶", img: "/images/ProductList/HuaCha/红茶_1.webp" },
        { name: "绿茶", img: "/images/ProductList/HuaCha/绿茶_2.webp" },
        { name: "玫瑰", img: "/images/ProductList/HuaCha/玫瑰_3.webp" },
        { name: "茉莉", img: "/images/ProductList/HuaCha/茉莉_4.webp" },
        { name: "樱花", img: "/images/ProductList/HuaCha/樱花_5.webp" },
      ],
    },
    {
      initialize: false,
      title: "坚果类",
      item: [
        { name: "核桃", img: "/images/ProductList/JianGuo/核桃_6.webp" },
        {
          name: "花生",
          img: "/images/ProductList/JianGuo/花生_7.webp",
        },
        { name: "咖啡", img: "/images/ProductList/JianGuo/咖啡_1.webp" },
        { name: "巧克力", img: "/images/ProductList/JianGuo/巧克力_2.webp" },
        {
          name: "杏仁",
          img: "/images/ProductList/JianGuo/杏仁_3.webp",
        },
        { name: "燕麦", img: "/images/ProductList/JianGuo/燕麦_4.webp" },
        { name: "芝麻", img: "/images/ProductList/JianGuo/芝麻_5.webp" },
      ],
    },
    {
      initialize: false,
      title: "蔬果类",
      item: [
        { name: "葱油", img: "/images/ProductList/ShuGuo/葱油_6.webp" },
        {
          name: "大蒜",
          img: "/images/ProductList/ShuGuo/大蒜_7.webp",
        },
        { name: "枸杞", img: "/images/ProductList/ShuGuo/枸杞_8.webp" },
        { name: "红豆", img: "/images/ProductList/ShuGuo/红豆_9.webp" },
        { name: "红薯", img: "/images/ProductList/ShuGuo/红薯_10.webp" },
        { name: "红枣", img: "/images/ProductList/ShuGuo/红枣_11.webp" },
        { name: "黄瓜", img: "/images/ProductList/ShuGuo/黄瓜_12.webp" },
        { name: "绿豆", img: "/images/ProductList/ShuGuo/绿豆_13.webp" },
        { name: "枇杷", img: "/images/ProductList/ShuGuo/枇杷_1.webp" },
        { name: "西红柿", img: "/images/ProductList/ShuGuo/西红柿_2.webp" },
        { name: "香菇", img: "/images/ProductList/ShuGuo/香菇_3.webp" },
        { name: "香芋", img: "/images/ProductList/ShuGuo/香芋_4.webp" },
        { name: "玉米", img: "/images/ProductList/ShuGuo/玉米_5.webp" },
      ],
    },
    {
      initialize: false,
      title: "水果类",
      item: [
        { name: "百香果", img: "/images/ProductList/ShuiGuo/百香果_17.webp" },
        {
          name: "草莓",
          img: "/images/ProductList/ShuiGuo/草莓_18.webp",
        },
        { name: "车厘子", img: "/images/ProductList/ShuiGuo/车厘子_1.webp" },
        { name: "番石榴", img: "/images/ProductList/ShuiGuo/番石榴_2.webp" },
        {
          name: "柑橘",
          img: "/images/ProductList/ShuiGuo/柑橘_3.webp",
        },
        { name: "哈密瓜", img: "/images/ProductList/ShuiGuo/哈密瓜_4.webp" },
        { name: "蓝莓", img: "/images/ProductList/ShuiGuo/蓝莓_5.webp" },
        { name: "荔枝", img: "/images/ProductList/ShuiGuo/荔枝_6.webp" },
        { name: "榴莲", img: "/images/ProductList/ShuiGuo/榴莲_7.webp" },
        { name: "芒果", img: "/images/ProductList/ShuiGuo/芒果_8.webp" },
        { name: "柠檬", img: "/images/ProductList/ShuiGuo/柠檬_9.webp" },
        { name: "苹果", img: "/images/ProductList/ShuiGuo/苹果_10.webp" },
        { name: "葡萄", img: "/images/ProductList/ShuiGuo/葡萄_11.webp" },
        { name: "水蜜桃", img: "/images/ProductList/ShuiGuo/水蜜桃_12.webp" },
        { name: "西瓜", img: "/images/ProductList/ShuiGuo/西瓜_13.webp" },
        { name: "鲜橙", img: "/images/ProductList/ShuiGuo/鲜橙_14.webp" },
        { name: "香蕉", img: "/images/ProductList/ShuiGuo/香蕉_15.webp" },
        { name: "椰子", img: "/images/ProductList/ShuiGuo/椰子_16.webp" },
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
