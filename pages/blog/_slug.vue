<template>
  <div class="container">
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <template v-if="data">
      <div style="width: 600px;">
        <BCMSImage :media="data.meta.en.authors[0].meta.en.image.src" :options="{
          sizes: {
            exec: [
            {
              width: 300,
              height: 100,
            },
            {
              width: 700,
              height: 300
            }]
          }
        }" />
      </div>
    </template>
    <pre>{{ data }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BCMSImage from 'nuxt-plugin-bcms/components/image.vue';

export default Vue.extend<{
  data: BlogEntry | undefined
}, unknown, unknown, unknown>({
  components: {
    BCMSImage
  },
  data () {
    return {
      data: undefined,
    }
  },
  async asyncData (ctx) {
    // return {data: await ctx.$bcms.entry.get({
    //   template: 'blog',
    //   entry: ctx.route.params.slug
    // })}
    return {data: await ctx.$bcms.request({url: `/blog/${ctx.route.params.slug}/data.json`})}
  },
})
</script>
