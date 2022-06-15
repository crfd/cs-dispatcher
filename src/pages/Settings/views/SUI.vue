<script setup>
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store'

const { navbar } = storeToRefs(useSettingsStore())
</script>

<template>
  <VBoxLayout>
    <CRFDBox class="box" title="Navigation Bar">
      <p>Customize the look and feel of the navigation bar</p>
      <HFlex>
        <input v-model="navbar.showIcons" type="checkbox" />
        <p>Show Icons</p>
      </HFlex>
    </CRFDBox>
  </VBoxLayout>
</template>
