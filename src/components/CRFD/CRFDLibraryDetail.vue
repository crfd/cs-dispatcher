<template>
  <crfd-detail @toggle-extend="extendHandler" :summary="library">
    <p v-if="!libraryData">Loading...</p>
    <div v-else>
      <markdown v-if="description" :value="description" />

      <ul class="mt-2 list-disc pl-4">
        <li>
          <a v-if="homepage" :href="npmHomepage" target="_blank">
            {{ npmHomepage }}
          </a>
        </li>
        <li>
          <a v-if="homepage" :href="homepage" target="_blank">
            {{ homepage }}
          </a>
        </li>
      </ul>

      <crfd-label class="label" v-if="author" :title="'Author: ' + author" />
      <crfd-label class="label" v-if="license" :title="'License: ' + license" />
    </div>

    <p v-if="error" class="text-red/primary">Error: {{ error }}</p>
  </crfd-detail>
</template>

<script>
import { Markdown } from '@components'
import { Detail, Label } from '@crfd'

export default {
  name: 'crfd-library-detail',
  components: {
    Markdown,
    'crfd-detail': Detail,
    'crfd-label': Label
  },
  props: {
    library: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      libraryData: undefined,
      error: undefined
    }
  },
  computed: {
    description() {
      return this.libraryData?.description
    },
    npmHomepage() {
      return 'https://www.npmjs.com/package/' + this.library
    },
    homepage() {
      return this.libraryData?.homepage
    },
    author() {
      return this.libraryData?.author?.name
    },
    license() {
      return this.libraryData?.license
    },
    readme() {
      return this.libraryData?.readme
    }
  },
  methods: {
    extendHandler(isExtended) {
      if (isExtended && !this.libraryData) {
        this.fetchLibraryData()
      }
    },
    fetchLibraryData() {
      fetch('https://registry.npmjs.org/' + this.library)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.libraryData = data
          this.error = undefined
        })
        .catch(error => {
          this.error = error.message
          this.libraryData = undefined
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  @apply mt-5 bg-white/2 text-black/primary;
}

a {
  text-decoration: none;
  @apply text-blue/primary transition-all ease-in-out hover:text-blue/dark;
}
</style>
