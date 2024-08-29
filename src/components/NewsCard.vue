<template>
  <div
    class="d-flex justify-content-center mx-auto"
    style="
      max-width: var(--content-max-width);
      /* grid-template-columns: repeat(3, 1fr); */
      /* grid-gap: 20px; */
      /* grid-auto-rows: auto; */
      /* grid-template-rows: masonry; */
    ">
    <template v-for="i in props.data.data">
      <component
        :is="i.id ? RouterLink : 'a'"
        :to="i.id ? { name: '新闻详情', params: { id: i.id } } : undefined"
        :href="i.url ? i.url : undefined"
        :target="i.url ? '_blank' : undefined"
        rel="noopener noreferrer"
        class="MediaNews transition500 h-auto d-block text-decoration-none text-black cursor-pointer"
        style="
          width: 33% !important;
          break-inside: avoid;
          background: #f1f1f1;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        ">
        <img
          :src="i.img"
          class="mediaNewsImg transition500 w-100 rounded-3 shadow mb-3" />
        <div class="opacity-75">
          <div
            class="title transition500 fw-bold mb-3"
            style="font-size: 1.08rem">
            {{ i.title }}
          </div>
          <el-text line-clamp="2">{{ i.content[0] }}</el-text>
        </div>
      </component>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { RouterLink } from "vue-router";
  const props = defineProps<{
    data: {
      data: {
        id?: number;
        url?: string;
        title: string;
        img: string;
        content: string[];
      }[];
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
