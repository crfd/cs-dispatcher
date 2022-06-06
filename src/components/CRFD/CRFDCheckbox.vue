<template>
  <div class="relative m-1 inline-block">
    <i-crfd-done
      v-if="modelValue == true"
      color="white"
      width="13px"
      height="13px"
      class="checkmark"
    />
    <input
      type="checkbox"
      :class="{ checked: modelValue }"
      :value="modelValue"
      @change="updateValue"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  name: 'crfd-checkbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(event) {
      const value = event.target.checked
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  -webkit-appearance: none;
  @apply relative h-5 w-5 cursor-pointer rounded border border-black/primary outline-none transition-all ease-in-out hover:bg-white/2;
}

input:disabled {
  cursor: not-allowed;
  @apply border-white/3 bg-white/3;
}

input.checked {
  @apply bg-black/primary;
}

input:disabled.checked {
  @apply border-white/3 bg-white/3;
}

input:hover.checked:not(:disabled) {
  @apply border-black/1 bg-black/1;
}

.checkmark {
  position: absolute;
  z-index: 5;
  pointer-events: none;
  height: 13px;
  width: 13px;
  top: 3px;
  left: 3px;
}
</style>
