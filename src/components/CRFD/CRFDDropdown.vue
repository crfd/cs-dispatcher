<template>
  <!-- <br />
  didChange: {{ didChange }}
  <br />
  hover: {{ hover }}
  <br />
  listIsFocused: {{ listIsFocused }}
  <br />
  isFocused: {{ isFocused }}
  <br /> -->
  <div class="container">
    <label :class="{ focus: valueNotEmpty }" for="input">
      {{ placeholder }}
    </label>
    <crfd-icon
      class="dropdown-icon"
      :icon="icon"
      width="20px"
      height="20px"
      :color="iconColor"
    />
    <input
      ref="input"
      :type="type"
      v-model="inputValue"
      :placeholder="placeholder"
      @input="didChange = true"
      @focus="updateFocus(true)"
      @blur="updateFocus(false)"
      @keydown="keyDownHandler"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :disabled="disabled"
      :class="classes"
    />
    <ul
      ref="list"
      class="list"
      @mouseenter="listIsFocused = true"
      @mouseleave="listIsFocused = false"
      v-if="isFocused && !noResult"
    >
      <li v-for="item in filteredOptions" @click="selectValue(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import CRFDIcon from './CRFDIcon.vue'
import { ArrowCircleRight } from '../../assets/icons'

export default {
  name: 'crfd-input',
  components: {
    'crfd-icon': CRFDIcon
  },
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
    flavour: String,
    options: {
      type: Array,
      default: () => [
        'Banana',
        'Apple',
        'Orange',
        'Pear',
        'Kiwi',
        'Grapes',
        'Blueberry',
        'Melon',
        'Kokos',
        'Pineapple',
        'Cherry',
        'Strawberry',
        'Lemon'
      ]
    },
    sort: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      inputValue: '',
      isFocused: false,
      listIsFocused: false,
      hover: false,
      icon: ArrowCircleRight,
      didChange: false
    }
  },
  mounted() {
    if (this.modelValue) {
      this.inputValue = this.modelValue
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
    },
    iconColor() {
      if (this.isFocused) return '#000'
      else if (this.disabled) return '#ddd'
      else if (this.hover) return '#444'
      else return '#aaa'
    },
    filteredOptions() {
      var a
      if (this.didChange) {
        a = this.options.filter((option) =>
          option.toLowerCase().includes(this.inputValue.toLowerCase())
        )
      } else {
        a = this.options
      }

      if (this.sort) return a.sort()
      else return a
    },
    noResult() {
      return this.filteredOptions.length === 0
    }
  },
  emits: ['update:modelValue', 'update:focused', 'enter', 'escape'],
  watch: {
    modelValue() {
      this.inputValue = this.modelValue
    }
  },
  methods: {
    selectValue(value) {
      this.inputValue = value
      this.$emit('update:modelValue', value)
      this.$emit('enter')
      this.blur()
    },
    updateValue(value) {
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
          if (this.escapable) {
            this.updateFocus(false)
            this.blur()
          }
          break
        }
        case 'Enter': {
          this.$emit('enter')
          if (this.escapeOnEnter) {
            this.updateFocus(false)
            this.blur()
          }
          break
        }
        default:
          break
      }
    },
    updateFocus(value) {
      if (!this.listIsFocused) {
        this.isFocused = value

        if (this.didChange && !value && !this.inOptions(this.inputValue)) {
          // console.log('not in options')
          this.updateValue('')
        } else if (this.didChange && !value) {
          // console.log('in options')
          this.updateValue(this.inputValue)
        }
      }
    },
    blur() {
      this.$refs.list.style.display = 'none'
      this.$refs.input.blur()
      this.isFocused = false
      this.didChange = false
      this.listIsFocused = false
    },
    inOptions(value) {
      return this.options.includes(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  @apply relative my-2 inline-block w-3/4;
}

input {
  box-sizing: border-box;
  @apply w-full cursor-pointer rounded border border-white/3 px-3 py-1.5 text-[15px] font-medium text-black/primary outline-none transition-all ease-in-out placeholder:font-medium placeholder:text-black/2 hover:border-black/primary focus:border-black/primary disabled:cursor-not-allowed disabled:border-white/3 disabled:bg-white/1 disabled:text-white/3 disabled:placeholder:text-white/3;
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
  @apply absolute mx-[13px] py-[7px] text-[15px] font-medium text-black/1 opacity-0;
  pointer-events: none;
  transition: all ease-in-out 0.3s;

  &.focus {
    @apply my-[-7px] mx-[9px] bg-white/primary px-1 py-0 text-[10px] text-black/primary opacity-100;
  }
}

.dropdown-icon {
  @apply absolute right-2 block;
  top: 50%;
  transform: translateY(-50%) rotate(90deg) !important;
  pointer-events: none;
}

ul {
  z-index: 100;
  @apply absolute max-h-44 w-full translate-y-1 overflow-hidden overflow-y-scroll rounded border border-black/primary bg-white/primary text-left text-black/primary shadow-lg;
}

li {
  @apply cursor-pointer border-b border-white/2 py-2 px-3 transition-all ease-in-out hover:border-black/primary hover:bg-black/primary hover:text-white/primary;
}

li:last-child {
  @apply border-none;
}
</style>