<template>
  <div class="content-header" :class="{ 'content-header-border': border }">
    <container center class="container">
      <div>
        <h2 class="content-header-title">{{ title }}</h2>
        <slot name="left" />
      </div>
      <div>
        <slot name="right" />
      </div>
    </container>
    <container center class="container">
      <div>
        <slot name="sub-left" />
      </div>
      <div>
        <slot name="sub-right" />
      </div>
    </container>
  </div>
</template>

<script>
import { Container } from '@hydrogen'

export default {
  name: 'content-header',
  components: { Container },
  props: {
    title: {
      type: String,
      default: 'Unknown'
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    hasSubLeft() {
      return !!this.$slots.subLeft
    },
    hasSubRight() {
      return !!this.$slots.subRight
    },
    hasSub() {
      return this.hasSubLeft || this.hasSubRight
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.content-header {
  @apply w-full bg-white/primary py-6;
}

.content-header-border {
  @apply border-b-2 border-white/2;
}

.container {
  @apply flex place-content-between items-center;
}

.content-header-title {
  @apply text-2xl font-bold;
}
</style>
