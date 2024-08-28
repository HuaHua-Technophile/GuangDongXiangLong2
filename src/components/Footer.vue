<template>
  <!-- 页脚,并且两个分层 -->
  <div class="vw-100 overflow-hidden bg-xlxl bg-opacity-75 text-white">
    <div
      class="py-3 mx-auto d-flex flex-column align-items-center"
      style="max-width: 800px">
      <div class="d-flex align-items-center mb-2">
        <span
          class="fs-1"
          style="font-family: QinLiuLiShu; letter-spacing: 13px">
          廣東香龍香料</span
        >
      </div>
      <div class="d-flex align-items-center mb-2">
        <i class="bi bi-geo-alt me-2"></i>
        韶关市浈江区产业转移工业园峰谷路10号内3号厂房
      </div>
      <div class="d-flex align-items-center mb-2">
        <i class="bi bi-telephone me-2"></i>
        0751-6528728
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-envelope-at me-2"></i>
        gdxianglong@126.com
      </div>
    </div>
  </div>
  <!-- 第二层 -->
  <div class="bg-xlxl text-white py-4">
    <div class="container-sm d-flex justify-content-between align-items-center">
      <div>
        版权所有：广东香龙香料有限公司
        <a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          rel="noopener noreferrer"
          class="ms-4 text-white"
          >粤ICP备2024274959号-1</a
        >
      </div>
      <!-- 微博/微信 LOGO -->
      <div>
        <i
          v-for="i in contact"
          :class="i.icon"
          class="border fs-3 d-inline-flex justify-content-center align-items-center me-4"
          style="border-radius: 999px; width: 50px; height: 50px" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  const contact = [
    {
      icon: "bi bi-sina-weibo",
    },
    {
      icon: "bi bi-wechat",
    },
  ];
</script>
