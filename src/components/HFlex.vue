<template>
  <div class="relative flex flex-row items-center" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    gap: {
      type: [String, Number],
      default: 3
    }
  },
  computed: {
    classes() {
      return {
        [`gap-${this.gap.toString()}`]: true
      }
    }
  }
}
</script>
