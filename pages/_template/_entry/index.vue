<template>
  <div class="container">
    <template v-if="entry">
      <template v-if="entry.meta.en.cover_image">
        <BCMSImage
          :media="entry.meta.en.cover_image"
          :options="{
            position: 'cover',
            sizes: {
              exec: [
                {
                  width: 350,
                  height: 300
                },
                {
                  width: 600,
                  height: 300
                },
                {
                  width: 900,
                  height: 300
                },
                {
                  width: 1200,
                  height: 300
                },
                {
                  width: 1500,
                  height: 300
                },
                {
                  width: 1920,
                  height: 300
                }
              ]
            }
          }"
        />
      </template>
      <pre><code>{{entry}}</code></pre>
    </template>
  </div>
</template>

<script lang="ts">
import { BCMSEntryParsed } from '@becomes/cms-client/types'
import BCMSImage from 'nuxt-plugin-bcms/components/image.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    BCMSImage
  },
  data() {
    const data: {
      entry: BCMSEntryParsed | null
    } = {
      entry: null
    }
    return data
  },

  async asyncData(ctx) {
    const templateName = ctx.route.params.template
    const entrySlug = ctx.route.params.entry
    const entry = await ctx.$bcms.entry.get({
      template: templateName,
      entry: entrySlug
    })
    return { entry }
  }
})
</script>


