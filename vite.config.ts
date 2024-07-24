import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // https://github.com/nolimits4web/swiper/discussions/7333 Failed to resolve component: swiper-slide and swiper-container
          isCustomElement: (tag) => tag.includes("swiper"),
        },
      },
    }),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  esbuild: {
    target: "es2020",
  },
});
