<script lang="ts" setup>
import router from '@/router'
import { computed, ref } from 'vue'

const username = ref('')
const password = ref('')

const isValid = computed(() => {
  return username.value.length > 0 && password.value.length > 0
})

function login() {
  console.log('login')
}

function push(name: string) {
  console.log('push', name)
  router.push({ name })
}
</script>

<template>
  <VFlex class="h-full">
    <Spacer />
    <Container maxWidth="320px" center>
      <CRFDBox title="Login">
        <CRFDInput v-model="username" type="username" placeholder="Username" />
        <CRFDInput v-model="password" type="password" placeholder="Password" />

        <template #footer-left>
          <a href="#" class="text-black/2" @click="push('resetPassword')">
            Forgot password?
          </a>
        </template>
        <template #footer-right>
          <CRFDButton :disabled="!isValid" @click="login">Login</CRFDButton>
        </template>
      </CRFDBox>
    </Container>
    <Spacer />
  </VFlex>
</template>
