<template>
  <VerticalParallaxSwiper>
    <!-- 首屏 -->
    <swiper-slide
      v-lazy:background-image="'/images/Estate/Estate1.webp'"
      class="d-flex flex-column text-white bgimg-center-cover"
      style="text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)">
      <h1
        class="flex-grow-1 d-flex justify-content-center align-items-center"
        style="font-size: 3rem; letter-spacing: 0.7rem"
        data-swiper-parallax="-600">
        产业&技术
      </h1>
      <div
        class="d-flex mx-auto fs-4 mb-3"
        style="max-width: var(--content-max-width)"
        data-swiper-parallax="-300">
        <RouterLink
          to="/Estate"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          产业板块
        </RouterLink>
        <RouterLink
          to="/RDInnovation"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          研发创新
        </RouterLink>
        <RouterLink
          to="/ProductList"
          class="urlChangeBtn transition750 mx-3 text-white text-decoration-none">
          产品列表
        </RouterLink>
      </div>
    </swiper-slide>
    <!-- 烟用香精 -->
    <swiper-slide class="d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">烟用香精</SlideTitie>
      <div
        class="d-dlex justify-content-center mx-auto"
        style="
          max-width: var(--content-max-width);
          grid-template-columns: repeat(2, 1fr);
          gap: 5rem;
        ">
        <div
          class="mx-auto"
          style="text-indent: 2rem; width: calc(var(--content-max-width) * 0.9)"
          data-swiper-parallax="-300">
          <p>
            广东香龙香料有限公司致力于为全球食品行业提供高品质的食品配料解决方案。我们秉承“创新引领，健康生活”的核心理念，专注于饮料、乳品、烘焙、休闲食品等领域的研发、设计与应用，提供一站式综合解决方案。我们的主要产品涵盖果酱、果粒、果脯、罐头、分子料理等多个系列，种类丰富，品质卓越。
          </p>
          <p>
            香龙香料积极拓展甜味、咸味及功能性食品配料，不断丰富健康天然产品品类。我们的产品广泛应用于膨化食品、面制食品、方便食品、肉制品和休闲小食品等领域。我们特别关注天然提取物的应用，提供包括天然色素、功能性原料、天然甜味剂、天然抗氧化剂在内的多种产品，为食品与饮料、保健与营养品、个人护理品等行业提供全方位解决方案。
          </p>
          <p>
            选择香龙香料，就是选择健康、美味与创新。我们将继续以高标准的质量和卓越的服务，为客户创造更多价值，共同推动食品行业的可持续发展。
          </p>
        </div>
        <img
          v-lazy="'/images/Estate/Estate5.webp'"
          class="EstateImg transition750 w-75 d-block mx-auto rounded-4 shadow object-fit-cover"
          style="aspect-ratio: 10 / 3; object-position: center 70%" />
      </div>
    </swiper-slide>
    <!-- 食品用香精 -->
    <swiper-slide
      v-lazy:background-image="'/images/Estate/Estate3.webp'"
      class="bgimg-center-cover pt-0">
      <div
        class="w-100 h-100 d-flex flex-column justify-content-evenly bg-white bg-opacity-50 swiper-slide-pt">
        <SlideTitie data-swiper-parallax="-600">食品用香精</SlideTitie>
        <div
          class="d-grid align-items-center mx-auto"
          style="
            max-width: var(--content-max-width);
            grid-template-columns: repeat(2, 1fr);
            gap: 5rem;
          ">
          <div style="text-indent: 2rem" data-swiper-parallax="-300">
            <p>
              广东香龙香料有限公司凭借多年积累的技术实力和创新能力，在食品用香精领域处于行业领先地位。
            </p>
            <p>
              我们致力于为全球食品行业提供卓越的香精解决方案，产品涵盖甜味香精、咸味香精等多个品类。我们的香精广泛应用于乳品、饮料、冷饮、糖果、坚果、膨化食品、烘焙、肉制品和休闲食品等领域。
            </p>
            <p>
              香龙香料不断创新，利用先进的研发技术和严格的质量控制，确保每一滴香精都能为产品增添独特的风味和无限的市场竞争力。
            </p>
            <p>
              我们的目标是通过优质的香精产品，帮助客户创造出令人难忘的美味体验，持续引领食品香精行业的发展潮流。
            </p>
          </div>
          <img
            v-lazy="'/images/Estate/Estate4.webp'"
            class="EstateImg transition750 w-100 rounded-4 shadow" />
        </div>
      </div>
    </swiper-slide>
    <!-- 食品配料 -->
    <swiper-slide class="d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">食品配料</SlideTitie>
      <div
        class="d-grid align-items-center mx-auto"
        style="
          max-width: var(--content-max-width);
          grid-template-columns: repeat(2, 1fr);
          gap: 5rem;
        ">
        <img
          v-lazy="'/images/Estate/Estate2.webp'"
          class="EstateImg transition750 w-100 rounded-4 shadow" />
        <div style="text-indent: 2rem" data-swiper-parallax="-300">
          <p>
            广东香龙香料有限公司致力于为全球食品行业提供高品质的食品配料解决方案。我们秉承“创新引领，健康生活”的核心理念，专注于饮料、乳品、烘焙、休闲食品等领域的研发、设计与应用，提供一站式综合解决方案。我们的主要产品涵盖果酱、果粒、果脯、罐头、分子料理等多个系列，种类丰富，品质卓越。
          </p>
          <p>
            香龙香料积极拓展甜味、咸味及功能性食品配料，不断丰富健康天然产品品类。我们的产品广泛应用于膨化食品、面制食品、方便食品、肉制品和休闲小食品等领域。我们特别关注天然提取物的应用，提供包括天然色素、功能性原料、天然甜味剂、天然抗氧化剂在内的多种产品，为食品与饮料、保健与营养品、个人护理品等行业提供全方位解决方案。
          </p>
          <p>
            选择香龙香料，就是选择健康、美味与创新。我们将继续以高标准的质量和卓越的服务，为客户创造更多价值，共同推动食品行业的可持续发展。
          </p>
        </div>
      </div>
    </swiper-slide>
    <!-- 旗下其他企业 -->
    <swiper-slide class="d-flex flex-column justify-content-evenly">
      <SlideTitie data-swiper-parallax="-600">旗下其他企业</SlideTitie>
      <div
        class="d-grid mx-auto"
        style="grid-template-columns: repeat(2, 1fr); gap: 1.5rem 15rem"
        data-swiper-parallax="-300">
        <div
          v-for="i in companys"
          class="SubsidiaryEnterprise transition750 d-flex align-items-center">
          <div
            class="bg-xlxl p-2 rounded-circle me-3"
            style="width: 1rem; height: 1rem"></div>
          <span class="opacity-75"> {{ i }}</span>
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
  const companys = [
    "广东香龙香料有限公司",
    "广东港龙矿业有限公司",
    "广东丰果矿业科技有限公司",
    "广东香龙旅游文化有限公司",
    "广东港龙种养殖开发有限公司",
    "茂名港龙环保有限公司",
    "广东森木林业投资发展有限公司",
    "漳州柚皮王生物技术有限公司",
    "海南港香龙国际贸易有限公司",
    "广东鼎石管理有限公司",
    "茂名港龙环保新材料科技有限公司",
  ];
</script>
<style lang="scss" scoped>
  .urlChangeBtn:hover {
    transform: translate(0px, -5px);
  }
  .EstateImg:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5) !important;
  }
  .SubsidiaryEnterprise:hover {
    transform: translate(-10px, 0px);
    color: var(--bs-xlxl);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
  }
</style>
