import type { App } from 'vue';
import { createHead } from '@unhead/vue'
import { MotionPlugin } from '@vueuse/motion'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
export default (app: App) => {
  const head = createHead();
  app.use(head);
  app.use(MotionPlugin);
  app.use(VueRecaptchaPlugin, {
    v2SiteKey: '6LcX3AsqAAAAAKG0sYoZ3G3oQxqvLE8VeXHfnN_P',
  });
};