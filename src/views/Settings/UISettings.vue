<script setup>
import { useSettingsStore } from '@/stores/settingsStore'
import { storeToRefs } from 'pinia'

const store = useSettingsStore()
const { navbar } = storeToRefs(store)
</script>

<template>
  <VFlex class="gap-8">
    <CRFDBox class="box" title="Navigation Bar">
      <p>Customize the look and feel of the navigation bar</p>
      <HFlex>
        <input v-model="navbar.showIcons" type="checkbox" />
        <p>Show Icons</p>
      </HFlex>
      <template #footer-left></template>
      <template #footer-right>
        <CRFDButton flavour="secondary" disabled>Save</CRFDButton>
      </template>
    </CRFDBox>
  </VFlex>
</template>
