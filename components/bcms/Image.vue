<template>
  <div class="bcms-img" :class="{ className: className }">
    <picture v-if="parsable">
      <source
        :srcSet="`/media/${opsParsed}${deconstructedSrc.firstPart}-${sizeIndex}.webp`"
      />
      <source
        :srcSet="`/media/${opsParsed}${deconstructedSrc.firstPart}-${sizeIndex}.${deconstructedSrc.lastPart}`"
      />
      <img
        :class="className"
        :style="imgStyle"
        ref="imageElement"
        :onClick="onClick"
        draggable="false"
        :src="src"
        :alt="alt"
        :title="alt"
      />
    </picture>
    <img
      v-else
      :class="className"
      :style="imgStyle"
      ref="imageElement"
      :onClick="onClick"
      draggable="false"
      :src="src"
      :alt="alt"
      :title="alt"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import {
  BCMSImageService,
  BCMSImageDeconstructedSrc
} from '@becomes/cms-most/front'

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
    additionalStyle: {
      type: Object,
      default: {},
      required: true
    },
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
  data() {
    return {
      sizeIndex: process.env.NODE_ENV === 'development' ? -1 : 0,
      imgStyle: {
        ...this.additionalStyle
        // opacity: opacity,
        // transition: 'opacity 0.3s ease',
      }
    }
  },
  computed: {
    deconstructedSrc(): BCMSImageDeconstructedSrc {
      return BCMSImageService.deconstructSrc(this.src)
    },
    parsable(): boolean {
      return BCMSImageService.parsable(this.deconstructedSrc.lastPart)
    },
    opsParsed(): string {
      return BCMSImageService.parseOptions(this.options)
    }
  },
  mounted() {
    const ref = this.$refs.imageElement as HTMLImageElement

    if (this.parsable) {
      if (process.env.NODE_ENV === 'development') {
        BCMSImageService.require({
          deconstructedSrc: this.deconstructedSrc,
          element: ref,
          sizeIndex: 0,
          autoMaxWidth: this.autoMaxWidth,
          options: this.options
        })
          .then((newSizeIndex) => {
            if (ref) {
              if (newSizeIndex !== this.sizeIndex) {
                this.sizeIndex = newSizeIndex
              }
            }
          })
          .catch((e) => {
            console.error(e)
          })
      } else {
        if (ref) {
          const newSizeIndex = BCMSImageService.getSizeIndex(
            ref,
            this.autoMaxWidth,
            this.options
          )
          if (newSizeIndex !== this.sizeIndex) {
            this.sizeIndex = newSizeIndex
          }
        }
      }
      return BCMSImageService.windowResizeSubscribe(() => {
        if (ref) {
          const newSizeIndex = BCMSImageService.getSizeIndex(
            ref,
            this.autoMaxWidth,
            this.options
          )
          if (newSizeIndex !== this.sizeIndex) {
            this.sizeIndex = newSizeIndex
          }
        }
      })
    }
  }
})
</script>

<style>
</style>