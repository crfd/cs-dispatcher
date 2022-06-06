<script>
export default {
  props: {
    command: {
      type: Object,
      required: true
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
      return this.isActive ? '#000' : this.isHovering ? '#000' : '#aaa'
    }
  }
}
</script>

<template>
  <HFlex
    class="command"
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
  @apply cursor-pointer rounded-lg px-4 py-2 font-medium text-black/2 transition-all ease-in-out hover:bg-white/2 hover:text-black/primary active:bg-white/3;
}
</style>
