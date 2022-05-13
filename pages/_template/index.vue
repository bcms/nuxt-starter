<template>
  <div class="container">
    <h1>Home</h1>
    <br>
    <br>
    <br>
    <template v-for="entry in entries">
      <nuxt-link :key="entry.slug" :to="`${entry.slug}`">
        {{ entry.title }}
        <br>
      </nuxt-link>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData (ctx) {
    const templateName = ctx.route.params.template;
    return {
      entries: await ctx.$bcms.request({
        url: `/template/${templateName}/data.json`,
      }),
    };
  },
  data () {
    const data: {
      entries: Array<{
        slug: string;
        title: string;
      }>;
    } = {
      entries: [],
    };
    return data;
  },
});
</script>
