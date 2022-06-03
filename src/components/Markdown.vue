<template>
  <div id="markdown" v-html="markdown"></div>
</template>

<script>
import snarkdown from 'snarkdown'

export default {
  name: 'markdown',
  props: {
    value: String
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
  ::v-deep a {
    /* Style */
    @apply text-blue/primary transition-all ease-in-out;

    /* Text */
    text-decoration: none;

    &:hover {
      /* Style */
      @apply text-blue/dark;
    }
  }

  // TODO: Set Markdown in external SCSS file
  ::v-deep blockquote {
    border-left: 1px solid #fff;
    padding-left: 12px;
    margin-left: 1px;
  }
}
</style>
