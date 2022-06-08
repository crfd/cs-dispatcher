<script>
import Commander from '@controller/Commander'
import hotkeys from 'hotkeys-js'

export default {
  data() {
    return {
      value: '',
      highlight: 0
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
    },
    highlightedCommand() {
      return this.results[this.highlight]
    }
  },
  mounted() {
    this.$refs.input.focus()

    hotkeys('enter, up, down, tab, esc', (event, handler) => {
      event.preventDefault()

      switch (handler.key) {
        case 'enter':
          this.performAction(this.highlightedCommand)
          break
        case 'up':
          this.previousHighlight()
          break
        case 'down':
          this.nextHighlight()
          break
        case 'tab':
          this.nextHighlight()
          break
        case 'esc':
          this.dismiss()
          break
      }
    })
  },
  methods: {
    dismiss() {
      this.$emit('dismiss')
    },
    clear() {
      this.value = ''
    },
    performAction(command) {
      command.action()
      this.dismiss()
    },
    previousHighlight() {
      this.highlight =
        (this.highlight - 1 + this.results.length) % this.results.length || 0
    },
    nextHighlight() {
      this.highlight = (this.highlight + 1) % this.results.length || 0
    }
  },
  watch: {
    value() {
      this.highlight = 0
    },
    highlight() {
      console.log(this.highlight, this.results.length)
    }
  }
}
</script>

<template>
  <VFlex class="palette" gap="0">
    <HFlex class="top">
      <div class="icon">
        <i-crfd-search width="20px" color="black" />
      </div>
      <input
        v-model="value"
        ref="input"
        type="search"
        placeholder="Search..."
      />
      <div class="clear-btn" @click="clear" v-if="hasSearchText">
        <i-crfd-cancle width="28px" height="28px" />
      </div>
    </HFlex>
    <VFlex gap="2" class="results" v-if="hasResults">
      <CRFDCommand
        v-for="(command, i) in results"
        :key="command.id"
        :command="command"
        @click="performAction(command)"
        :highlight="i === highlight"
      />
    </VFlex>
  </VFlex>
</template>

<style lang="scss" scoped>
.palette {
  transform: translateX(-50%);
  max-height: 70%;
  @apply absolute left-1/2 top-12 w-4/5 max-w-lg overflow-hidden rounded-lg bg-white/primary;
}

.top {
  @apply px-4 pt-3;
}

.icon {
  flex-basis: 22px;
  width: 22px;
  height: 22px;
}

.results {
  @apply overflow-y-scroll border-t border-t-white/2 px-2 py-2;
}

input {
  @apply h-[28px] flex-grow overflow-x-scroll bg-transparent py-1 text-lg font-medium text-black/primary outline-none transition-all ease-in-out placeholder:text-black/2;
}

.clear-btn {
  width: 28px;
  height: 28px;
  @apply cursor-pointer text-black/primary;
}
</style>
