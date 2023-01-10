<template>
  <div
    class="relative h-screen w-screen"
  >
    <template v-if="image">
      <div class="absolute z-10 bg-cover bg-center" :style="{ 'background-image': `url(${image})` }" />
      <div class="absolute z-20 inset-0 bg-black/20" />
    </template>
    <template v-else>
      <div
        class="absolute z-10 inset-0 bg-gradient-to-tl"
        :style="{
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
          '--tw-gradient-from': bgColorA,
          '--tw-gradient-to': bgColorB,
        }"
      />
    </template>
    <div class="absolute z-30 inset-0 bg-gradient-to-t from-black/50 mix-blend-overlay" />
    <div class="relative z-50 h-full py-[3vh] pl-[5vw] pr-[3vw] drop-shadow text-white">
      <div class="h-2/6" />
      <div class="h-3/6">
        <TextfitContainer
          class="font-semibold"
          :options="{ multiLine: true }"
        >
          {{ title }}
        </TextfitContainer>
      </div>
      <div class="flex items-center h-1/6">
        <div class="mr-[1vw]">
          <img
            class="w-[5vw] rounded-full border-[0.3vw] border-current"
            :src="authorImage"
            alt=""
          >
        </div>
        <div>
          <p class="text-[2vw] font-semibold">{{ author }}</p>
          <p class="text-[1.5vw] font-light">{{ authorMeta }}</p>
        </div>
        <div class="flex-grow" />
        <div>
          <img
            class="w-[5vw] rounded-xl"
            :src="icon"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorHash from 'color-hash'
import getContrastingColor from '../utils/getContrastingColor.js'
import TextfitContainer from './TextfitContainer.vue'
import { ref, computed, onMounted } from 'vue'

const colorHashA = new ColorHash({
  hue: { min: 60, max: 360 },
  saturation: 0.9,
  lightness: 0.3,
})
const colorHashB = new ColorHash({
  hue: { min: 0, max: 300 },
  saturation: 0.6,
  lightness: 0.45,
})
const bgColorA = computed(() => colorHashA.hex(title.value))
const bgColorB = computed(() => colorHashB.hex(title.value))

const title = ref('')
const icon = ref('')
const image = ref('')
const author = ref('')
const authorImage = ref('')
const authorMeta = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  title.value = params.get('title')
  icon.value = params.get('icon')
  image.value = params.get('image')
  author.value = params.get('author')
  authorImage.value = params.get('author-image')
  authorMeta.value = params.get('author-meta')
})
</script>
