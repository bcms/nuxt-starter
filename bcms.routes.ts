import {
  createBcmsMostServerRoutes,
  createBcmsMostServerRoute,
} from '@becomes/cms-most';

export default createBcmsMostServerRoutes({
  '/home.json': createBcmsMostServerRoute({
    method: 'get',
    async handler({ bcms }) {
      await bcms.template.pull();
      const result = await bcms.template.find(async () => true);
      return result.map((temp) => {
        return {
          title: temp.label,
          slug: '/' + temp.name,
        };
      });
    },
  }),
  '/template/:slug/data.json': createBcmsMostServerRoute({
    method: 'get',
    async handler({ bcms, params }) {
      const res = await bcms.content.entry.find(params.slug, async () => true);
      return res.map((entry) => {
        return {
          title: entry.meta.en.title,
          slug: `/${params.slug}/${entry.meta.en.slug}`,
        };
      });
    },
  }),
  '/template/:template/entry/:entry/data.json': createBcmsMostServerRoute({
    method: 'get',
    async handler({ bcms, params }) {
      return await bcms.content.entry.findOne(
        params.template,
        async e => e.meta.en.slug === params.entry,
      );
    },
  }),
});