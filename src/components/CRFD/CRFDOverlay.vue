<template>
  <div class="overlay" :style="style" @click="dismiss">
    <div
      class="inline-block"
      @mouseenter="mouseInsideSlot = true"
      @mouseleave="mouseInsideSlot = false"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'crfd-overlay',
  props: {
    opacity: {
      type: [String, Number],
      default: 80
    },
    light: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mouseInsideSlot: false
    }
  },
  computed: {
    style() {
      return {
        'background-color': this.light
          ? 'rgba(255 ,255, 255, 0.6)'
          : 'rgba(0 ,0, 0, 0.6)'
      }
    }
  },
  emits: ['dismiss'],
  methods: {
    dismiss() {
      if (this.mouseInsideSlot) return
      this.$emit('dismiss')
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
</style>
