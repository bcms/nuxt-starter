<template>
  <div class="container">
    <h1>Home</h1>
    <br />
    <br />
    <br />
    <template v-for="template in templates">
      <nuxt-link :key="template.slug" :to="`${template.slug}`">{{template.title}}

      <br />
      </nuxt-link>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type {BlogEntry} from '~/bcms/types-ts/entry/blog'

export default Vue.extend({
  data () {
    const data: {
      templates: Array<{
        slug: string;
        title: string;
      }>
    } = {
      templates: []
    }
    return data;
  },
  
  async asyncData(ctx) {
    const result = await ctx.$bcms.template.getAll();
      return {
        templates: result.map(e => {
          return {
            slug: '/' + e.name,
            title: e.label
          }
        })
      };
  },
})
</script>
