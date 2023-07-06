import { NuxtLink } from '#components';

export default defineNuxtComponent({
  setup() {
    const { data } = useAsyncData(async (ctx) => {
      const templates = await ctx?.$bcms.template.getAll();
      const result =
        templates?.map((e) => {
          return {
            title: e.label,
            slug: e.name,
          };
        }) || [];
      return result;
    });

    return () => (
      <div>
        <NuxtLink href="/">Home</NuxtLink>
        <ul>
          {data.value?.map((item, itemIdx) => (
            <li key={itemIdx}>
              <NuxtLink href={'/' + item.slug}>{item.title}</NuxtLink>
            </li>
          ))}
        </ul>
      </div>
    );
  },
});
