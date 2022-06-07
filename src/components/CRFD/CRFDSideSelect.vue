<template>
  <VFlex class="side-select">
    <div class="grid grid-flow-row grid-cols-3 justify-center gap-3">
      <template v-for="(option, index) in options" :key="option">
        <CRFDButton
          class="btn"
          :flavour="index === modelValue ? 'link-active-2' : 'link'"
          position="left"
          @click="selectionHandler(index)"
        >
          {{ option }}
        </CRFDButton>
      </template>
    </div>
    <div class="result">
      <slot />
    </div>
  </VFlex>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    selectedOption() {
      return this.options[this.modelValue]
    }
  },
  emits: ['update:modelValue'],
  methods: {
    selectionHandler(index) {
      this.$emit('update:modelValue', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-select {
  @apply justify-start overflow-hidden rounded-lg border border-white/3 p-4;
}

.result {
  @apply mt-2 border-t border-t-white/3 pt-4;
}

.btn {
  @apply cursor-pointer;
}
</style>
