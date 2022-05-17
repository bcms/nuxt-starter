import { BCMSImageConfig } from 'nuxt-plugin-bcms/components';
import { createBcmsNuxtConfig } from 'nuxt-plugin-bcms/module';
import bcmsRoutes from './bcms.routes';

BCMSImageConfig.localImageProcessing = true;

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms-nuxt-starter-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    test: 'test',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  // serverMiddleware: [
  //   {
  //     path: '/api/bcms',
  //     handler: '~/server-middleware/bcms.ts'
  //   }
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-plugin-bcms',
      createBcmsNuxtConfig({
        cms: {
          origin:
            process.env.BCMS_API_ORIGIN ||
            'https://becomes-starter-projects.yourbcms.com',
          key: {
            id: process.env.BCMS_API_KEY || '622b70b377a890368d3602d4',
            secret:
              process.env.BCMS_API_SECRET ||
              '46c7de04efc90eb0196608548b8f0157a2edda12c982ef2469b4ed60a6582d94',
          },
        },
        websiteDomain: process.env.ORIGIN || 'http://localhost:3000',
        server: {
          routes: bcmsRoutes,
          // domain: 'localhost',
          // port: 3000
        },
      }),
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Config for BCMS
  // bcms: BCMSMostConfigBuilder({
  //   cms: {
  //     origin: process.env.NUXT_ENV_BCMS_API_ORIGIN,
  //     key: {
  //       id: process.env.NUXT_ENV_BCMS_API_KEY,
  //       secret: process.env.NUXT_ENV_BCMS_API_SECRET
  //     }
  //   }
  // }),

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // eslint-disable-next-line space-before-function-paren
    extend(config) {
      config.resolve.alias.vue = 'vue/dist/vue.common';
    },
  },
};
