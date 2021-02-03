<template>
  <img ref="imageElement" :src="src" :alt="alt" />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface ImageOptions {
  step?: number
  position?: 'fill'
  quality?: number
  sizes?: Array<{
    width: number
    height?: number
  }>
}

export default Vue.extend({
  name: 'BCMSNuxtImage',
  props: {
    src: {
      type: String,
      default: '',
      required: true
    },
    alt: {
      type: String,
      default: '',
      required: true
    },
    className: {
      type: String,
      default: '',
      required: false
    },
    onClick: {
      type: Function,
      default: () => {},
      required: false
    },
    autoMaxWidth: {
      type: Boolean,
      default: false,
      required: false
    },
    options: {
      type: Object as PropType<ImageOptions>,
      default: {},
      required: false
    }
  },
  mounted() {
    const ref = this.$refs.imageElement as HTMLImageElement

    console.log(this.$props)
  }
})
</script>

<style>
</style>