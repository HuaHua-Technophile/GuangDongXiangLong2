<template>
  <VerticalParallaxSwiper>
    <!-- 首屏大图 -->
    <swiper-slide
      v-lazy:background-image="'/images/ContactUs/ContactUs1.webp'"
      class="bgimg-center-cover pt-0">
      <div
        class="w-100 h-100 d-flex flex-column text-white position-relative"
        style="text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)">
        <h1
          class="flex-grow-1 d-flex justify-content-center align-items-center"
          style="font-size: 3rem; letter-spacing: 0.7rem"
          data-swiper-parallax="-600">
          联系方式
        </h1>
      </div>
    </swiper-slide>
    <!-- 具体联系方式 -->
    <swiper-slide
      v-lazy:background-image="'/images/ContactUs/ContactUs2.webp'"
      class="bgimg-center-cover d-flex align-items-center">
      <div
        class="mx-auto bg-secondary bg-opacity-25 px-5 py-3 rounded-5 shadow"
        style="
          width: calc(var(--content-max-width) / 1.7);
          backdrop-filter: blur(10px);
        "
        data-swiper-parallax="-200">
        <div class="text-center fs-2 fw-bold" data-swiper-parallax="-250">
          Contact Us
        </div>
        <div class="text-center mb-5 opacity-50" data-swiper-parallax="-300">
          We Look Forward to Hearing from You
        </div>
        <div>
          <div
            v-for="(i, index) in ContactInfo"
            class="d-flex align-items-center mb-3"
            :data-swiper-parallax="-300 - index * 70">
            <div class="flex-shrink-0 fw-bold" style="width: 10rem">
              {{ i.title }}
            </div>
            <div
              class="changeColor ms-4 ps-3 py-3 border-bottom border-3 flex-1 opacity-75 transition750"
              style="flex-grow: 1">
              {{ i.value }}
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  const ContactInfo = [
    {
      title: "Company Address",
      value: "韶关市浈江区产业转移工业园峰谷路10号内3号厂房",
    },
    {
      title: "",
      value:
        "Factory Building No. 3, Inside No. 10 Fenggu Road, Industrial Transfer Park, Zhenjiang District, Shaoguan City",
    },
    {
      title: "Contact Number",
      value: "0751-6528728",
    },
    {
      title: "Phone Number",
      value: "18023656583",
    },
    {
      title: "Email",
      value: "gdxianglong@126.com",
    },
  ];
</script>
<style lang="scss" scoped>
  .changeColor:hover {
    opacity: 1 !important;
    font-size: 1.02rem !important;
    --bs-border-color: var(--bs-xlxl) !important;
  }
</style>
