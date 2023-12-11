import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/landing-page' },
    { path: '/404', component: '@/pages/404' },
  ],
});
