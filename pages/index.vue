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
        <BCMSNuxtImage
          :additionalStyle="{
            maxWidth: '1400px',
            width: '100%'
          }"
          :src="data.cover_image"
          :alt="data.title"
          :options="{
            sizes: [
              {
                width: 350,
                height: 250
              },
              {
                width: 600,
                height: 350
              },
              {
                width: 900,
                height: 470
              },
              {
                width: 1200,
                height: 700
              },
              {
                width: 1400,
                height: 700
              }
            ]
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BCMSNuxtImage from '@/components/bcms/Image.vue'

export default Vue.extend({
  components: {
    BCMSNuxtImage
  },
  async asyncData(context) {
    return {
      data: await context.$bcms.findOne('blog', (item: any) => {
        return {
          _id: item._id,
          title: item.meta.en.title,
          cover_image: item.meta.en.cover_image
        } as any
      })
    }
  }
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
