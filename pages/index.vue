<template>
  <div class="container">
    <h1>Home</h1>
    <br />
    <br />
    <br />
    <template v-for="blog in blogs">
      <nuxt-link :key="blog.slug" :to="`/blog/${blog.meta.en.slug}`">{{blog.meta.en.title}}</nuxt-link>
      <br />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type {BlogEntry} from '~/bcms/types-ts/entry/blog'
export default Vue.extend({
  data () {
    const data: {
      blogs: BlogEntry[]
    } = {
      blogs: []
    }
    return data;
  },
  
  async asyncData(ctx) {
    try {
      return {
        blogs: await ctx.$bcms.entry.getAll({
          template: 'blog',
        })
      };
    } catch (error) {
      console.error(error)
    }
  },
})
</script>
