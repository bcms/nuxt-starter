import { NuxtLink } from '#components';

export default defineNuxtComponent({
  setup() {
    console.log('HERE')
    const { $bcms } = useNuxtApp();
    const route = useRoute();
    const { data } = useAsyncData(async (ctx) => {
      return await $bcms.entry.getAll({
        template: (route.params.template as string) || '',
      });
    });

    return () => (
      <div>
        <NuxtLink href="/">Home</NuxtLink>
        <ul>
          {data.value?.map((item) => {
            return (
              <li>
                <NuxtLink
                  href={`/${route.params.template}/${item.meta.en.slug}`}
                >
                  {item.meta.en.title}
                </NuxtLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
});
