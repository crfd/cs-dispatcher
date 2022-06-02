<template>
  <div class="card" :class="{ dark: dark }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'crfd-card',
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.card {
  @apply relative mx-auto overflow-hidden rounded-md bg-white/primary p-4 text-black/primary shadow;
}

.dark {
  @apply bg-black/primary text-white/primary;
}
</style>
