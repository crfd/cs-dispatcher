<template>
  <div class="label">
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
    color: {
      type: String,
      default: 'black'
    },
    random: Boolean
  }
}
</script>

<style>
.label {
  @apply m-1 inline-block rounded-full px-2 lowercase;
}
</style>
