<template>
  <div v-if="isLoading" class="center">
    <crfd-spinner />
  </div>
  <div v-cloak>
    <header>
      <div class="title-wrapper">
        <h1 class="title">
          <span class="title-home-button" @click="push('home')">
            <img src="./assets/logo-leaf.svg" width="28" class="inline-block" />
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
    <div id="content" ref="content">
      <transition name="fade" mode="out-in">
        <router-view v-if="!isLoading"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import CRFDNavbar from './components/CRFDNavbar.vue'
import CRFDSpinner from './components/CRFDSpinner.vue'

export default {
  components: {
    'crfd-navbar': CRFDNavbar,
    'crfd-spinner': CRFDSpinner
  },
  data() {
    return {
      isScrolled: false,
      isLoading: true,
      backButton: false,
      hideIcons: false,
      hideBar: false
    }
  },
  mounted() {
    this.$refs.content.addEventListener('scroll', () => {
      this.isScrolled = this.$refs.content.scrollTop > 0
    })

    this.isLoading = false
  },
  methods: {
    push(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

[v-cloak] {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

html,
body {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  @apply bg-white/1;
}

#content {
  box-sizing: border-box;
  position: absolute;
  width: 100vw;
  height: calc(100vh - 88px);
  overflow-y: scroll;
  z-index: 0;
}

header {
  position: relative;
  @apply border-b-2 border-solid border-white/2 bg-white/primary transition-all ease-in-out;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scroll {
  overflow-y: scroll;
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
