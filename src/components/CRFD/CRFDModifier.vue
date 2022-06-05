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
      <CRFDIcon v-if="icon" width="16px" :icon="icon" :color="color" />
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
export default {
  name: 'crfd-button',
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
          button: '#fff',
          inactive: '#ddd',
          applied: '#000'
        },
        hover: {
          button: '#000',
          inactive: '#000',
          applied: '#000'
        },
        active: {
          button: '#000',
          inactive: '#000',
          applied: '#000'
        },
        disabled: {
          button: '#ddd',
          inactive: '#ddd',
          applied: '#ddd'
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
      else return 'default'
    },
    color() {
      return this.iconColors[this.state][this.flavour] || '#fff'
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
  @apply m-1 cursor-pointer rounded-full border border-black/primary bg-black/primary px-[8px] py-[1px] text-[15px] text-white/primary transition-all ease-in-out hover:border-black/primary hover:bg-white/primary hover:text-black/primary active:bg-white/2 disabled:cursor-not-allowed disabled:border-white/3 disabled:bg-white/1 disabled:text-white/3 disabled:hover:opacity-100;
}

button.inactive {
  @apply border-white/2 bg-white/primary text-black/1 hover:border-black/primary hover:bg-white/primary hover:text-black/primary hover:opacity-100 active:border-black/primary active:bg-white/2 active:opacity-100 disabled:cursor-not-allowed  disabled:bg-white/1 disabled:text-white/3 disabled:hover:border-white/2 disabled:hover:opacity-100;
}

button.applied {
  @apply border-black/primary bg-white/primary text-black/primary hover:border-white/3 hover:text-black/primary hover:opacity-100 active:bg-white/2  active:text-black/primary active:opacity-100 disabled:cursor-not-allowed disabled:border-white/3 disabled:bg-white/1 disabled:text-white/3 disabled:hover:opacity-100;
}
</style>
