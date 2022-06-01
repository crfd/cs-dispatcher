<template>
  <div class="indicator"></div>
</template>

<script>
export default {
  name: 'crfd-indicator'
}
</script>

<style lang="scss" scoped>
.indicator {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid;
  animation: linear spin 800ms infinite;
  @apply border-black/1 border-b-transparent;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
