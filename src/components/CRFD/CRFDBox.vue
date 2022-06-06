<template>
  <div id="box">
    <h4 class="title">{{ title }}</h4>
    <div class="content">
      <slot />
    </div>
    <HFlex class="footer" v-if="hasFooter">
      <HFlex>
        <slot name="footer-left" />
      </HFlex>
      <div class="spacer"></div>
      <HFlex>
        <slot name="footer-right" />
      </HFlex>
    </HFlex>
  </div>
</template>

<script>
export default {
  name: 'crfd-box',
  props: {
    title: {
      type: String,
      default: 'Box'
    }
  },
  computed: {
    hasFooter() {
      return !!this.$slots['footer-left'] || !!this.$slots['footer-right']
    }
  }
}
</script>

<style lang="scss" scoped>
#box {
  @apply flex flex-col overflow-hidden rounded-lg border border-white/2 bg-white/primary text-left;
}

.spacer {
  flex-grow: 1;
}

.title {
  @apply px-6 pt-4 pb-2 text-xl font-semibold;
}

.content {
  @apply mt-2 flex flex-col gap-3 px-6 pb-4;
}

.footer {
  @apply justify-between border-t border-t-white/2 bg-white/1 py-2 px-6;
}
</style>
