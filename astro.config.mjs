import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue({ appEntrypoint: '/src/pages/_app.ts' }),tailwind()],
  vite: {
    ssr: {
      noExternal: ['@vueuse/motion', 'vue-recaptcha']
    },
    optimizeDeps: {
      include: ['vue', 'vue-recaptcha']
    }
  }
});