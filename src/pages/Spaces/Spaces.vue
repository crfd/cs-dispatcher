<script lang="ts" setup>
import { computed, ref } from 'vue'

import router from '@/router'
import { useSpaces } from '@/store'
import { useDocument } from '@/lib/useCollection'
import { ConfinedSpace } from '@/models'
import { DataTableRow } from '@/models/ui'
import { Filter, Calendar } from '@icons'

// ====
// DATA
// ====

const headers = ref(['#', 'Name', 'Location', 'Description'])
const spaces = useSpaces()

const icons = ref({ Filter, Calendar })

// ========
// COMPUTED
// ========

const computedRows = computed(() => {
  return spaces.value.map((space, i) => {
    return new DataTableRow([
      space.id.slice(0, 8),
      space.name,
      '/',
      space.description
    ])
  })
})

// =======
// METHODS
// =======

function push(name: string) {
  router.push({ name })
}

function selectionHandler(index: number) {
  const space = spaces.value[index]
  router.push({ name: 'operation', params: { id: space.id } })
}
</script>

<template>
  <div id="page">
    <SubHeader class="content-header" title="Spaces">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton disabled flavour="secondary">Edit</CRFDButton>
        <CRFDButton @click="push('space-new')">Create</CRFDButton>
      </template>
      <template v-slot:sub-left>
        <CRFDModifier
          disabled
          title="Filter"
          :icon="icons.Filter"
          flavour="inactive"
        />
      </template>
      <template v-slot:sub-right></template>
    </SubHeader>

    <div class="white-table-header"></div>
    <Container center>
      <DataTable
        class="data-table"
        :headers="headers"
        :rows="computedRows"
        @select="selectionHandler"
      />
    </Container>
  </div>
</template>

<style lang="scss" scoped>
#page {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.content-header {
  padding-bottom: 0 !important;
}

.white-table-header {
  position: absolute;
  top: 98px;
  height: 49px;
  width: 100%;
  border-bottom: 2px solid;
  @apply border-b-white/2 bg-white/primary;
}
</style>
