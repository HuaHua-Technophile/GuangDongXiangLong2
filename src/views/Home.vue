<template>
  <VerticalParallaxSwiper
    ref="swiperOut"
    :swiperslidechange="SwiperOutSlideChange">
    <!-- 首屏大图轮播 -->
    <swiper-slide class="w-100 h-100 overflow-hidden pt-0">
      <FadeChangeSwiper ref="fadeChangeSwiper" class="w-100 h-100">
        <swiper-slide
          v-for="i in firstSlide"
          :title="i.title"
          :bg="i.bg"
          v-lazy:background-image="i.bg"
          class="bgimg-center-cover">
          <div
            class="SlideTitle position-absolute top-50 w-100"
            data-swiper-parallax="-600"
            style="left: 20%">
            <div
              v-html="i.title"
              class="text-white"
              style="
                font-size: 3.5rem;
                text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
              "></div>
          </div>
        </swiper-slide>
      </FadeChangeSwiper>
    </swiper-slide>
    <!-- 媒体中心 -->
    <swiper-slide class="MediaNews d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">媒体中心</SlideTitie>
      <!-- 内容 -->
      <div
        class="d-grid align-items-center mx-auto"
        style="
          max-width: var(--content-max-width);
          grid-template-columns: repeat(2, 1fr);
          gap: 5rem;
        ">
        <!-- 左边大图 -->
        <div data-swiper-parallax="-400">
          <component
            :is="allNews[0].id ? RouterLink : 'a'"
            :to="
              allNews[0].id
                ? { name: '新闻详情', params: { id: allNews[0].id } }
                : undefined
            "
            :href="allNews[0].url ? allNews[0].url : undefined"
            :target="allNews[0].url ? '_blank' : undefined"
            rel="noopener noreferrer"
            class="text-black text-decoration-none">
            <img
              v-lazy="allNews[0].img"
              class="w-100 mb-3 mediaBigImg transition750 rounded-3 shadow"
              style="max-height: 20rem" />
            <div
              class="title transition500 fw-bold mb-3 opacity-75"
              style="font-size: 1.08rem">
              {{ allNews[0].title }}
            </div>
            <el-text line-clamp="2">
              {{ allNews[0].content[0] }}
            </el-text>
          </component>
        </div>
        <!-- 右边列表排列3个 -->
        <div data-swiper-parallax="-200">
          <template v-for="(i, index) in allNews.slice(0, 3)">
            <component
              :is="i.id ? RouterLink : 'a'"
              :to="
                i.id ? { name: '新闻详情', params: { id: i.id } } : undefined
              "
              :href="i.url ? i.url : undefined"
              :target="i.url ? '_blank' : undefined"
              rel="noopener noreferrer"
              class="d-flex align-items-center text-black text-decoration-none px-4 cursor-pointer"
              :class="[index < 2 ? 'dividing-line' : '']">
              <div
                class="bg-xlxl me-4 flex-shrink-0 d-flex flex-column align-items-center justify-content-center text-white"
                style="width: 5rem; height: 6rem">
                <div>{{ monthAbbreviation(i.date.slice(5, 7)) }}</div>
                <div
                  class="bg-white bg-opacity-50 my-2"
                  style="width: 3rem; height: 1px"></div>
                <div class="fs-3">{{ i.date.slice(8, 10) }}</div>
              </div>
              <div class="opacity-75">
                <div
                  class="fw-bold mb-3 title transition500"
                  style="font-size: 1.08rem">
                  {{ i.title }}
                </div>
                <el-text line-clamp="2">
                  {{ i.content[0] }}
                </el-text>
              </div>
            </component>
          </template>
        </div>
      </div>
    </swiper-slide>
    <!-- 产业和技术 -->
    <swiper-slide
      v-lazy:background-image="'/images/Home/Labs1.webp'"
      class="pt-0">
      <div
        style="backdrop-filter: blur(10px)"
        class="w-100 h-100 d-flex flex-column justify-content-evenly swiper-slide-pt">
        <SlideTitie data-swiper-parallax="-600">产业&技术</SlideTitie>
        <!-- 分类 -->
        <div
          class="d-flex justify-content-around align-items-center mx-auto"
          style="width: var(--content-max-width)"
          data-swiper-parallax="-300">
          <div
            v-for="(i, index) in industryAndTechnology"
            class="industryAndTechnologyIcon transition1000 shadow bg-xlxl text-white d-flex align-items-center justify-content-center animate__animated animate__pulse animate__infinite"
            :class="[i.icon]"
            style="
              width: 16rem;
              height: 16rem;
              font-size: 7rem;
              border-radius: 999rem;
              background-clip: content-box; /* 剪裁到内容区外沿 */
              border: 2rem rgba(255, 255, 255, 0.5) solid;
            "
            :style="[
              index == 0
                ? '--animate-duration: 3s;'
                : index == 1
                ? '--animate-duration: 4s;'
                : '--animate-duration: 5s;',
            ]">
            <div
              class="position-absolute top-100 start-50 translate-middle-x transition1000 fs-3 text-nowrap mt-5"
              style="text-shadow: 0 0 3px rgba(0, 0, 0, 0.5)">
              {{ i.title }}
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- 企业概览 -->
    <swiper-slide class="d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">企业概览</SlideTitie>
      <div
        class="mx-auto fs-5"
        style="text-indent: 2.5rem; max-width: var(--content-max-width)"
        data-swiper-parallax="-400">
        广东香龙香料有限公司是一家专业从事香精香料研发、生产和销售的高新技术企业。公司成立于2006年，是香龙集团的核心子公司。我们的业务涵盖烟用香精、食用香精和植物提取物等领域，产品广泛应用于烟草、食品、日化等行业。凭借强大的研发实力、先进的生产设备和完善的质量管理体系，香龙香料已成为行业内的领军企业。我们致力于为客户提供高品质、创新型的香精香料解决方案，推动行业可持续发展。
      </div>
      <CountUpData
        ref="CountUpDataEl"
        :data="companyData.arr"
        style="width: var(--content-max-width)"
        data-swiper-parallax="-200" />
    </swiper-slide>
    <!-- 页脚 -->
    <swiper-slide class="h-auto pt-0">
      <Footer />
    </swiper-slide>
  </VerticalParallaxSwiper>
</template>
<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { SwiperContainer } from "swiper/element";
import { onMounted, ref } from "vue";
import mediaNews from "../data/MediaNews.json";
import companyNews from "../data/CompanyNews.json";
import { Swiper } from "swiper/types";
import companyData from "../data/companyData.json";
//首屏数据------------------
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
const fadeChangeSwiper = ref<{ swiperContainer: SwiperContainer }>();
onMounted(() => {
  fadeChangeSwiper.value?.swiperContainer.initialize();
});
// 获取全部新闻------------
// 媒体中心------------------
const allNews: {
  id?: number;
  url?: string;
  img: string;
  date: string;
  title: string;
  content: string[];
}[] = [...mediaNews.data, ...companyNews.data].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// 月份转换-----------
const monthAbbreviations = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthAbbreviation = (num: string) => {
  const index = Number(num) - 1;
  return index >= 0 && index < 12 ? monthAbbreviations[index] : "Invalid";
};

// 产业技术--------------
const industryAndTechnology = [
  {
    icon: "iconfont icon-yinliao",
    title: "食用香精",
  },
  {
    icon: "iconfont icon-yancaoyanju",
    title: "烟用香精",
  },
  {
    icon: "iconfont icon-a-3yongliao",
    title: "食品配料",
  },
];

// 企业概览的数据countUp--------------
const CountUpDataEl = ref();
const swiperOut = ref<{ swiperOut: SwiperContainer }>();
const SwiperOutSlideChange = (e: CustomEvent<[Swiper]>) => {
  // onSlideChange事件会被内层swiper实例触发，莫名其妙？？？，且无法通过event.stopPropagation组织冒泡.于是在最外层再做一次判断来自哪个实例触发
  if (
    e.detail[0] == swiperOut.value?.swiperOut.swiper &&
    e.detail[0].activeIndex == 3
  )
    CountUpDataEl.value.startCountUp();
};
</script>
<style lang="scss" scoped>
.SlideTitle {
  & {
    text-indent: -6em;
  }
  &::first-letter {
    font-size: 2em; //两倍原本大小
    margin-right: 1rem;
  }
}
.MediaNews {
  a:hover {
    color: var(--bs-xlxl) !important;
    .title {
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      font-size: 1.15rem !important;
    }
  }
}
.mediaBigImg:hover {
  transform: scale(1.03);
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5) !important;
}
.dividing-line {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
}
.industryAndTechnologyIcon:hover {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5) !important;
  border-width: 1.5rem !important;
}
</style>
