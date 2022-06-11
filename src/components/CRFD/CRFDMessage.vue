<template>
  <div
    ref="notification"
    class="notification animate"
    :class="notificationClass"
  >
    <div
      class="bar"
      :style="{ ...autoDismissBarAnimationDuration }"
      :class="barClass"
    />
    <HFlex class="content">
      {{ message.text }}
      <Spacer />
      <i-crfd-cancle
        class="cursor-pointer text-white/primary"
        @click="dismiss"
      />
    </HFlex>
  </div>
</template>

<script>
import MessageType from '@/models/UI/MessageType'

export default {
  props: {
    dismissable: {
      type: Boolean,
      default: true
    },
    message: {
      type: Object,
      required: true
    }
  },
  mounted() {
    if (this.hasAutoDismiss) {
      setTimeout(() => {
        this.dismiss()
      }, this.durationMS)
    }
  },
  computed: {
    durationS() {
      return parseInt(this.message.autoDismiss)
    },
    durationMS() {
      return this.durationS * 1000
    },
    hasAutoDismiss() {
      return this.durationS > 0
    },
    flavour() {
      return [MessageType[this.message.type].toLowerCase()]
    },
    notificationClass() {
      return {
        [this.flavour]: true,
        autoDismiss: this.hasAutoDismiss
      }
    },
    barClass() {
      return {
        [this.flavour === 'default' ? 'bar-light' : 'bar-dark']: true
      }
    },
    autoDismissBarAnimationDuration() {
      return {
        animationDuration: `${this.durationS}s`
      }
    }
  },
  emits: ['dismiss'],
  methods: {
    dismiss() {
      console.log('dismissing')
      this.$refs.notification.classList.add('animate-out')
      setTimeout(() => {
        this.$emit('dismiss')
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  @apply relative overflow-hidden rounded-lg border-2 border-black/1 bg-black/primary font-bold text-white/primary shadow-xl;
}

.notification.animate {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.notification.animate-out {
  animation: fadeOut 0.5s ease-in-out forwards;
}

.notification.success {
  @apply border-2 border-green/light bg-green/primary text-white/primary;
}

.notification.error {
  @apply border-2 border-red/light bg-red/primary text-white/primary;
}

.notification.warning {
  @apply border-2 border-yellow/light bg-yellow/primary text-white/primary;
}

.notification.info {
  @apply border-2 border-blue/light bg-blue/primary text-white/primary;
}

.content {
  @apply py-2 px-6;
}

.bar {
  animation-name: timebar;
  animation-timing-function: linear;
  animation-direction: forwards;
  @apply absolute h-full;
}

.bar-light {
  opacity: 30%;
  @apply bg-white/primary;
}

.bar-dark {
  opacity: 10%;
  @apply bg-black/primary;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes timebar {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
