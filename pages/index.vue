<template>
  <div class="container">
    <h1>Home</h1>
    <br />
    <br />
    <br />
    <template v-for="blog in blogs">
      <nuxt-link :key="blog.slug" :to="`/blog/${blog.slug}`">{{blog.title}}</nuxt-link>
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
      blogs: Array<{
        slug: string;
        title: string;
      }>
    } = {
      blogs: []
    }
    return data;
  },
  
  async asyncData(ctx) {
      return {
        blogs: await ctx.$bcms.request({
          url: '/home/data.json'
        })
      };
  },
})
</script>
