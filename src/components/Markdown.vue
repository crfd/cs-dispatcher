<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import snarkdown from 'snarkdown'

// =====
// PROPS
// =====

const props = defineProps({
  value: String
})

const { value } = toRefs(props)

// ========
// COMPUTED
// ========

const markdown = computed(() => {
  return snarkdown(value?.value ?? '')
})
</script>

<template>
  <div id="markdown" v-html="markdown" />
</template>

<style lang="scss" scoped>
#markdown {
  /* https://github.com/vuejs/vue-loader/issues/749 */
  :deep(a) {
    text-decoration: none;
    @apply text-blue/primary transition-all ease-in-out hover:text-blue/dark;
  }

  // TODO: Set Markdown in external SCSS file
  :deep(blockquote) {
    border-left: 1px solid #fff;
    padding-left: 12px;
    margin-left: 1px;
  }
}
</style>
