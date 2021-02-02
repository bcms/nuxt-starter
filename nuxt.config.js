import { BCMSMostConfigBuilder } from '@becomes/cms-most';

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

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-plugin-bcms',
      BCMSMostConfigBuilder({
        cms: {
          origin: process.env.BCMS_API_ORIGIN || 'http://localhost:1280',
          key: {
            id: process.env.BCMS_API_KEY || '5fd1455751d0a91a2c4fd902',
            secret: process.env.BCMS_API_SECRET || 'ac8063f3a6854997cac66f4af09c8026957f85e75b5e65a5c174259b7302345b',
          },
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
  build: {},
};
