<script lang="ts" setup>
import { ref } from 'vue'

// ====
// DATA
// ====

const path = ref([
  {
    id: 'general',
    name: 'General'
  },
  {
    id: 'contact',
    name: 'Contact'
  },
  {
    id: 'documents',
    name: 'Documents'
  }
])
</script>

<template>
  <CreationPageLayout
    title="New Contractor"
    :path="path"
    returnPage="contractors"
  >
    <template #general> General </template>
  </CreationPageLayout>
</template>
