<script lang="ts" setup>
import { computed, Ref, ref } from 'vue'

import { useUsers } from '@/store'
import { DataTableRow } from '@/models/ui'
import { User } from '@/models'

// ====
// DATA
// ====

/** Get all users stored inside of firebase */
const users = useUsers()

const selectedUser: Ref<User | null> = ref(null)
const headers = ref(['Name', 'E-Mail'])
const search = ref('')

// ========
// COMPUTED
// ========

const computedRows = computed(() => {
  return users.value.map(user => {
    return new DataTableRow([user.contact.name, user.contact.email])
  })
})

const title = computed(() => {
  if (selectedUser.value !== null) {
    return 'User: ' + selectedUser.value.contact.name
  } else {
    return 'All Users'
  }
})

// =======
// METHODS
// =======

function selectionHandler(index: number) {
  selectedUser.value = users.value[index]
}
</script>

<template>
  <CRFDBox :title="title" class="box">
    <VFlex>
      <CRFDInput v-model="search" placeholder="Search" type="search" />

      <DataTable
        :headers="headers"
        :rows="computedRows"
        :search="search"
        class="data-table"
        @select="selectionHandler"
      />
    </VFlex>
  </CRFDBox>
</template>

<style lang="scss" scoped>
.data-table {
  position: relative;
  height: 200px;
}
</style>
