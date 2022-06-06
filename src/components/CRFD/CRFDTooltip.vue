<template>
  <div class="boundry">
    <div class="tooltip-outer" :class="outerClasses">
      <div class="tooltip" :class="tooltipClasses">
        <Markdown :value="text" />
      </div>
    </div>
    <div @mouseenter="isHovering = true" @mouseleave="isHovering = false">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'crfd-tooltip',
  props: {
    text: {
      type: String,
      default: 'Some Tooltip'
    },
    position: {
      type: String,
      default: 'top' // top, left, right, bottom
    },
    colorClass: {
      type: String,
      default: 'bg-black/primary'
    },
    textColorClass: {
      type: String,
      default: 'text-white/primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isHovering: false
    }
  },
  computed: {
    outerClasses() {
      return {
        hidden: !this.isHovering && !this.disabled,
        [this.position]: true
      }
    },
    tooltipClasses() {
      return {
        [this.colorClass]: true,
        [this.textColorClass]: true
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.boundry {
  position: relative;
  display: inline-block;
}

.tooltip-outer {
  @apply pointer-events-none absolute z-50 block max-w-xs scale-100 py-2 px-4 opacity-100 transition-all ease-in-out;
}

.tooltip {
  @apply w-full rounded-lg py-1 px-3 text-[14px] shadow transition-all ease-in-out;
}

.hidden {
  @apply scale-0 opacity-0;
}

.left {
  left: 0;
  top: 50%;
  @apply translate-x-[-100%] translate-y-[-50%];
}

.right {
  right: 0;
  top: 50%;
  @apply translate-x-[100%] translate-y-[-50%];
}

.top {
  top: 0;
  left: 50%;
  @apply translate-x-[-50%] translate-y-[-100%];
}

.bottom {
  bottom: 0;
  left: 50%;
  @apply translate-x-[-50%] translate-y-[100%];
}
</style>
