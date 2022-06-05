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
    <div class="flex justify-center">
      <CRFDIcon
        v-if="icon"
        width="16px"
        :icon="icon"
        :color="color"
        class="icon"
      />
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
      default: 'primary' // primary, secondary, cirtical, link, link-active
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
          critical: '#fff',
          link: '#666',
          'link-active': '#000',
          'link-active-2': '#fff'
        },
        hover: {
          primary: '#000',
          secondary: '#000',
          critical: '#fff',
          link: '#000',
          'link-active': '#000',
          'link-active-2': '#fff'
        },
        active: {
          primary: '#000',
          secondary: '#000',
          critical: '#e93731',
          link: '#000',
          'link-active': '#000',
          'link-active-2': '#fff'
        },
        disabled: {
          primary: '#fff',
          secondary: '#666',
          critical: '#fff',
          link: '#666',
          'link-active': '#000',
          'link-active-2': '#fff'
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
  @apply m-1 inline-block cursor-pointer whitespace-nowrap rounded-md border border-black/primary bg-black/primary px-3 py-1.5 font-medium text-white/primary transition-all ease-in-out hover:border-black/primary hover:bg-white/primary hover:text-black/primary  active:border-black/primary active:bg-white/2 active:text-black/primary disabled:cursor-not-allowed disabled:border-white/2 disabled:bg-white/2 disabled:text-black/2;
}

button.secondary {
  @apply border-white/2 bg-white/primary text-black/primary hover:border-black/primary hover:bg-white/primary active:border-black/primary active:bg-white/2 disabled:border-white/2 disabled:bg-white/2 disabled:text-black/2;
}

button.critical {
  @apply border-red/primary bg-red/primary uppercase text-white/primary hover:border-red/dark hover:bg-red/dark active:border-red/primary active:bg-white/primary active:text-red/primary disabled:border-white/2 disabled:bg-white/2 disabled:text-black/2;
}

button.link {
  @apply border-transparent bg-transparent text-black/2 hover:border-white/2 hover:bg-white/2 hover:text-black/1  active:border-white/3 active:bg-white/3 disabled:text-white/3 disabled:hover:border-transparent disabled:hover:bg-transparent;
}

button.link-active {
  @apply border-transparent bg-transparent text-black/primary hover:border-transparent hover:bg-transparent hover:text-black/primary active:border-white/3 active:bg-white/3 disabled:text-white/3 disabled:hover:border-transparent disabled:hover:bg-transparent;
}

button.link-active-2 {
  @apply border-black/primary bg-black/primary text-white/primary hover:border-black/primary hover:bg-black/primary hover:text-white/primary active:border-black/1 active:bg-black/1 disabled:border-white/2 disabled:bg-white/2 disabled:text-black/2 disabled:hover:border-white/2 disabled:hover:bg-white/2;
}

.icon {
  @apply mr-1;
}
</style>
