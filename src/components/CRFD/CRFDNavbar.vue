<template>
  <nav>
    <ul>
      <li
        class="back-button"
        @click="push(backRouteName)"
        :class="{ hide: !backButton }"
      >
        <crfd-icon :icon="icons.ArrowLeft" width="18px" color="black" />
      </li>
      <li
        @click="push(route.name)"
        v-for="route in routes"
        :key="route.name"
        :class="{ active: isActive(route) }"
        :id="'route-' + route.name"
        @mouseenter="mouseEnter(route)"
        @mouseleave="hover = false"
      >
        <crfd-icon
          class="inline-block"
          width="12px"
          v-if="route.meta.icon && !hideIcons"
          :icon="route.meta.icon"
          :color="iconColor(route)"
        />
        {{ route.meta.title }}
      </li>
    </ul>
    <div
      class="indicator"
      :style="{ width: width + 'px', left: offsetLeft + 'px' }"
    ></div>
  </nav>
</template>

<script>
import { Icon } from '@crfd'
import { ArrowLeft } from '@icons'

export default {
  name: 'crfd-navbar',
  components: {
    'crfd-icon': Icon
  },
  props: {
    hideIcons: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      icons: {
        ArrowLeft
      },
      mounted: false,
      width: 0,
      offsetLeft: 10,
      hover: false,
      hoverElementName: '',
      backButtonChanged: false
    }
  },
  computed: {
    hasCustomNavbar() {
      return this.$route.meta.customNavbar !== undefined
    },
    customRouteNames() {
      return this.$route.meta.customNavbar
    },
    routes() {
      if (this.hasCustomNavbar) {
        return this.$router
          .getRoutes()
          .filter((route) => this.customRouteNames.includes(route.name))
          .sort(
            (a, b) =>
              this.customRouteNames.indexOf(a.name) -
              this.customRouteNames.indexOf(b.name)
          )
      } else {
        return this.$router.getRoutes().filter((route) => !route.meta.hidden)
      }
    },
    currentRoute() {
      return this.$route
    },
    activeRouteName() {
      return this.currentRoute.name
    },
    activeElementId() {
      return 'route-' + this.activeRouteName
    },
    activeRef() {
      return document.getElementById(this.activeElementId)
    },
    backButton() {
      return this.$route.meta.back !== undefined
    },
    backRouteName() {
      return this.$route.meta.back || '404'
    }
  },
  mounted() {
    this.mounted = true
    this.updateIndicator()
  },
  methods: {
    push(name) {
      this.$router.push({ name })
    },
    route() {
      return this.$route
    },
    isActive(route) {
      return this.currentRoute.name === route.name
    },
    iconColor(route) {
      if (
        route.name === this.hoverElementName &&
        this.hover &&
        !this.isActive(route)
      ) {
        return '#000'
      }

      return this.isActive(route) ? '#000' : '#aaa'
    },
    updateIndicator() {
      // console.log(this.backButton)
      // console.log(this.backButtonChanged)

      if (!this.activeRef) return
      this.width = this.activeRef.offsetWidth
      this.offsetLeft = this.activeRef.offsetLeft

      if (this.backButton && this.backButtonChanged) {
        this.offsetLeft += 42
      } else if (!this.backButton && this.backButtonChanged) {
        this.offsetLeft -= 42
      }
    },
    mouseEnter(route) {
      this.hover = true
      this.hoverElementName = route.name
    }
  },
  watch: {
    $route(to, from) {
      this.updateIndicator()
    },
    activeRef() {
      this.updateIndicator()
    },
    backButton() {
      this.backButtonChanged = true
      this.updateIndicator()
      this.backButtonChanged = false
    },
    hideIcons() {
      setTimeout(this.updateIndicator(), 5)
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  @apply overflow-x-hidden;
}

ul {
  @apply flex list-none;
}

li {
  @apply mx-3 flex cursor-pointer justify-center gap-2 py-2 text-black/2 transition-all ease-in-out hover:text-black/primary active:text-black/1;
}

li.active {
  @apply text-black/primary;
}

.back-button {
  @apply ml-5 transition-all ease-out;
}

.back-button.hide {
  @apply ml-[-24px] opacity-0;
}

.indicator {
  @apply absolute h-[2px] bg-black/primary transition-all ease-in-out;
}
</style>
