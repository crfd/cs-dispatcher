<template>
  <h4 class="title">Licenses</h4>
  <p class="mb-6">
    A huge thanks to the developers of the following open source libraries:
  </p>
  <CRFDLibraryDetail
    class="shadow-sm"
    v-for="dep in deps"
    :key="dep"
    :library="dep"
  />

  <div class="divider"></div>

  <span>Further software and ressources:</span>

  <CRFDDetail summary="Icons8" class="bg-white/primary shadow-sm">
    <Markdown
      value="Many of the icons have been provided by [https://icons8.com](https://icons8.com)"
    />
  </CRFDDetail>

  <CRFDDetail summary="Mapbox" class="bg-white/primary shadow-sm">
    <!-- TODO: Add more attributions -->
    <Markdown
      value="Any map shown inside the application is part of [© Mapbox](https://www.mapbox.com/about/maps/)"
    />
  </CRFDDetail>
</template>

<script>
import packageJson from '@/../package.json'

export default {
  data() {
    return {
      packageJson
    }
  },
  computed: {
    deps() {
      return [
        ...Object.keys(this.packageJson.dependencies),
        ...Object.keys(this.packageJson.devDependencies)
      ].sort((a, b) => {
        // when contains @types move to the end
        if (a.includes('@')) {
          return 1
        } else if (b.includes('@')) {
          return -1
        } else {
          return a.localeCompare(b)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  @apply mt-8 mb-4 h-[2px] rounded bg-white/2;
}
</style>
