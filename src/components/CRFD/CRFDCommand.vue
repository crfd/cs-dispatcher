<script>
export default {
  props: {
    command: {
      type: Object,
      required: true
    },
    highlight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isHovering: false,
      isActive: false
    }
  },
  computed: {
    iconColor() {
      return this.isActive ? '#000' : this.isHovering ? '#000' : '#ccc'
    }
  }
}
</script>

<template>
  <HFlex
    class="command"
    :class="{ highlight: highlight }"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @keydown="isActive = true"
    @keyup="isActive = false"
  >
    <CRFDIcon :icon="command.icon" width="16px" :color="iconColor" />
    <span>{{ command.name }}</span>
  </HFlex>
</template>

<style lang="scss" scoped>
.command {
  @apply cursor-pointer rounded-lg px-4 py-3 font-medium text-black/1 transition-all ease-in-out hover:bg-white/2 hover:text-black/primary active:bg-white/3;
}

.highlight {
  @apply bg-white/2;
}
</style>
