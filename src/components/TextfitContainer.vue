<template>
  <div
    :id="`textfit-container-${uniqId}`"
    ref="containerEl"
    class="relative h-full"
  >
    <div
      :id="`textfit-original-${uniqId}`"
      ref="originalEl"
      class="original absolute z-10 transform left-0 w-full"
      :class="{
        'top-0': vAlign === 'top',
        'top-1/2 -translate-y-1/2': vAlign === 'center',
        'bottom-0': vAlign === 'bottom',
      }"
      :style="{ fontSize: fontSize }"
    >
      <slot />
    </div>
    <div
      :id="`textfit-clone-${uniqId}`"
      ref="cloneEl"
      class="clone relative z-0 opacity-0 h-full p-px"
    />
  </div>
</template>

<script setup>
import textfit from 'textfit'
import { v4 as uuidv4 } from 'uuid'
import { ref, computed, nextTick, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  options: { type: Object, default: () => ({}) },
  refit: { type: [Number, String], default: 0 },
  vAlign: {
    type: String,
    default: 'center',
    validate: val => ['top', 'center', 'bottom'].includes(val),
  },
})

const uniqId = 'textfit-' + uuidv4()
const fontSize = ref('0px')
const observer = new ResizeObserver(fit)
const containerEl = ref()
const originalEl = ref()
const cloneEl = ref()

watch(() => props.refit, fit)

onMounted(() => {
  fit()
  if (observer) observer.observe(containerEl.value)
  else window.addEventListener('resize', fit)
})
onBeforeUnmount(() => {
  if (observer) observer.unobserve(containerEl.value)
  else window.removeEventListener('resize', fit)
})

const _options = computed(() => ({
  minFontSize: 3,
  maxFontSize: 9999,
  ...props.options,
}))

// this is a dirty workaround because textfit() replaces the original element thus breaking vue
async function fit () {
  await nextTick()
  if (!originalEl.value || !cloneEl.value) return
  cloneEl.value.innerHTML = originalEl.value.innerHTML
  if (!cloneEl.value.parentElement.clientHeight) return // textfit errors if clientHeight is missing
  cloneEl.value.style.height = cloneEl.value.parentElement.clientHeight + 'px'
  textfit(cloneEl.value, _options.value)
  fontSize.value = cloneEl.value.querySelector('span.textFitted')?.style.fontSize
}
</script>
