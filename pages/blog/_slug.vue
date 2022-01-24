<template>
  <div class="container">
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <pre>{{ data }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      data: {}
    }
  },
  async asyncData (ctx) {
    return {data: await ctx.$bcms.entry.get({
      template: 'blog',
      entry: ctx.route.params.slug
    })}
    // return await ctx.$bcms.request<{
    //   title: string;
    //   preview_description: string;
    // }>({url: `/api/bcms/blog/${ctx.route.params.slug}/data.json`})
  },
  methods: {
    imageClick: () => {
      alert('HERE')
    }
  }
})
</script>
