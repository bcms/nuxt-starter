<template>
  <div class="container">
    <h1>Home</h1>
    <br>
    <br>
    <br>
    <template v-for="template in templates">
      <nuxt-link :key="template.slug" :to="`${template.slug}`">
        {{ template.title }}

        <br>
      </nuxt-link>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData(ctx) {
    const templates = await ctx.$bcms.template.getAll();
    return {
      templates: templates.map((temp) => {
        return {
          slug: temp.name,
          title: temp.label,
        };
      }),
    };
    /**
     * Optionally you can use `bcms.routes.ts` to mask access
     * to the BCMS and provide faster page loading.
     */
    // return {
    //   templates: await ctx.$bcms.request({
    //     url: '/home.json',
    //   }),
    // };
  },
  data() {
    const data: {
      templates: Array<{
        slug: string;
        title: string;
      }>;
    } = {
      templates: [],
    };
    return data;
  },
});
</script>
