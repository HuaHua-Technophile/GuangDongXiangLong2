<template>
  <div>
    <div class="text-center fs-3 mb-1" style="letter-spacing: 0.2rem">
      <slot></slot>
    </div>
    <div class="text-center" style="letter-spacing: 1.5rem; text-indent: 1.5em">
      香韵缔造美味
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <div
        class="bg-black bg-opacity-25 mx-2"
        style="width: 8.5rem; height: 1.5px"></div>
      <img v-lazy="'/images/LOGO.webp'" style="height: 1.3rem" />
      <div
        class="bg-black bg-opacity-25 mx-2"
        style="width: 8.5rem; height: 1.5px"></div>
    </div>
  </div>
</template>
