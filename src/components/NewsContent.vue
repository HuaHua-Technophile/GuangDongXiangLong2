<template>
  <div
    class="MediaNews transition500 h-auto d-block text-decoration-none text-black"
    style="
      break-inside: avoid;
      background: #f1f1f1;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
    ">
    <img
      :src="props.i.img"
      class="mediaNewsImg transition500 w-100 rounded-3 shadow mb-3" />
    <div class="opacity-75">
      <div class="title transition500 fw-bold mb-3" style="font-size: 1.08rem">
        {{ props.i.title }}
      </div>
      <el-text line-clamp="2" v-html="props.i.content"> </el-text>
    </div>
  </div>
</template>
<script lang="ts" setup>
  const props = defineProps<{
    i: {
      img: string;
      title: string;
      content: string;
    };
  }>();
</script>
<style lang="scss" scoped>
  .mediaNewsImg:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5) !important;
  }

  .MediaNews:hover {
    color: var(--bs-xlxl) !important;
    .title {
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      font-size: 1.15rem !important;
    }
  }
  .MediaNewsFather {
    @supports (grid-template-rows: masonry) {
      grid-template-rows: masonry;
      .MediaNews {
        height: auto;
      }
    }
  }
</style>
