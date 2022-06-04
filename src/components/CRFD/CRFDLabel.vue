<template>
  <div class="label" :class="{ lowercase: lowercase }">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'crfd-label',
  props: {
    title: {
      type: String,
      default: 'Unknown'
    },
    lowercase: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.label {
  @apply m-1 inline-block rounded-full  px-2;
}
</style>
