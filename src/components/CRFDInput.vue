<template>
  <label :class="{ focus: valueNotEmpty }" for="input">{{ placeholder }}</label>
  <input
    ref="input"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    @input="updateValue"
    @focus="updateFocus(true)"
    @blur="updateFocus(false)"
    @keydown="keyDownHandler"
    :disabled="disabled"
    :class="classes"
  />
</template>

<script>
export default {
  name: 'crfd-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    formatter: {
      type: Function,
      default: (value) => value
    },
    escapable: {
      type: Boolean,
      default: true
    },
    escapeOnEnter: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flavour: String
  },
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    valueNotEmpty() {
      return this.modelValue.length !== 0
    },
    classes() {
      return {
        [this.flavour]: true
      }
    }
  },
  emits: ['update:modelValue', 'update:focused', 'enter', 'escape'],
  methods: {
    updateValue(event) {
      const value = event.target.value
      const formattedValue = this.formatter(value)
      this.$emit('update:modelValue', formattedValue)
    },
    keyDownHandler(event) {
      const keyCode = event.code

      switch (keyCode) {
        case 'Escape': {
          // On safari pressing the escape key will exit full screen mode
          // prevent that by disableing the default behavior
          event.preventDefault()
          this.$emit('escape')
          if (this.escapable) this.blur()
          break
        }
        case 'Enter': {
          this.$emit('enter')
          if (this.escapeOnEnter) this.blur()
          break
        }
        default:
          break
      }
    },
    updateFocus(value) {
      this.isFocused = value
    },
    blur() {
      this.$refs.input.blur()
    },
    clear() {
      this.updateValue('')
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  @apply cursor-text rounded border border-white/3 px-3 py-1.5 text-[15px] font-semibold text-black/primary outline-none transition-all ease-in-out placeholder:font-semibold placeholder:text-black/1 hover:border-white/2 focus:border-black/primary disabled:cursor-not-allowed disabled:bg-white/1 disabled:text-white/3 disabled:placeholder:text-white/3;
}

.icon {
  @apply pl-[34px];

  & label {
    @apply px-[34px];
  }
}

input.success {
  @apply border-green/primary text-green/primary placeholder:text-green/light focus:text-green/primary;
  @apply icon;
  background-image: url('../assets/icons/input-success.svg');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 15px;
}

input.error {
  @apply border-red/primary text-red/primary placeholder:text-red/light focus:text-red/primary;
  @apply icon;
  background-image: url('../assets/icons/input-error.svg');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 15px;
}

input.autofill {
  @apply border-blue/primary text-blue/primary placeholder:text-blue/light focus:text-blue/primary disabled:border-blue/light disabled:text-blue/light disabled:placeholder:text-blue/light;
  @apply icon;
  background-image: url('../assets/icons/input-autofill.svg');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 17px;
}

label {
  @apply absolute mx-[13px] py-[7px] text-[15px] font-semibold text-black/1 opacity-0;
  pointer-events: none;
  transition: all ease-in-out 0.3s;

  &.focus {
    @apply my-[-7px] mx-[9px] bg-white/primary px-1 py-0 text-[10px] text-black/primary opacity-100;
  }
}
</style>
