<template>
  <button
    @click="clickHandler"
    @mousedown="active = true"
    @mouseup="active = false"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :disabled="disabled"
    :class="classes"
  >
    <div class="flex justify-center space-x-0.5">
      <crfd-colored-icon v-if="icon" width="16px" :icon="icon" :color="color" />
      {{ title }}
      <span>
        {{ title }}
      </span>
      <span>
        <slot />
      </span>
    </div>
    <!-- {{ color }} - {{ state }} -->
  </button>
</template>

<script>
import CRFDColoredIconVue from './CRFDColoredIcon.vue'

export default {
  name: 'crfd-button',
  components: {
    'crfd-colored-icon': CRFDColoredIconVue
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    flavour: {
      type: String,
      default: 'primary' // primary, secondary, cirtical
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hover: false,
      active: false,
      iconColors: {
        default: {
          primary: '#fff',
          secondary: '#000',
          critical: '#fff'
        },
        hover: {
          primary: '#000',
          secondary: '#000',
          critical: '#fff'
        },
        active: {
          primary: '#000',
          secondary: '#000',
          critical: '#e93731'
        },
        disabled: {
          primary: '#fff',
          secondary: '#666',
          critical: '#fff'
        }
      }
    }
  },
  computed: {
    classes() {
      return {
        [this.flavour]: true
      }
    },
    hasIcon() {
      return this.icon !== ''
    },
    state() {
      if (this.disabled) return 'disabled'
      else if (!this.hover && !this.active) return 'default'
      else if (this.hover && !this.active) return 'hover'
      else if (this.active) return 'active'
    },
    color() {
      return this.iconColors[this.state][this.flavour]
    }
  },
  emits: ['click'],
  methods: {
    clickHandler() {
      if (this.disabled) return
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
button {
  box-sizing: border-box;
  @apply m-1 inline-block cursor-pointer rounded border border-black/primary bg-black/primary px-3 py-1.5 font-medium text-white/primary transition-all ease-in-out hover:border-black/primary hover:bg-white/primary hover:text-black/primary  active:border-black/primary active:bg-white/2 active:text-black/primary disabled:cursor-not-allowed disabled:border-white/2 disabled:bg-white/2 disabled:text-black/2;
}

button.secondary {
  @apply border-white/2 bg-white/primary text-black/primary hover:border-black/primary hover:bg-white/primary active:border-black/primary active:bg-white/2 disabled:border-white/2 disabled:bg-white/2 disabled:text-black/2;
}

button.critical {
  @apply border-red/primary bg-red/primary uppercase text-white/primary hover:border-red/dark hover:bg-red/dark active:border-red/primary active:bg-white/primary active:text-red/primary disabled:border-white/2 disabled:bg-white/2 disabled:text-black/2;
}
</style>
