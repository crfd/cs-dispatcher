<template>
  <header>
    <div class="title-wrapper">
      <h1 class="title">
        <span class="title-home-button" @click="push('home')">
          <img src="../assets/logo-leaf.svg" width="28" class="inline-block" />
          Confined Space Dispatcher
        </span>
        <span class="ml-2 text-base font-normal">Hide Bar:</span>
        <input
          v-model="hideBar"
          :disabled="$route.meta.hideBar"
          type="checkbox"
        />
        <span class="ml-2 text-base font-normal">Show Back Button:</span>
        <input v-model="backButton" type="checkbox" />
        <span class="ml-2 text-base font-normal">Hide Icons:</span>
        <input v-model="hideIcons" type="checkbox" />
      </h1>
    </div>
    <div class="navbar" :class="{ hide: hideBar || $route.meta.hideBar }">
      <crfd-navbar :back-button="backButton" :hide-icons="hideIcons" />
    </div>
  </header>
</template>

<script>
import { Navbar } from './CRFD'

export default {
  name: 'PageHeader',
  components: {
    'crfd-navbar': Navbar
  },
  data() {
    return {
      hideBar: false,
      backButton: false,
      hideIcons: false
    }
  },
  computed: {},
  methods: {
    push(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  @apply border-b-2 border-solid border-white/2 bg-white/primary transition-all ease-in-out;
}

.title-wrapper {
  position: relative;
  z-index: 5;
}

.title {
  @apply flex items-center gap-2 bg-white/primary px-3 py-3 text-left text-lg font-semibold;
}

.title-home-button {
  @apply flex cursor-pointer items-center gap-2;
}

.navbar {
  position: relative;
  z-index: 1;
  @apply mt-0 transition-all ease-in-out;
}

.navbar.hide {
  @apply mt-[-38px] opacity-0;
}
</style>
