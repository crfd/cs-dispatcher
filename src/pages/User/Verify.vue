<script lang="ts" setup>
import { computed, onMounted, Ref, ref } from 'vue'
import { FirebaseError } from 'firebase/app'

import router from '@/router'
import { useAuthStore } from '@/store'
import { getQueryParams } from '@/lib/queryParams'
import { storeToRefs } from 'pinia'

// ====
// DATA
// ====

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)

const email = ref('none')
const token = ref('')

const newPassword = ref('')
const newPasswordConfirm = ref('')

const phone = ref('')

const street = ref('')
const zip = ref('')
const city = ref('Campbell River')
const state = ref('British Columbia')
const country = ref('Canada')

const error: Ref<string | undefined> = ref(undefined)
const isLoading = ref(false)

// ========
// COMPUTED
// ========

const hasParams = computed(() => {
  return email.value !== '' || token.value !== ''
})

const isValid = computed(() => {
  return (
    newPassword.value === newPasswordConfirm.value &&
    newPassword.value.length >= 6 &&
    phone.value.length > 0 &&
    street.value.length > 0 &&
    zip.value.length > 0 &&
    city.value.length > 0 &&
    state.value.length > 0 &&
    country.value.length > 0
  )
})

// =======
// METHODS
// =======

function push(name: string) {
  router.push({ name })
}

function logout() {
  authStore.logout()
}

async function confirm() {
  if (!isValid.value) return

  isLoading.value = true

  try {
    await authStore.register(
      email.value,
      token.value,
      newPassword.value,
      phone.value,
      street.value,
      zip.value,
      city.value,
      state.value,
      country.value
    )

    push('home')
  } catch (e) {
    const error = e as Error
  }

  isLoading.value = false
}

// =========
// LIFECYCLE
// =========

onMounted(async () => {
  const params = getQueryParams()
  console.dir(params)

  if (params.email && params.token) {
    email.value = params.email
    token.value = params.token
  }
})
</script>

<template>
  <VFlex class="h-full">
    <Spacer />
    <Container maxWidth="480px" center>
      <VFlex v-if="isAuthenticated && !isLoading">
        <p>
          You seem to be still logged in with another account. Please logout
          before you can confirm the newly created account.
        </p>
        <CRFDButton flavour="link-active2" @click="logout">Logout</CRFDButton>
      </VFlex>

      <CRFDBox v-else title="👋 Complete Registration">
        <p>
          <b>You are almost set!</b>
          <br />
          Please complete the registration process by providing the required
          information and press the confirmation button.
        </p>

        <CRFDInput
          v-model="newPassword"
          type="password"
          placeholder="Password"
          :disabled="isLoading"
          required
        />

        <CRFDInput
          v-model="newPasswordConfirm"
          type="password"
          placeholder="Confirm Password"
          :disabled="isLoading"
          required
        />

        <VDivider />

        <CRFDInput
          v-model="phone"
          type="tel"
          placeholder="Phone"
          :disabled="isLoading"
          required
        />

        <VDivider />

        <CRFDInput
          v-model="street"
          placeholder="Street"
          :disabled="isLoading"
        />
        <CRFDInput
          v-model="city"
          flavour="autofill"
          placeholder="City"
          :disabled="isLoading"
        />
        <CRFDInput v-model="zip" placeholder="ZIP" :disabled="isLoading" />
        <CRFDInput
          v-model="state"
          flavour="autofill"
          placeholder="State"
          :disabled="isLoading"
        />
        <CRFDInput
          v-model="country"
          flavour="autofill"
          placeholder="Country"
          :disabled="isLoading"
        />

        <template #footer-left>
          <CRFDSpinner v-if="isLoading" />
        </template>
        <template #footer-right>
          <CRFDButton :disabled="!isValid || isLoading" @click="confirm">
            Confirm
          </CRFDButton>
        </template>
      </CRFDBox>
    </Container>
    <Spacer />
  </VFlex>
</template>
