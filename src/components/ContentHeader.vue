<script lang="ts" setup>
import { toRefs } from 'vue'

// =====
// PROPS
// =====

const props = defineProps({
  title: String,
  border: Boolean
})

const { title, border } = toRefs(props)
</script>

<template>
  <div class="content-header" :class="{ 'content-header-border': border }">
    <Container center class="container">
      <div>
        <h2 class="content-header-title">{{ title }}</h2>
        <slot name="left" />
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </Container>
    <Container center class="container">
      <div>
        <slot name="sub-left" />
      </div>
      <div>
        <slot name="sub-right" />
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.content-header {
  @apply w-full bg-white/primary py-6;
}

.content-header-border {
  @apply border-b-2 border-white/2;
}

.container {
  @apply flex place-content-between items-center;
}

.content-header-title {
  @apply text-2xl font-bold;
}

.right {
  @apply flex gap-3 py-1;
}
</style>
