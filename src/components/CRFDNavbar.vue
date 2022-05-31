<template>
  <nav>
    <ul>
      <li
        @click="push(route.name)"
        v-for="route in routes"
        :key="route.name"
        :class="{ active: isActive(route) }"
        :id="'route-' + route.name"
      >
        {{ route.meta.title }}
      </li>
    </ul>
    <div
      class="indicator"
      :style="{ width: width + 'px', left: offsetLeft + 'px' }"
    ></div>
  </nav>

  {{ activeElementId }}
</template>

<script>
export default {
  name: 'crfd-navbar',
  data() {
    return {
      mounted: false,
      width: 2,
      offsetLeft: 10
    }
  },
  computed: {
    routes() {
      return this.$router.getRoutes().filter((route) => !route.meta.hidden)
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
    isActive(route) {
      return this.currentRoute.path === route.path
    },
    updateIndicator() {
      if (!this.activeRef) return
      this.width = this.activeRef.offsetWidth
      this.offsetLeft = this.activeRef.offsetLeft
    }
  },
  watch: {
    activeRef() {
      this.updateIndicator()
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  @apply flex list-none;
}

li {
  @apply mx-3 cursor-pointer text-black/2 transition-all ease-in-out hover:text-black/primary active:text-black/1;
}

li.active {
  @apply text-black/primary;
}

.indicator {
  @apply absolute h-[2px] rounded-full bg-black/primary;
}
</style>
