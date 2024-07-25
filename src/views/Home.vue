<template>
  <VerticalParallaxSwiper>
    <swiper-slide class="w-100 h-100 overflow-hidden">
      <FadeChangeSwiper ref="fadeChangeSwiper" class="w-100 h-100">
        <swiper-slide
          v-for="i in firstSlide"
          :title="i.title"
          :bg="i.bg"
          v-lazy:background-image="i.bg"
          class="bgimg-center-cover">
          <div class="SlideTitle position-absolute top-50 w-100">
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

    <!-- ---------------------- -->
    <swiper-slide
      class="w-100 h-100 d-flex align-items-center justify-content-center fs-1"
      >Slide 3</swiper-slide
    >
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { SwiperContainer } from "swiper/element";
  import { onMounted, ref } from "vue";

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
</style>
