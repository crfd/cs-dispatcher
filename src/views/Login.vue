<script lang="ts" setup>
import router from '@/router'
import { useAuthStore } from '@/stores/authStore'
import { FirebaseError } from 'firebase/app'
import { computed, Ref, ref } from 'vue'

const isLoading = ref(false)
const error: Ref<string | undefined> = ref(undefined)
const email = ref('akuhltime@gmail.com')
const password = ref('')

const isValid = computed(() => {
  return email.value.length > 0 && password.value.length > 0
})

function login() {
  if (!isValid.value) return

  isLoading.value = true
  useAuthStore()
    .login(email.value, password.value)
    .then(user => {
      if (user) push('operations')
      else {
        error.value = 'Invalid username or password'
      }

      isLoading.value = false
    })
    .catch(err => {
      const e = err as FirebaseError

      if (e.code === 'auth/user-not-found') {
        error.value = 'Invalid username or password'
      } else {
        error.value = e.message
      }
    })
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
        <p class="text-red/primary" v-if="error">
          {{ error }}
        </p>

        <CRFDInput
          v-model="email"
          type="email"
          placeholder="E-Mail"
          :disabled="isLoading"
        />
        <CRFDInput
          v-model="password"
          type="password"
          placeholder="Password"
          :disabled="isLoading"
        />

        <template #footer-left>
          <a href="#" class="text-black/2" @click="push('resetPassword')">
            Forgot password?
          </a>
        </template>
        <template #footer-right>
          <CRFDButton :disabled="!isValid || isLoading" @click="login"
            >Login</CRFDButton
          >
        </template>
      </CRFDBox>
    </Container>
    <Spacer />
  </VFlex>
</template>
