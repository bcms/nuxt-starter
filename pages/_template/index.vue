<template>
  <div class="container">
    <h1>Home</h1>
    <br />
    <br />
    <br />
    <template v-for="entry in entries">
      <nuxt-link :key="entry.slug" :to="`${entry.slug}`">{{entry.title}}
      <br />
        
      </nuxt-link>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const data: {
      entries: Array<{
        slug: string;
        title: string;
      }>
    } = {
      entries: []
    }
    return data;
  },
  
  async asyncData(ctx) {
    const templateName = ctx.route.params.template;
    const entries = await ctx.$bcms.entry.getAll({
      template: templateName,
    })
    return {
      entries: entries.map(e => {
        return {
          slug: `/${templateName}/${e.meta.en.slug}`,
          title: e.meta.en.title,
        }
      })
    }
    // const result = await ctx.$bcms.template.getAll();
    //   return {
    //     templates: result.map(e => {
    //       return {
    //         slug: '/' + e.name,
    //         title: e.label
    //       }
    //     })
    //   };
  },
})
</script>

