<template>
  <!-- 头部 -->
  <header
    class="position-fixed w-100 bg-white bg-opacity-50 shadow"
    style="z-index: 999; backdrop-filter: blur(10px)">
    <div
      class="container d-flex align-items-center justify-content-around"
      style="height: 4.5rem">
      <!-- 公司LOGO -->
      <RouterLink
        to="/"
        class="h-100 py-2 d-flex align-items-center text-decoration-none">
        <img loading="lazy" v-lazy="`/images/LOGO.webp`" class="h-100 me-2" />
        <div
          class="text-xlxl lh-1"
          style="text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3)">
          <div
            class="fs-2 d-flex justify-content-between"
            style="font-family: QinLiuLiShu">
            香<span>龍</span><span>香</span>料
          </div>
          <div class="Capitalized fs-10" style="font-family: Cinzel-Regular">
            <span>F</span>RAGRANT <span>D</span>RAGON <span>C</span>O.
          </div>
        </div>
      </RouterLink>
      <!-- 导航 -->
      <template v-for="i in header">
        <div
          v-if="i.down"
          class="dropdown d-flex align-items-center cursor-pointer fs-5 px-2 position-relative h-100 d-flex align-items-center">
          {{ i.name }}
          <div
            class="position-absolute top-100 start-50 bg-white shadow rounded-bottom transition750 overflow-hidden"
            style="--bs-bg-opacity: 0.8; width: 7.6rem">
            <RouterLink
              v-for="(j, index) in i.down"
              :to="j.path"
              :class="[index == 0 ? 'my-1' : 'mb-1']"
              class="d-block text-decoration-none transition750 text-center rounded py-1">
              {{ j.name }}
            </RouterLink>
          </div>
        </div>
        <RouterLink
          v-else
          :to="i.path"
          class="dropdown d-flex h-100 text-black align-items-center cursor-pointer fs-5 px-2 position-relative text-decoration-none transition750">
          {{ i.name }}
        </RouterLink>
      </template>
    </div>
  </header>
  <RouterView v-slot="{ Component }">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate_faster"
      leave-active-class="animate__animated animate__fadeOut animate_faster">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
<script lang="ts" setup>
  import AboutUs from "./data/AboutUs.json";

  const header = [
    {
      path: "/",
      name: "首页",
    },
    {
      name: "关于我们",
      down: AboutUs.arr,
    },
    {
      name: "产业&技术",
      down: [
        {
          path: "/Estate",
          name: "产业板块",
        },
        {
          path: "/RDInnovation",
          name: "研发创新",
        },
        {
          path: "/ProductList",
          name: "产品列表",
        },
      ],
    },
    {
      name: "媒体中心",
      down: [
        {
          path: "/MediaCenter",
          name: "企业新闻",
        },
        {
          path: "/MediaCenter",
          name: "行业动态",
        },
      ],
    },
    {
      path: "/SustainableDev",
      name: "可持续发展",
    },
    {
      path: "/ContactUs",
      name: "联系方式",
    },
  ];
</script>
<style lang="scss" scoped>
  .Capitalized span {
    font-size: 1.05rem;
  }
  .dropdown {
    &::after {
      content: "";
      position: absolute;
      z-index: -1; //避免遮挡父元素导致Hover失效
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      width: 0%;
      height: 10px;
      background: var(--bs-xlxl);
      transition: 0.8s all; //width
    }
    & > div {
      transform: scaleY(0) translateX(-50%);
      transform-origin: top;
      > a {
        color: black;
        &:hover {
          color: var(--bs-xlxl);
          background: rgba(var(--bs-xlxl-rgb), 0.3);
        }
      }
    }
    &:hover {
      color: var(--bs-xlxl) !important;
      &::after {
        width: 100%;
      }
      & > div {
        transform: scaleY(1) translateX(-50%);
      }
    }
  }
</style>
