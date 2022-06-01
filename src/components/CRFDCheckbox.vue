<template>
  <div class="relative m-1 inline-block">
    <crfd-icon
      v-if="modelValue == true"
      class="checkmark"
      :icon="doneIcon"
      color="white"
      width="13px"
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
import { Done } from '../assets/icons'

import CRFDIcon from './CRFDIcon.vue'

export default {
  name: 'crfd-checkbox',
  components: {
    'crfd-icon': CRFDIcon
  },
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
    return {
      doneIcon: Done
    }
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
  @apply h-5 w-5 cursor-pointer rounded border border-black/primary outline-none transition-all ease-in-out hover:bg-white/2;
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
  pointer-events: none;
  top: 0;
  margin-left: 3px;
  margin-top: -2px;
}
</style>
