<script lang="ts" setup>
import { computed, Ref, ref } from 'vue'

import { useUsers } from '@/store'

const selected: Ref<number | null> = ref(null)
const search = ref('')
const headers = ref(['Name', 'E-Mail'])
const users = useUsers()

const computedRows = computed(() => {
  return users.value.map(user => {
    return [user.contact.name, user.contact.email]
  })
})

const showDetail = computed(() => {
  return selected.value !== null
})

const selectedUser = computed(() => {
  if (selected.value === null) {
    return null
  } else {
    return users.value[selected.value]
  }
})

const title = computed(() => {
  if (selectedUser.value !== null) {
    return 'User: ' + selectedUser.value.contact.name
  } else {
    return 'All Users'
  }
})

function selectRow(i: number) {
  selected.value = i
}

function back() {
  selected.value = null
}
</script>

<template>
  <CRFDBox :title="title" class="box">
    <VFlex v-if="showDetail">
      <p>{{ selectedUser }}</p>
    </VFlex>
    <VFlex v-else>
      <CRFDInput v-model="search" placeholder="Search" type="search" />

      <DataTable
        :headers="headers"
        :rows="computedRows"
        :search="search"
        class="data-table"
        @select="selectRow"
      />
    </VFlex>

    <template #footer-left>
      <CRFDButton :disabled="!showDetail" flavour="secondary" @click="back">
        Return
      </CRFDButton>
    </template>

    <template #footer-right>
      <CRFDButton :disabled="!showDetail" flavour="primary" disabled>
        Save
      </CRFDButton>
    </template>
  </CRFDBox>
</template>

<style lang="scss" scoped>
.data-table {
  position: relative;
  height: 200px;
}
</style>
