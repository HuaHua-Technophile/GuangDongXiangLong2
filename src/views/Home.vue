<template>
  <VerticalParallaxSwiper>
    <swiper-slide class="w-100 h-100">
      <img
        loading="lazy"
        v-lazy="'/images/Home/Home1.webp'"
        class="w-100 h-100 object-fit-cover position-absolute top-0 left-0"
        style="object-position: center" />
      <div
        class="w-100 position-absolute top-50 text-white SlideTitle"
        style="
          z-index: 2;
          font-size: 4.8rem;
          text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
        ">
        <div class="container lh-1" style="vertical-align: bottom !important">
          <span>美</span> 味生活领导者
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      class="w-100 h-100 d-flex align-items-center justify-content-center fs-1"
      >Slide 3</swiper-slide
    >
    <swiper-slide
      class="w-100 h-100 d-flex align-items-center justify-content-center fs-1"
      >Slide 2</swiper-slide
    >
  </VerticalParallaxSwiper>
</template>
<style lang="scss" scoped>
  .SlideTitle {
    ::before {
      content: "";
      display: block;
      background: white;
      width: 55px;
      height: 15px;
      box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
      position: absolute;
      top: -60px;
      opacity: 0.5;
    }
    span {
      font-size: 6.5rem;
    }
  }
</style>
