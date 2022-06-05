<template>
  <div class="inline-block p-3">
    <div class="diamond">
      <div class="pixel red">
        <CRFDTooltip
          :text="$t(translationKeys.flammability)"
          position="top"
          class="text"
          color-class="bg-red/primary"
        >
          <p>{{ diamond.flammability }}</p>
        </CRFDTooltip>
      </div>
      <div class="pixel yellow">
        <CRFDTooltip
          :text="$t(translationKeys.reactivity)"
          position="right"
          class="text"
          color-class="bg-yellow/primary"
        >
          <p>{{ diamond.reactivity }}</p>
        </CRFDTooltip>
      </div>
      <div class="pixel blue">
        <CRFDTooltip
          :text="$t(translationKeys.health)"
          position="left"
          class="text"
          color-class="bg-blue/primary"
        >
          <p>{{ diamond.health }}</p>
        </CRFDTooltip>
      </div>
      <div class="pixel white">
        <CRFDTooltip
          :text="$t(translationKeys.specialNotice)"
          position="bottom"
          class="text"
          color-class="bg-white/primary"
          text-color-class="text-black/primary"
          :disabled="diamond.special === ''"
        >
          <p :class="{ 'line-through': diamond.specialNotice === 'W' }">
            {{ diamond.specialNotice }}
          </p>
        </CRFDTooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { HazardDiamond } from '@/models'

export default {
  name: 'crfd-hazard-diamond',
  props: {
    flammability: {
      type: [String, Number],
      default: 0
    },
    health: {
      type: [String, Number],
      default: 0
    },
    reactivity: {
      type: [String, Number],
      default: 0
    },
    special: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    diamond() {
      return new HazardDiamond(
        parseInt(this.flammability),
        parseInt(this.health),
        parseInt(this.reactivity),
        this.special
      )
    },
    translationKeys() {
      return this.diamond.getTranslationKeys()
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.diamond {
  display: grid;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  text-align: center;
  box-sizing: content-box;
  transform: rotate(45deg);
  font-weight: 500;
  font-size: 14px;
  border: 2px solid;
  cursor: default;
  user-select: none;
  @apply border-white/2;
}

.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.pixel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
  @apply text-white/primary;
}

.text {
  height: 100%;
  width: 100%;
  transform: rotate(-45deg);
}

.red {
  border-top-left-radius: 8px;
  @apply bg-red/primary hover:bg-red/dark;
}

.yellow {
  border-top-right-radius: 8px;
  @apply bg-yellow/primary hover:bg-yellow/dark;
}

.blue {
  border-bottom-left-radius: 8px;
  @apply bg-blue/primary hover:bg-blue/dark;
}

.white {
  border-bottom-right-radius: 8px;
  @apply bg-white/primary font-normal text-black/primary hover:bg-white/2;
}
</style>
