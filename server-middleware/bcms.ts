// import {
//   createBcmsNuxtServerMiddleware,
//   createBcmsNuxtServerMiddlewareHandler
// } from 'nuxt-plugin-bcms/server-middleware'

// export default createBcmsNuxtServerMiddleware({
//   '/home/data.json': createBcmsNuxtServerMiddlewareHandler(async ({ bcms }) => {
//     return await bcms.entry.find('blog', async (e) => {
//       return {
//         title: e.meta.en.title as string,
//         slug: e.meta.en.slug as string
//       }
//     })
//   }),
//   '/blog/:slug/data.json': createBcmsNuxtServerMiddlewareHandler(
//     async ({ bcms, params }) => {
//       return await bcms.entry.findOne('blog', async (item) => {
//         if (item.meta.en.slug === params.slug) {
//           return {
//             title: item.meta.en.title,
//             preview_description: item.meta.en.preview_description
//           }
//         }
//       })
//     }
//   )
// })
