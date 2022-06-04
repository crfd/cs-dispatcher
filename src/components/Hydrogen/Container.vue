<template>
  <div class="container" :style="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    width: {
      type: String,
      default: '90%'
    },
    maxWidth: {
      type: String,
      default: '840px'
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    combineObjects(...objects) {
      return objects.reduce((obj, item) => {
        return {
          ...obj,
          ...item
        }
      }, {})
    }
  },
  computed: {
    container() {
      return {
        margin: `0 ${this.center ? 'auto' : '0'}`,
        width: this.width,
        maxWidth: this.maxWidth
      }
    }
  }
}
</script>
