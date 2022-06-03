<template>
  <div class="detail">
    <summary @click="toggle">
      <img
        :src="icons.ArrowCircleRight"
        class="toggle-icon"
        :class="{ active: isExpended }"
      />
      <span>{{ summary }}</span>
    </summary>
    <div v-if="isExpended" class="detail-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { Icon } from '@crfd'
import { ArrowCircleRight } from '@icons'

export default {
  name: 'crfd-detail',
  components: {
    'crfd-icon': Icon
  },
  props: {
    summary: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isExpended: false,
      icons: {
        ArrowCircleRight
      }
    }
  },
  computed: {},
  methods: {
    toggle() {
      this.isExpended = !this.isExpended
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  display: block;
  list-style: none;
  @apply w-full cursor-pointer rounded-md border border-white/3 px-3 py-1.5 text-left text-[15px] text-black/primary outline-none transition-all ease-in-out;
}

summary {
  display: flex;
  align-items: center;
}

.detail-content {
  @apply px-1 pt-4 pb-2;
}

.toggle-icon {
  width: 18px;
  height: 18px;
  @apply mr-2 transition-all ease-in-out;
}

.active {
  transform: rotate(90deg);
}
</style>
