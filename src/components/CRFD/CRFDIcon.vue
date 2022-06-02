<template>
  <div ref="icon" class="inline-block transition-all" :style="style"></div>
</template>

<script>
export default {
  name: 'crfd-icon',
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
    },
    rotate: {
      type: String,
      default: '0'
    }
  },
  computed: {
    style() {
      return {
        mask: `url(${this.icon}) no-repeat center`,
        maskSize: 'contain',
        '-webkit-mask': `url(${this.icon}) no-repeat center`,
        '-webkit-mask-size': 'contain',
        backgroundColor: this.color,
        width: this.width,
        height: this.height,
        transform: `rotate(${this.rotate}deg)`
      }
    }
  }
}
</script>
