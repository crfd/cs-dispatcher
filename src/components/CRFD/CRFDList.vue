<script lang="ts" setup>
import { toRefs } from '@vue/reactivity';
import { defineProps } from 'vue'

const props = defineProps({
  headers: Array<string>,
  data: Array<Array<unknown>>
})

const { headers } = toRefs(props)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, ri) in data" :key="ri">
        <td v-for="(cell, ci) in row" :key="ci">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
}

thead {
  @apply border-b border-b-white/2;
}

th {
  @apply py-2 font-medium;
}
</style>
