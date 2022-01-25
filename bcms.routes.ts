import {
  createBcmsMostServerRoutes,
  createBcmsMostServerRoute
} from '@becomes/cms-most'

export default createBcmsMostServerRoutes({
  '/home/data.json': createBcmsMostServerRoute({
    method: 'get',
    async handler({ bcms }) {
      return await bcms.content.entry.find('blog', async (e) => {
        return {
          title: e.meta.en.title,
          slug: e.meta.en.slug
        }
      })
    }
  }),
  '/blog/:slug/data.json': createBcmsMostServerRoute({
    method: 'get',
    async handler({ bcms, params }) {
      return await bcms.content.entry.findOne('blog', async (item) => {
        if (item.meta.en.slug === params.slug) {
          return item;
          return {
            title: item.meta.en.title,
            preview_description: item.meta.en.preview_description
          }
        }
      })
    }
  })
})
