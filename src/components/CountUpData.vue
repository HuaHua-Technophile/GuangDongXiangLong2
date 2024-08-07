<template>
  <div class="mx-auto d-flex justify-content-around align-items-center">
    <div
      v-for="(i, index) in props.data"
      class="companyOverviewIcon d-flex align-items-center"
      :class="[index % 2 == 0 ? 'flex-column' : 'flex-column-reverse']">
      <!-- 图标 -->
      <div
        :class="[i.icon]"
        class="Icon transition750 border border-3 border-black border-opacity-50 d-flex text-xlxl align-items-center justify-content-center"
        style="
          font-size: 4rem;
          width: 7rem;
          height: 7rem;
          border-radius: 999rem;
        "></div>
      <!-- 竖线 -->
      <div
        style="height: 2rem; width: 2px"
        class="my-3 bg-black bg-opacity-50"></div>
      <!-- 数据 -->
      <div class="d-flex align-items-center lh-1">
        <span ref="countUpData" class="fs-2 fw-bold">{{ i.data }}</span>
        <span class="fs-4 ms-2">{{ i.unit }}</span>
      </div>
      <!-- 内容 -->
      <div class="my-2">{{ i.title }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { CountUp } from "countup.js";
  import { ref } from "vue";

  const props = defineProps<{
    data: { icon: string; data: number; unit: string; title: string }[];
  }>();
  const countUpData = ref();
  const startCountUp = () => {
    for (let i = 0, len = countUpData.value.length; i < len; i++) {
      new CountUp(
        countUpData.value[i] as HTMLElement,
        Number(countUpData.value[i]?.innerHTML.replace(/,/g, "")),
        {
          duration: 5,
          useEasing: false,
        }
      ).start();
    }
  };
  defineExpose({ startCountUp });
</script>
