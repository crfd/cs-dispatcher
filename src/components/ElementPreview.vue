<template>
  <div
    class="mx-auto my-4 w-9/12 max-w-lg rounded-lg border-2 border-white/2 bg-white/primary pt-4 pb-2 text-black/primary shadow-sm"
  >
    <h2 v-if="hasTitle" class="py-1 text-2xl font-bold">{{ title }}</h2>
    <select v-if="hasOptions" :value="modelValue" @change="updateValue">
      <option :value="option" v-for="option in options">
        {{ option }}
      </option>
    </select>
    <div class="my-3">
      <Container center>
        <slot></slot>
      </Container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'element-preview',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'Unknown'
    }
  },
  computed: {
    hasOptions() {
      return this.options.length > 0
    },
    hasTitle() {
      return this.title.length > 0
    }
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(event) {
      const value = event.target.value
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
