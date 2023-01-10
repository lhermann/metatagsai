<template>
  <div>
    <h1 class="text-3xl font-semibold mb-8">
      Your Meta Tags
    </h1>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Tags -->
      <div>
        <HighlightJs
          class="hljs-wrapper"
          :code="code"
        />
        <div class="flex items-center rounded-b-xl bg-sky-100 p-3">
          <div class="flex-grow">
            Copy the code into your website <code>&lt;head&gt;</code>
          </div>
          <button class="rounded bg-white hover:bg-slate-800 hover:text-white h-8 px-4">
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
        <div class="w-[506px] rounded border border-slate-200">
          <div
            class="h-[252px] bg-cover rounded-t"
            :style="{ 'background-image': 'url(https://stagetimer.io/assets/stagetimer-preview-v3.jpg)' }"
          />
          <div class="bg-slate-50 rounded-b border-t py-3 px-4">
            <h3 class="text-sm font-semibold">
              Free Fullscreen Countdown Timer for Presentations and Events
            </h3>
            <p class="text-sm h-[2.6em] font-light text-slate-700 leading-tight text-ellipsis line-clamp-2 mt-1">
              With Stagetimer's free countdown timer, keep teams on track &amp; on schedule w/ an easy-to-use interface for customizing. Its multiple timer app is great for sharing &amp; coordinating.
            </p>
            <p class="text-sm font-light text-slate-400 mt-1">
              stagetimer.io
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/arduino-light.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const url = 'https://staging.stagetimer.io/blog/free-fullscreen-countdown-timer-for-presentations-and-events/'
const title = 'Free Fullscreen Countdown Timer for Presentations and Events'
const description = "With Stagetimer's free countdown timer, keep teams on track & on schedule w/ an easy-to-use interface for customizing. Its multiple timer app is great for sharing & coordinating."
const image = "https://stagetimer.io/assets/stagetimer-preview-v3.jpg"
const date = new Date().toISOString()
const twitter = '@lizmhermann'
const author = 'Liz Hermann'

const code = computed(() => `<!-- Primary Meta Tags -->
<title>${title}</title>
<link rel="canonical" href="${url}" />
<meta name="title" content="${title}">
<meta name="description" content="${description}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">
<meta property="article:published_time" content="${date}">
<meta property="article:author" content="${author}">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${url}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">
<meta name="twitter:creator" content="${twitter}">

`)

const HighlightJs = hljsVuePlugin.component
</script>

<style scoped>
.hljs-wrapper :deep(.hljs) {
  @apply bg-sky-50 rounded-t-xl;
}
</style>
