<script lang="ts" setup>
/**
 * The ElementPreview Component is used as a preview box for other components.
 * It gets used to display information about a certain component and gets used
 * on the component library page. It has a build in selection field to switch
 * between different predefined component styles.
 */

import { computed, toRefs } from 'vue';

// =====
// PROPS
// =====

const props = defineProps({
  title: String,
  modelValue: [String, Number],
  options: Array<any>,
})

const { title, modelValue, options } = toRefs(props)

// ========
// COMPUTED
// ========

const hasOptions = computed(() => {
  return options && options.value && options.value.length > 0;
})

const hasTitle = computed(() => {
  return title && title.value && title.value.length > 0;
})

// ====
// EMIT
// ====

const emit = defineEmits(['update:modelValue'])

// =======
// METHODS
// =======

function updateValue(event: Event) {
  const value = (event.target as HTMLSelectElement)?.value;
  emit('update:modelValue', value)
}
</script>

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
