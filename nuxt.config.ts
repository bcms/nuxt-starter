import { createBcmsNuxtConfig } from 'nuxt-plugin-bcms/config';
import bcmsRoutes from './bcms.routes';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      bcmsApiOrigin: '',
      bcmsApiKeyId: '',
      bcmsApiKeySecret: '',
      bcmsEnableClientCache: '',
      bcmsClientDebug: '',
      bcmsEntryStatuses: '',
      bcmsMostServerPort: '',
      bcmsMostServerDomain: '',
    },
  },
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
          origin: process.env.BCMS_API_ORIGIN || '',
          key: {
            id: process.env.BCMS_API_KEY || '',
            secret: process.env.BCMS_API_SECRET || '',
          },
        },
        websiteDomain: 'http://localhost:3000',
        media: {
          download: false,
        },
        server: {
          routes: bcmsRoutes,
        },
      }),
    ],
  ],
});
