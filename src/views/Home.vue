<template>
  <VerticalParallaxSwiper>
    <!-- 首屏大图轮播 -->
    <swiper-slide class="w-100 h-100 overflow-hidden">
      <FadeChangeSwiper ref="fadeChangeSwiper" class="w-100 h-100">
        <swiper-slide
          v-for="i in firstSlide"
          :title="i.title"
          :bg="i.bg"
          v-lazy:background-image="i.bg"
          class="bgimg-center-cover">
          <div
            class="SlideTitle position-absolute top-50 w-100"
            data-swiper-parallax="-600">
            <div
              class="container text-white"
              v-html="i.title"
              style="
                font-size: 3.5rem;
                text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
              "></div>
          </div>
        </swiper-slide>
      </FadeChangeSwiper>
    </swiper-slide>
    <!-- 媒体中心 -->
    <swiper-slide
      class="MediaNews w-100 h-100 d-flex flex-column justify-content-evenly"
      style="padding-top: 4.5rem">
      <div>
        <div class="text-center fs-3 mb-1" style="letter-spacing: 0.2rem">
          媒体中心
        </div>
        <div
          class="text-center"
          style="letter-spacing: 1.5rem; text-indent: 1.5em">
          香韵缔造美味
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div class="mediaTitle bg-black bg-opacity-25 mx-2"></div>
          <img v-lazy="'/images/LOGO.webp'" style="height: 1.3rem" />
          <div class="mediaTitle bg-black bg-opacity-25 mx-2"></div>
        </div>
      </div>
      <!-- 内容 -->
      <div
        class="d-flex align-items-center mx-auto"
        style="max-width: var(--content-max-width)">
        <!-- 左边大图 -->
        <div class="col-6 p-5">
          <a
            :href="mediaNews.data[0].url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black text-decoration-none">
            <img
              v-lazy="mediaNews.data[0].img"
              class="w-100 mb-3 mediaBigImg transition750 rounded-3 shadow" />
            <div class="fw-bold mb-3 opacity-75 title transition500">
              {{ mediaNews.data[0].title }}
            </div>
            <div class="opacity-75 transition500">
              {{ mediaNews.data[0].content }}
            </div>
          </a>
        </div>
        <!-- 右边列表排列3个 -->
        <div class="col-6">
          <a
            v-for="(i, index) in mediaNews.data.slice(0, 3)"
            :href="i.url"
            target="_blank"
            rel="noopener noreferrer"
            class="d-flex text-black text-decoration-none align-items-center px-4"
            :class="[index < 2 ? 'dividing-line' : '']">
            <div
              class="bg-xlxl me-4 flex-shrink-0 d-flex flex-column align-items-center justify-content-center text-white"
              style="width: 5rem; height: 6rem">
              <div>{{ monthAbbreviation(i.date.slice(5, 7)) }}</div>
              <div
                class="bg-white bg-opacity-50 my-2"
                style="width: 3rem; height: 1px"></div>
              <div class="fs-3">{{ i.date.slice(8, 10) }}</div>
            </div>
            <div class="opacity-75">
              <div class="fw-bold mb-3 title transition500">{{ i.title }}</div>
              <div class="transition500">{{ i.content }}</div>
            </div>
          </a>
        </div>
      </div>
    </swiper-slide>
    <!-- 页脚 -->
    <swiper-slide class="h-auto">
      <Footer />
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { SwiperContainer } from "swiper/element";
  import { onMounted, ref } from "vue";
  import mediaNews from "../data/MediaNews.json";

  const fadeChangeSwiper = ref<{ swiperContainer: SwiperContainer }>();

  onMounted(() => {
    fadeChangeSwiper.value?.swiperContainer.initialize();
  });

  const firstSlide = [
    {
      title: "香韵缔造美味<br/>引领品质生活",
      bg: "/images/Home/Home1.webp",
    },
    {
      title: "全球化布局<br/>国际视野,多元化发展",
      bg: "/images/Home/Home2.webp",
    },
    {
      title: "创新驱动<br/>香龙研发实力的见证",
      bg: "/images/Home/Home3.webp",
    },
  ];

  // 月份转换
  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthAbbreviation = (num: string) => {
    const index = Number(num) - 1;
    return index >= 0 && index < 12 ? monthAbbreviations[index] : "Invalid";
  };
</script>
<style lang="scss" scoped>
  .SlideTitle {
    ::before {
      content: "";
      display: block;
      background: white;
      width: 7rem;
      height: 1rem;
      box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
      position: absolute;
      top: -4rem;
      left: 8rem;
    }
    & {
      text-indent: -6em;
      padding-left: 13em;
    }
    &::first-letter {
      font-size: 2em; //两倍原本大小
      margin-right: 1rem;
    }
  }
  .MediaNews {
    a:hover {
      color: var(--bs-xlxl) !important;
      .title {
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      }
    }
  }
  .mediaTitle {
    width: 8.5rem;
    height: 1.5px;
  }
  .mediaBigImg:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5) !important;
  }
  .dividing-line {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
  }
</style>
