import { BCMSMostConfigBuilder } from "@becomes/cms-most";

export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "cms-nuxt-starter-blog",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
    "@nuxt/typescript-build",
    "nuxt-plugin-bcms"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Config for BCMS
  bcms: BCMSMostConfigBuilder({
    cms: {
      origin: process.env.NUXT_ENV_BCMS_API_ORIGIN,
      key: {
        id: process.env.NUXT_ENV_BCMS_API_KEY,
        secret: process.env.NUXT_ENV_BCMS_API_SECRET
      }
    }
  }),

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
