<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">cms-nuxt-starter-blog</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <pre>{{ data }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { BCMSMostCacheContentItem } from "@becomes/cms-most/types";
import Vue from 'vue'

export default Vue.extend({
  async asyncData(context) {
    return {
      data: await context.$bcms.findOne<any>(
        context.base,
        'blog',
        async (item) => {
          return { createdAt: item.createdAt }
        }
      )
    }
    // console.log(context.$bcms)
    // console.log(
    //   'From asyncData: ',
    //   context.$bcms.findOne('company', '5fcf6b7c201764a3b88fbd15')
    // )
  }
  // fetch(context) {
  //   console.log(
  //     'From fetch: ',
  //     context.$bcms.findOne('company', '5fcf6b7c201764a3b88fbd15')
  //   )
  // },
  // data() {
  //   return {
  //     content: {}
  //   } as State
  // },
  // mounted() {
  //   console.log('From mounted: ', this.$bcms.find('blog'))

  //   console.log(
  //     'From vuex store: ',
  //     this.$store.$bcms.findOne('company', '5fcf6b7c201764a3b88fbd15')
  //   )

  //   this.content = this.$bcms.findOne('company', '5fcf6b7c201764a3b88fbd15')._id
  // }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
