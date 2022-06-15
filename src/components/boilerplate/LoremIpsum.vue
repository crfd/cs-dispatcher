<script lang="ts" setup>
import { useFetch } from '@vueuse/core'
import { computed, ComputedRef, onMounted, Ref, ref, toRefs } from 'vue'

// =====
// PROPS
// =====

const props = defineProps({
  paragraphs: [Number, String]
})

const { paragraphs } = toRefs(props)

// ====
// DATA
// ====

const text = ref('Loading ...')

// ========
// COMPUTED
// ========

const url = computed(() => {
  return `https://baconipsum.com/api/?type=meat-and-filler&paras=${
    paragraphs?.value ?? 10
  }&format=text`
})

// =========
// LIFECYCLE
// =========

onMounted(async () => {
  try {
    const res = await fetch(url.value)
    text.value = await res.text()
  } catch (e) {
    text.value = (e as Error).message
  }
})
</script>

<template>
  <p>
    {{ text }}
  </p>
</template>
