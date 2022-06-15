<script lang="ts" setup>
import { computed, ComputedRef, Ref, ref, toRefs } from 'vue'

import { Success, Error, Autofill } from '@icons'

// =====
// PROPS
// =====

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  flavour: {
    type: String,
    default: 'default'
  },
  noFocus: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  escapable: {
    type: Boolean,
    default: true
  },
  escapeOnEnter: {
    type: Boolean,
    default: false
  },
  formatter: {
    type: Function,
    default: (value: string) => value
  }
})

const {
  modelValue,
  type,
  placeholder,
  escapable,
  escapeOnEnter,
  disabled,
  flavour,
  noFocus,
  required,
  formatter
} = toRefs(props)

// ====
// DATA
// ====

const isFocused = ref(false)
const input: Ref<HTMLInputElement | null> = ref(null) // Get automatically set by Vue

// ========
// COMPUTED
// ========

const isEmpty = computed(() => {
  return modelValue.value === ''
})

const flavourClass = computed(() => {
  return {
    [flavour.value]: true
  }
})

const icon = computed(() => {
  if (flavour.value === 'success') {
    return {
      color: '#0CCE6B',
      icon: Success
    }
  } else if (flavour.value === 'error') {
    return {
      color: '#E93731',
      icon: Error
    }
  } else if (flavour.value === 'autofill') {
    return {
      color: '#0070F3',
      icon: Autofill
    }
  } else {
    return undefined
  }
})

const hasIcon = computed(() => {
  return icon.value !== undefined
})

// =====
// EMITS
// =====

const emit = defineEmits(['update:modelValue', 'enter', 'escape'])

// =======
// METHODS
// =======

function updateHandler(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', formatter.value(value))
}

function blur() {
  input.value?.blur()
}

function keyHandler(event: KeyboardEvent) {
  const key = event.key

  switch (key) {
    case 'Escape':
      /**
       * On safari pressing the escape key will exit full screen mode prevent
       * that by disableing the default behavior
       */
      event.preventDefault()

      /** When escapable is true pressing the escape key will deselect the input */
      if (escapable.value) {
        blur()
      }

      emit('escape')
      break

    case 'Enter':
      blur()
      emit('enter')
      break
  }
}
</script>

<template>
  <div class="container">
    <CRFDIcon
      v-if="hasIcon && !disabled"
      :icon="icon?.icon"
      :color="icon?.color"
      width="20px"
      height="20px"
      class="crfd-icon"
    />
    <HFlex>
      <input
        ref="input"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="updateHandler"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @keydown="keyHandler"
        :disabled="disabled"
        :class="{ ...flavourClass }"
      />
      <i-crfd-asterisk v-if="required" class="required-icon" />
    </HFlex>
    <label
      v-if="!noFocus"
      for="input"
      :class="{ focus: !isEmpty, ...flavourClass, disabled }"
    >
      {{ placeholder }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply relative w-full;
}

input {
  box-sizing: border-box;
  @apply w-full cursor-text rounded-md border border-white/3 px-3 py-1.5 text-[15px] font-medium text-black/primary outline-none transition-all ease-in-out placeholder:font-medium placeholder:text-black/2 hover:border-black/primary focus:border-black/primary disabled:cursor-not-allowed disabled:border-white/3 disabled:bg-white/1 disabled:text-white/3 disabled:placeholder:text-white/3;
}

.icon {
  @apply pl-[34px];

  & label {
    @apply px-[34px];
  }
}

.crfd-icon {
  transform: translateY(-50%);
  @apply absolute top-[7px] left-[9px] z-10;
}

input.success:not(:disabled) {
  @apply border-green/primary text-green/primary placeholder:text-green/light focus:text-green/primary;
  @apply icon;

  & label {
    @apply text-green/primary;
  }
}

input.error:not(:disabled) {
  @apply border-red/primary text-red/primary placeholder:text-red/light focus:text-red/primary;
  @apply icon;

  & label {
    @apply text-red/primary;
  }
}

input.autofill:not(:disabled) {
  @apply border-blue/primary text-blue/primary placeholder:text-blue/light focus:text-blue/primary disabled:border-blue/light disabled:text-blue/light disabled:placeholder:text-blue/light;
  @apply icon;

  & label {
    @apply text-blue/primary;
  }
}

label {
  pointer-events: none;
  @apply absolute top-[7px] left-[12px] text-[15px] text-black/2 opacity-0 transition-all;

  &.focus {
    transform: translateY(-50%);
    @apply top-0 left-[10px] bg-white/primary px-1 text-sm text-black/primary opacity-100;
  }

  &.focus.success {
    @apply text-green/primary;
  }

  &.focus.error {
    @apply text-red/primary;
  }

  &.focus.autofill {
    @apply text-blue/primary;
  }
}

label.disabled {
  color: #ccc !important;
}
</style>
