<template>
  <div
    class="h-screen w-screen p-[3%]"
    :style="{
      'background-color': bgColor,
      'color': textColor,
    }"
  >
    <div class="relative h-full border-8 border-current rounded-3xl p-[5%]">
      <div
        v-if="icon"
        class="absolute z-10 top-0 left-1/2 w-[8%] p-[1%] -translate-x-1/2 -translate-y-1/2"
        :style="{ 'background-color': bgColor }"
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

const colorHash = new ColorHash({
  saturation: [0.4, 0.6, 0.8],
  lightness: [0.5, 0.7, 0.8],
})

const title = ref('')
const icon = ref('')
const counter = ref(0)
const bgColor = computed(() => colorHash.hex(title.value))
const textColor = computed(() => getContrastingColor(bgColor.value))

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  title.value = params.get('title')
  icon.value = params.get('icon')
})

</script>
