import { createBcmsNuxtConfig } from 'nuxt-plugin-bcms/module'
import bcmsRoutes from './bcms.routes'

export default {
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms-nuxt-starter-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    '@nuxt/typescript-build'
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
          origin: process.env.BCMS_API_ORIGIN || 'http://localhost:8080',
          key: {
            id: process.env.BCMS_API_KEY || '61e6d049b3cbaa77fdb36f77',
            secret:
              process.env.BCMS_API_SECRET ||
              '931e85ff9a646a72e197d3927c2461a100fe4fc1a7d13ac6614d3730fff85b53'
          }
        },
        websiteDomain: process.env.ORIGIN || 'http://localhost:3000',
        server: {
          routes: bcmsRoutes
          // domain: 'localhost',
          // port: 3000
        }
      })
    ]
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
  build: {}
}
