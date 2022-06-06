<template>
  <header>
    <div class="title-wrapper">
      <h1 class="title">
        <span class="title-home-button" @click="push('home')">
          <img src="@assets/logo-leaf.svg" width="28" class="inline-block" />
          Confined Space Dispatcher
        </span>
        <span class="ml-2 text-base font-normal">Hide Icons:</span>
        <input v-model="hideIcons" type="checkbox" />
        <div class="spacer"></div>
        <p class="text-sm text-red/primary">⚠️ Under Development</p>
        <CRFDTooltip text="CMD+K" position="left">
          <div @click="$emit('search')" class="search-btn">
            <i-crfd-search width="20px" height="20px" color="black" />
          </div>
        </CRFDTooltip>
      </h1>
    </div>
    <div class="navbar" :class="{ hide: hideBar || $route.meta.hideBar }">
      <CRFDNavbar :hide-icons="hideIcons" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
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

.spacer {
  flex-grow: 1;
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

.search-btn {
  width: 36px;
  height: 36px;
  padding: 8px;
  @apply mx-4 cursor-pointer overflow-hidden rounded-full bg-transparent transition-all ease-in-out hover:bg-white/2 active:bg-white/3;
}
</style>
