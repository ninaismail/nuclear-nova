import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [vue({ appEntrypoint: '/src/pages/_app.ts' }),tailwind()],
  vite: {
    ssr: {
      noExternal: ['@vueuse/motion', 'vue-recaptcha', 'vue3-carousel']
    },
    optimizeDeps: {
      include: ['vue', 'vue-recaptcha', 'vue3-carousel']
    }
  }
});