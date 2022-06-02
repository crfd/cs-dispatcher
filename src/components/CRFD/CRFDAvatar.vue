<template>
  <div
    class="avatar"
    :class="classes"
    :style="{ width: width + 'px', height: width + 'px' }"
  >
    <img
      v-if="!loadingError"
      :src="url"
      @error="loadingError = true"
      @mouseenter="hover = true"
      @mouseout="hover = false"
      :style="{ opacity: hover && reveal ? 0.5 : 1 }"
    />
    <p v-if="showInitials || (hover && reveal)">{{ text }}</p>
  </div>
</template>

<script>
import md5 from 'crypto-js/md5'

export default {
  name: 'crfd-avatar',
  props: {
    image: String,
    size: {
      type: String,
      default: 'nm' // sm, nm, lg, xl
    },
    name: {
      type: String,
      default: 'Chandler Bing'
    },
    email: {
      type: String,
      default: ''
    },
    reveal: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loadingError: false,
      hover: false
    }
  },
  computed: {
    width() {
      switch (this.size) {
        case 'sm':
          return 24
        case 'lg':
          return 64
        case 'xl':
          return 128
        default:
          return 34
      }
    },
    initials() {
      return this.name
        .split(' ')
        .map((word) => word[0])
        .join('')
    },
    linebreakName() {
      return this.name.split(' ').join('\n')
    },
    text() {
      return this.size === 'xl' ? this.linebreakName : this.initials
    },
    hashedEmail() {
      return md5(this.email).toString()
    },
    gravatarUrl() {
      const size = this.width * 2
      return `https://www.gravatar.com/avatar/${this.hashedEmail}?s=${size}&d=404`
    },
    url() {
      return this.image || this.gravatarUrl
    },
    showInitials() {
      return (!this.image && !this.email) || this.loadingError
    },
    classes() {
      return {
        [this.size]: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  @apply relative m-1 inline-block overflow-hidden rounded-full bg-black/primary text-center text-white/primary;
}

p {
  @apply absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
}

.sm p {
  @apply text-xs;
}

.lg p {
  @apply text-xl;
}

.xl p {
  @apply text-xl;
}

img {
  object-fit: cover;
  z-index: 5;
}
</style>
