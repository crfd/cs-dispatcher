<template>
  <div id="markdown" v-html="markdown"></div>
  <div ref="slot">
    <slot />
  </div>
</template>

<script>
import snarkdown from 'snarkdown'

export default {
  name: 'markdown',
  props: {
    value: String,
    slotValue: ''
  },
  computed: {
    markdown: function () {
      return snarkdown(this.value)
    }
  }
}
</script>

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
