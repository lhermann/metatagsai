<template>
  <div>
    <h1 class="text-3xl font-semibold mb-8">
      Your Meta Tags
    </h1>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Tags -->
      <div>
        <pre class="hljs-wrapper"><code class="hljs" v-html="formattedCode" /></pre>
        <div class="flex items-center rounded-b-xl bg-sky-100 p-3">
          <div class="flex-grow">
            Copy the code into your website <code>&lt;head&gt;</code>
          </div>
          <button
            class="rounded bg-white hover:bg-slate-800 hover:text-white h-8 px-4"
            @click="codeToClipboard"
          >
            <FontAwesomeIcon :icon="faCopy" />
            Copy
          </button>
        </div>
      </div>

      <!-- Twitter Preview -->
      <div id="twitter-preview" class="metadata-group__display is-active">
        <h2 class="text-lg font-semibold text-slate-600 mb-3">
          Twitter Preview
        </h2>
        <div class="w-[506px] rounded border border-slate-200 mb-12">
          <div
            class="h-[265px] bg-cover rounded-t"
            :style="{ 'background-image': `url(${image})` }"
          />
          <div class="bg-slate-50 rounded-b border-t py-3 px-4">
            <h3 class="text-sm font-semibold">
              {{ title }}
            </h3>
            <p class="text-sm h-[2.6em] font-light text-slate-700 leading-tight text-ellipsis line-clamp-2 mt-1">
              {{ description }}
            </p>
            <p class="text-sm font-light text-slate-400 mt-1">
              {{ host }}
            </p>
          </div>
        </div>
        <h2 class="text-lg font-semibold text-slate-600 mb-3">
          Title + Description
        </h2>
        <p class="text-sm font-semibold">{{ title }}</p>
        <p class="text-sm font-light text-slate-700">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import hljs from 'highlight.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import 'highlight.js/styles/arduino-light.css'
import axios from 'axios'
// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// Firebase
// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)

const url = ref('')
const title = ref('')
const description = ref('')
const image = ref('')
const date = ref('')
const twitter = ref('')
const author = ref('')
const host = ref('')

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  try {
    const { data } = await axios.get(`/store-temp/${id}.json`)
    console.log(data)
    url.value = data.url
    title.value = data.title
    description.value = data.description140
    image.value = data.image
    twitter.value = data.twitter
    author.value = data.author
    host.value = new URL(data.url).host
  } catch (err) {
    console.error(err)
  }
})

// const url = 'https://staging.stagetimer.io/blog/free-fullscreen-countdown-timer-for-presentations-and-events/'
// const title = 'Free Fullscreen Countdown Timer for Presentations and Events'
// const description = "With Stagetimer's free countdown timer, keep teams on track & on schedule w/ an easy-to-use interface for customizing. Its multiple timer app is great for sharing & coordinating."
// const image = 'https://pub-3b6b2a986373426b9a2ab5f6aeef8800.r2.dev/liz-hermann-002.webp'
// const date = new Date().toISOString()
// const twitter = '@lizmhermann'
// const author = 'Liz Hermann'

const code = computed(() => `<!-- Primary Meta Tags -->
<title>${title.value}</title>
<link rel="canonical" href="${url.value}" />
<meta name="title" content="${title.value}">
<meta name="description" content="${description.value}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url.value}">
<meta property="og:title" content="${title.value}">
<meta property="og:description" content="${description.value}">
<meta property="og:image" content="${image.value}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">
<meta property="article:published_time" content="${date.value}">
<meta property="article:author" content="${author.value}">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${url.value}">
<meta name="twitter:title" content="${title.value}">
<meta name="twitter:description" content="${description.value}">
<meta name="twitter:image" content="${image.value}">
<meta name="twitter:creator" content="${twitter.value}">
`)
const formattedCode = computed(() => hljs.highlight(code.value, { language: 'xml' }).value)

async function codeToClipboard () {
  try {
    await navigator.clipboard.writeText(code.value)
    console.log('Content copied to clipboard')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<style scoped>
.hljs-wrapper :deep(.hljs) {
  @apply bg-sky-50 rounded-t-xl;
}
</style>
