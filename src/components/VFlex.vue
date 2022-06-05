<template>
  <div class="flex flex-col" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HFlex',
  props: {
    gap: {
      type: Number,
      default: 3
    }
  },
  computed: {
    classes() {
      return {
        [`gap-${this.gap}`]: true
      }
    }
  }
}
</script>
