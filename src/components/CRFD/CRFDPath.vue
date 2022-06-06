<template>
  <div class="path">
    <p
      class="step"
      :class="{ [getStepState(index)]: true }"
      v-for="(step, index) in path"
    >
      <div class="bullet"></div>
      {{ step }}
    </p>
    <div ref="rail" class="rail"></div>
    <div class="rail progress" :style="progressRailStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'crfd-path',
  props: {
    path: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isMounted: false
    }
  },
  computed: {
    progress() {
      return this.value / this.path.length
    },
    totalHeight() {
      if (!this.isMounted) return 0
      return parseFloat(window.getComputedStyle(this.$refs.rail).height) + 28
    },
    height() {
      return this.totalHeight * this.progress
    },
    progressRailStyle() {
      return {
        height: this.height + 'px'
      }
    }
  },
  methods: {
    getStepState(index) {
      if (index == this.value) {
        return 'active'
      } else if (index < this.value) {
        return 'completed'
      } else {
        return 'disabled'
      }
    }
  },
  mounted() {
    this.isMounted = true
  }
}
</script>

<style lang="scss">
.path {
  text-align: left;
  font-size: 16px;
  @apply relative inline-block text-black/primary transition-all ease-in-out;

  & .disabled {
    @apply text-black/2;
  }
}

.step {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 5;
  font-weight: 500;
  
  &:not(:first-of-type) {
    margin-top: 12px;
  }
}

.bullet {
  margin-right: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  @apply transition-all ease-in-out border-[3px] border-white/primary;
}

.completed .bullet {
  @apply bg-black/primary;
}

.active .bullet {
  @apply bg-blue/primary;
}

.disabled .bullet {
  @apply bg-black/2;
}

.rail {
  width: 3px;
  height: calc(100% - 24px);
  top: 0;
  z-index: 1;
  @apply absolute mx-[6px] my-[12px] rounded-full bg-black/2 transition-all ease-linear;

  &.progress {
    @apply bg-black/primary;
  }
}
</style>
