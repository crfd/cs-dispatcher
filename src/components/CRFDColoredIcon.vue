<template>
  <div
    ref="icon"
    class="inline-block transition-all"
    :style="{
      mask: `url(${icon}) no-repeat center`,
      maskSize: 'contain',
      '-webkit-mask': `url(${icon}) no-repeat center`,
      '-webkit-mask-size': 'contain',
      backgroundColor: color,
      width,
      height
    }"
  ></div>
</template>

<script>
export default {
  name: 'crfd-colored-icon',
  props: {
    icon: String,
    color: {
      type: String,
      default: 'black'
    },
    width: {
      type: String,
      default: '1.5em'
    },
    height: {
      type: String,
      default: '1.5em'
    }
  }
}
</script>
