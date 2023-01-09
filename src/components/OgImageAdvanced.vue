<template>
  <div
    class="relative h-screen w-screen bg-cover bg-center"
    :style="{
      'background-image': `url(${image})`,
    }"
  >
    <div class="absolute z-10 inset-0 bg-gradient-to-t from-black/60 to-black/30" />
    <div class="relative z-20 h-full py-[3vh] pl-[5vw] pr-[3vw] drop-shadow text-white">
      <div class="h-2/6">
        <!-- Nothing -->
      </div>
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
          <p class="text-[1.5vw] font-light">{{ length }} read</p>
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
import TextfitContainer from './TextfitContainer.vue'
import { ref, computed, onMounted } from 'vue'

const title = ref('')
const icon = ref('')
const author = ref('')
const authorImage = ref('')
const image = ref('')
const length = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  title.value = params.get('title')
  icon.value = params.get('icon')
  icon.value = params.get('icon')
  author.value = params.get('author')
  authorImage.value = params.get('author-image')
  image.value = params.get('image')
  length.value = params.get('length')
})

</script>
