<template>
  <VerticalParallaxSwiper
    ref="swiperOut"
    :centeredSlides="true"
    :swiperslidechange="SwiperOutSlideChange">
    <!-- 首屏大图 -->
    <swiper-slide
      v-lazy:background-image="'/images/AboutUs/AboutUs1.jpg'"
      class="bgimg-center-cover pt-0">
      <div
        class="w-100 h-100 d-flex flex-column text-white position-relative"
        style="
          backdrop-filter: blur(4px);
          text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        ">
        <h1
          class="flex-grow-1 d-flex justify-content-center align-items-center"
          style="font-size: 3rem; letter-spacing: 0.7rem"
          data-swiper-parallax="-600">
          企业概况
        </h1>
        <div
          class="d-flex mx-auto fs-4 mb-3"
          style="max-width: var(--content-max-width)"
          data-swiper-parallax="-300">
          <div
            v-for="(i, index) in arr"
            class="slideChangeBtn transition750 mx-3 cursor-pointer"
            @click="slideChange(index + 1)">
            {{ i }}
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- 香龙香料 -->
    <swiper-slide
      class="d-flex flex-column justify-content-evenly"
      style="padding-top: 4.5rem">
      <SlideTitie data-swiper-parallax="-600">香龙香料</SlideTitie>
      <div
        class="d-grid align-items-center justify-content-around mx-auto"
        style="
          max-width: var(--content-max-width);
          grid-template-columns: repeat(2, 1fr);
          gap: 5rem;
        ">
        <!-- 文案 -->
        <div style="text-indent: 2em">
          <p>
            广东香龙香料有限公司成立于2006年，是香龙集团的核心子公司，总部位于广东省广州市。公司专注于香精香料的研发、生产和销售，为全球客户提供高品质、创新型的香精香料解决方案。
          </p>
          <p>
            香龙香料拥有国家认定的高新技术企业资质，并设有"广东省企业技术中心"。公司在湖北、河南、广东等地设有生物种植基地，总面积约三万亩，确保原料供应的稳定性和高品质。近年来，公司年销售额持续增长，在行业内占据重要地位。公司多次获得行业协会和地方政府颁发的创新奖项，并积极参与行业标准的制定。
          </p>
          <p>
            香龙香料的发展历程可追溯至1996年成立的广州市香龙化工香料有限公司。二十多年来，公司不断创新发展，逐步成长为行业领军企业。特别是近十年，香龙香料积极拓展国际市场，在泰国、印度尼西亚等地设立销售代理，推动业务全球化。目前，公司已发展成为一家集研发、生产、销售于一体的现代化企业集团，业务涵盖烟用香精、食用香精和植物提取物等多个领域，产品广泛应用于烟草、食品、日化等行业。
          </p>
        </div>
        <!-- 图片 -->
        <img
          v-lazy="'/images/AboutUs/AboutUs2.webp'"
          class="company-profile-img w-100 rounded-4 shadow transition750" />
      </div>
    </swiper-slide>
    <!-- 又一个CountUdp动画 -->
    <swiper-slide class="h-auto mb-5">
      <CountUpData
        ref="CountUpDataEl"
        :data="companyData.arr"
        style="width: var(--content-max-width)" />
    </swiper-slide>
    <!-- 发展与战略 -->
    <swiper-slide
      v-lazy:background-image="'/images/AboutUs/AboutUs3.webp'"
      class="bgimg-center-cover pt-0">
      <div
        class="w-100 h-100 d-flex flex-column justify-content-evenly bg-white bg-opacity-50 swiper-slide-pt"
        style="backdrop-filter: blur(10px)">
        <SlideTitie data-swiper-parallax="-600">发展与战略</SlideTitie>
        <div
          class="d-grid justify-content-between mx-auto position-relative"
          style="
            max-width: var(--content-max-width);
            grid-template-columns: repeat(2, auto);
            gap: 1rem 14rem;
          ">
          <!-- 旋转的球 -->
          <img
            v-lazy="'/images/AboutUs/AboutUs4.png'"
            style="width: 18rem; z-index: -1"
            class="rotateBall position-absolute top-50 start-50" />
          <div
            v-for="(i, index) in devStrategyText"
            :data-swiper-parallax="-90 * (index % devStrategyText.length)">
            <span class="fs-7 fw-bold me-1">{{ i.title }}</span>
            <span class="fs-8">{{ i.content }}</span>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- 企业文化 -->
    <swiper-slide
      v-lazy:background-image="'/images/AboutUs/AboutUs5.webp'"
      class="bgimg-center-cover pt-0">
      <div
        class="w-100 h-100 d-flex flex-column justify-content-evenly bg-white bg-opacity-25 swiper-slide-pt"
        style="backdrop-filter: blur(10px)">
        <SlideTitie data-swiper-parallax="-600">企业文化</SlideTitie>
        <div
          class="d-flex align-items-center justify-content-between mx-auto"
          style="width: var(--content-max-width)">
          <div
            v-for="(i, index) in cultureText"
            class="d-flex flex-column align-items-center"
            :data-swiper-parallax="-90 * (index % cultureText.length)">
            <i
              :class="i.icon"
              class="cultureIcon transition750 bg-xlxl text-white d-flex justify-content-center align-items-center rounded-circle"
              style="
                width: 10rem;
                height: 10rem;
                font-size: 4.5rem;
                background-clip: content-box; /* 剪裁到内容区外沿 */
                border: 1.2rem rgba(var(--bs-xlxl-rgb), 0.2) solid;
              "></i>
            <div
              class="text-xlxl fw-bold fs-5 my-3"
              style="text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.2)">
              {{ i.title }}
            </div>
            <div class="fw-bold">
              {{ i.content }}
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- 页脚 -->
    <swiper-slide class="h-auto pt-0">
      <Footer />
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
  import { SwiperContainer } from "swiper/element";
  import companyData from "../data/companyData.json";
  import { ref } from "vue";
  import { Swiper } from "swiper/types";

  const arr = ["香龙香料", "发展与战略", "企业文化"];

  const swiperOut = ref<{ swiperOut: SwiperContainer }>();
  const slideChange = (index: number) => {
    index > 1 ? (index += 1) : null;
    swiperOut.value?.swiperOut.swiper.slideTo(index);
  };

  // 数值动画----------------
  const CountUpDataEl = ref();

  const SwiperOutSlideChange = (e: CustomEvent<[Swiper]>) => {
    // onSlideChange事件会被内层swiper实例触发，莫名其妙？？？，且无法通过event.stopPropagation组织冒泡.于是在最外层再做一次判断来自哪个实例触发
    if (
      e.detail[0] == swiperOut.value?.swiperOut.swiper &&
      e.detail[0].activeIndex == 2
    )
      CountUpDataEl.value.startCountUp();
  };
  // 发展与战略-------------
  const devStrategyText = [
    {
      title: "科技创新",
      content:
        "香龙香料将继续加强研发投入，发挥各研发中心的协同效应，加速新技术的探索与应用，推进技术成果的产业化落地。公司高度重视知识产权保护，致力于打造坚固的技术壁垒，并建立国际化研发管理体系，吸引全球优秀技术人才，为公司持续创新提供强大动力。",
    },
    {
      title: "绿色发展",
      content:
        "公司将在可持续发展和环境保护方面下更大功夫。通过推广绿色生产技术和可再生资源的利用，香龙香料致力于打造环保型企业，提供更加健康、天然的香精香料产品。公司将在绿色产业方面不断探索，为社会和环境带来更多积极影响。",
    },
    {
      title: "全球市场",
      content:
        "香龙香料将继续扩大在全球市场的布局，特别是东南亚、欧美等地区。公司将把握海外市场的增长机会，优化国际业务布局，积累海外拓展经验，提升全球竞争力。未来，香龙香料将加快产业链的国际化发展，构建全球化的市场网络。",
    },
    {
      title: "管理优化",
      content:
        "公司将持续优化内部管理，通过数字化和信息化手段提高运营效率。香龙香料致力于实现全面的数字化转型，提升管理水平和资源整合能力，促进企业规范化、透明化运作。通过数字化工具，公司将提升决策的科学性与效率，为长期发展打下坚实基础。",
    },
    {
      title: "客户导向",
      content:
        "香龙香料将始终以客户需求为导向，提供优质的产品与服务。公司将深入了解市场动态和客户需求，创新产品研发，提升服务质量。通过定制化解决方案和快捷的响应机制，香龙香料将致力于与客户建立长期合作关系，共同推动行业发展。",
    },
    {
      title: "人才培养",
      content:
        "公司视人才为最宝贵的资产，注重员工的培养与发展。香龙香料将通过多种途径提高员工的专业素质和综合能力，营造良好的企业文化，激发员工的创新精神和工作热情。通过人才战略的实施，公司将确保持续的竞争优势和长远的发展动力。",
    },
  ];

  // 企业文化-----------------
  const cultureText = [
    {
      icon: "iconfont icon-qiyeyuanjing",
      title: "愿景",
      content: "香韵缔造美味",
    },
    {
      icon: "iconfont icon-shiming",
      title: "使命",
      content: "创新香料科技，提升生活品质",
    },
    {
      icon: "iconfont icon-wangzhantubiaoji2_huaban1fuben21",
      title: "核心价值观",
      content: "诚信、创新、卓越、共赢",
    },
    {
      icon: "iconfont icon-qiyejingshen",
      title: "企业精神",
      content: "匠心质造，追求卓越",
    },
    {
      icon: "iconfont icon-rencaifuwu",
      title: "人才理念",
      content: "尊重人才，培养专业，激发潜能",
    },
  ];
</script>
<style lang="scss" scoped>
  .slideChangeBtn:hover {
    transform: translate(0px, -5px);
  }
  .company-profile-img:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5) !important;
  }
  @keyframes rotateBall {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  .rotateBall {
    animation: rotateBall 15s linear infinite;
  }

  .cultureIcon:hover {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5) !important;
    border-width: 0.9rem !important;
  }
</style>
