<template>
  <swiper-container
    ref="swiperOut"
    :pagination="true"
    :pagination-type="'progressbar'"
    :dragSize="10"
    :speed="1500"
    :direction="'vertical'"
    :grab-cursor="true"
    :keyboard="true"
    :mousewheel="true"
    :parallax="true"
    slides-per-view="auto"
    :init="false"
    class="vw-100 vh-100"
    @swiperslidechange="props.swiperslidechange">
    <!-- 插槽 -->
    <slot></slot>
  </swiper-container>
</template>
<script lang="ts" setup>
  import type { SwiperContainer } from "swiper/element";
  import { onMounted, onUnmounted, ref } from "vue";
  // 滑动事件-----------------
  // 滑动事件-----------------
  const props = defineProps<{ swiperslidechange?: Function }>();
  // 延迟DOM加载后实例化------------
  const swiperOut = ref<SwiperContainer>();
  defineExpose({ swiperOut });

  onMounted(() => {
    Object.assign(swiperOut.value!, {
      injectStyles: [
        `:host {
          --swiper-theme-color: var(--bs-xlxl);
        }
        .swiper-vertical>.swiper-pagination-progressbar{
          --swiper-pagination-progressbar-size:5px;
          left:calc(100% - var(--swiper-pagination-progressbar-size, 4px));
        }
        `,
      ],
    });
    swiperOut.value?.initialize();
  });
  onUnmounted(() => {
    swiperOut.value?.swiper.destroy();
  });
</script>
