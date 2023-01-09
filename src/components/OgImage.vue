<template>
  <div
    class="h-screen w-screen p-[4vw] bg-gradient-to-tl"
    :style="{
      '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
      '--tw-gradient-from': bgColorA,
      '--tw-gradient-to': bgColorB,
      // 'background-color': bgColor,
      'color': textColor,
    }"
  >
    <div class="relative h-full border-[0.8vw] border-current rounded-3xl py-[5vw] px-[3vw] drop-shadow">
      <div
        v-if="icon"
        class="absolute z-10 -top-[0.4vw] left-1/2 w-[8vw] p-[0.8vw] rounded-xl -translate-x-1/2 -translate-y-1/2"
        :style="{ 'background-color': textColor }"
      >
        <img
          :src="icon"
          alt=""
          class="rounded-lg"
          :style="{ 'color': textColor }"
        >
      </div>
      <TextfitContainer
        class="text-center font-semibold"
        :options="{ multiLine: true }"
      >
        {{ title }}
      </TextfitContainer>
    </div>
  </div>
</template>

<script setup>
import ColorHash from 'color-hash'
import getContrastingColor from '../utils/getContrastingColor.js'
import TextfitContainer from './TextfitContainer.vue'
import { ref, computed, onMounted } from 'vue'

const hashOptions = {
  // saturation: [0.4, 0.6, 0.8],
  // lightness: [0.5, 0.7, 0.8],
  hue: { min: 0, max: 360 },
  saturation: 0.8,
  lightness: 0.4,
}
const colorHashA = new ColorHash({
  ...hashOptions,
  hue: { min: 60, max: 360 },
  saturation: 0.9,
  lightness: 0.3,
  // lightness: 0.8,
})
const colorHashB = new ColorHash({
  ...hashOptions,
  hue: { min: 0, max: 300 },
  saturation: 0.6,
  lightness: 0.45,
  // lightness: 0.95,
})

const title = ref('')
const icon = ref('')
const counter = ref(0)
const bgColorA = computed(() => colorHashA.hex(title.value))
const bgColorB = computed(() => colorHashB.hex(title.value))
const textColor = computed(() => getContrastingColor(bgColorA.value))

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  title.value = params.get('title')
  icon.value = params.get('icon')
})

</script>
