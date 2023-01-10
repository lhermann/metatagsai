<template>
  <div
    class="relative h-screen w-screen bg-cover bg-center"
    :style="{
      'background-image': `url(${image})`,
    }"
  >
    <div class="absolute z-10 inset-0 bg-black/20" />
    <div class="absolute z-20 inset-0 bg-gradient-to-t from-black/50 mix-blend-overlay" />
    <div class="relative z-50 h-full py-[3vh] pl-[5vw] pr-[3vw] drop-shadow text-white">
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
import TextfitContainer from './TextfitContainer.vue'
import { ref, computed, onMounted } from 'vue'

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

// http://localhost:3000/og-image-2/?title=Introducing+Stagetimer%E2%80%99s+Fullscreen+Timer+View&icon=https%3A%2F%2Fstagetimer.io%2Fapple-touch-icon.png&image=https%3A%2F%2Fdsc.cloud%2Fcodethink%2Fpexels-pixabay-39396-CN4IIxyR.jpg&author=Liz+Hermann&author-image=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1474102629961711624%2FJx-HUZYV_400x400.jpg&author-meta=3+min+read
</script>
