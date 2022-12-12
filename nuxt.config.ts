import { createBcmsNuxtConfig } from 'nuxt-plugin-bcms/config';
import bcmsRoutes from './bcms.routes';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: ['axios', '@becomes/cms-client'],
    },
  },
  modules: [
    [
      'nuxt-plugin-bcms',
      createBcmsNuxtConfig({
        cms: {
          origin: process.env.VITE_BCMS_CMS_ORIGIN || '',
          key: {
            id: process.env.VITE_BCMS_API_KEY_ID || '',
            secret: process.env.VITE_BCMS_API_KEY_SECRET || '',
          },
        },
        websiteDomain: 'http://localhost:3000',
        media: {
          download: false,
        },
        server: {
          routes: bcmsRoutes,
          // domain: process.env.VITE_BCMS_MOST_SERVER_DOMAIN || 'localhost',
          // port: parseInt(process.env.VITE_BCMS_MOST_SERVER_PORT || '3001', 10)
        },
      }),
    ],
  ],
});
