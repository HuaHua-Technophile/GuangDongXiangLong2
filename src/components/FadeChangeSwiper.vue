<template>
  <!-- 渐变型轮播图 -->
  <swiper-container
    ref="fadeChangeSwiper"
    :init="false"
    :loop="true"
    :keyboard="false"
    :mousewheel="false"
    :allowTouchMove="false"
    :autoplay-delay="3000"
    :speed="8000"
    effect="creative"
    :creativeEffect="{
      prev: {
        opacity: 0.8,
        // scale: 1.2,
      },
      next: {
        opacity: 0,
        scale: 1.3,
      },
    }"
    class="position-relative">
    <slot></slot>
  </swiper-container>
</template>
<script lang="ts" setup>
  import type { SwiperContainer } from "swiper/element";
  import { onUnmounted, ref } from "vue";

  const fadeChangeSwiper = ref<SwiperContainer>();

  // 暴露实例,在需要的时候实例化.若在内层实例化则可能过早
  defineExpose({ swiperContainer: fadeChangeSwiper });
  /* onMounted(() => {
    fadeChangeSwiper.value?.initialize();
  }); */

  onUnmounted(() => {
    fadeChangeSwiper.value?.swiper.destroy();
    fadeChangeSwiper.value = undefined;
  });
</script>
<style lang="scss" scoped>
  .swiper-liner {
    -webkit-transition-timing-function: linear; /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
  }
</style>
