<template>
  <div
    @click="push('operations')"
    class="indicator"
    :class="{ active: isActive }"
  >
    <div class="pulse-outline" v-if="isActive"></div>
    <span>{{ active }} Active</span>
  </div>
</template>

<script>
export default {
  name: 'crfd-inidcator',
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isActive() {
      return this.active > 0
    }
  },
  methods: {
    push(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style lang="scss" scoped>
.indicator {
  @apply relative m-1 inline-block cursor-pointer rounded-full bg-white/3 px-2.5 py-0.5 text-sm text-black/2;
}

.active {
  @apply bg-red/primary text-white/primary outline outline-0 outline-red/light;
  animation: pulse 10s infinite ease-out;
}

.pulse-outline {
  position: absolute;
  @apply shadow-none;
}

@keyframes pulse {
  90% {
    @apply outline-0 outline-red/light;
  }
  100% {
    @apply outline-[6px] outline-transparent;
  }
}
</style>
