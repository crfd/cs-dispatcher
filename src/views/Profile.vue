<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { signOut, updateProfile } from 'firebase/auth'

import router from '@/router'
import { auth } from '@/config/firebase'
import { useAuthStore } from '@/store'

const { user } = storeToRefs(useAuthStore())

const isLoading = ref(false)
const displayName = ref(user.value?.displayName ?? '')
const email = ref(user.value?.email ?? '')

function push(name: string) {
  router.push({ name })
}

function logout() {
  signOut(auth)
}

async function save() {
  if (!auth.currentUser) return

  isLoading.value = true

  await updateProfile(auth.currentUser, {
    displayName: displayName.value
  })

  isLoading.value = false
}
</script>

<template>
  <Container maxWidth="360px" class="center">
    <VFlex class="gap-7">
      <CRFDAvatar class="mx-5" size="xl" :email="email" :name="displayName" />
      <CRFDBox title="Profile">
        <HFlex>
          <span>E-Mail:</span>
          <span>{{ email }}</span>
        </HFlex>
        <!-- <CRFDInput type="email" placeholder="E-Mail" v-model="email" /> -->
        <CRFDInput
          type="text"
          placeholder="Name"
          v-model="displayName"
          :disabled="isLoading"
        />

        <template #footer-right>
          <CRFDButton flavour="primary" @click="save" :disabled="isLoading">
            Save
          </CRFDButton>
        </template>
      </CRFDBox>
      <CRFDButton flavour="link" @click="logout">Logout</CRFDButton>
    </VFlex>
  </Container>
</template>
