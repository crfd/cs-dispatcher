<script>
import Commander from '@controller/Commander'

export default {
  data() {
    return {
      value: ''
    }
  },
  computed: {
    results() {
      return Commander.search(this.value)
    },
    hasResults() {
      console.dir(this.results)
      return this.results.length > 0
    },
    hasSearchText() {
      return this.value.length > 0
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    clear() {
      this.value = ''
    },
    performAction(command) {
      command.action()
    }
  }
}
</script>

<template>
  <VFlex class="palette" gap="0">
    <HFlex class="top">
      <div class="search-icon">
        <i-crfd-search width="20px" color="black" />
      </div>
      <input
        v-model="value"
        ref="input"
        type="search"
        placeholder="Search..."
      />
      <i-crfd-cancle
        @click="clear"
        width="28px"
        height="28px"
        color="#666"
        class="clear-btn"
        v-if="hasSearchText"
      />
    </HFlex>
    <VFlex gap="1" class="results" v-if="hasResults">
      <TransitionGroup>
        <CRFDCommand
          v-for="command in results"
          :key="command.id"
          :command="command"
          @click="performAction(command)"
        />
      </TransitionGroup>
    </VFlex>
  </VFlex>
</template>

<style lang="scss" scoped>
.palette {
  transform: translateX(-50%);
  @apply absolute left-1/2 top-12 max-h-80 w-4/5 max-w-lg overflow-hidden rounded-lg border-2 border-white/2 bg-white/primary;
}

.top {
  @apply mx-4 py-2;
}

.search-icon {
  flex-basis: 22px;
  width: 22px;
  height: 22px;
}

.results {
  @apply overflow-y-scroll border-t border-t-white/2 px-2 py-2;
}

input {
  @apply h-[28px] w-full overflow-x-scroll bg-transparent py-1 text-lg font-medium text-black/primary outline-none transition-all ease-in-out placeholder:text-black/2;
}

.clear-btn {
  @apply cursor-pointer;
}
</style>
