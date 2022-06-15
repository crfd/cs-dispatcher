<script lang="ts" setup>
import { computed, ref } from 'vue'

const newPassword = ref('')
const confirmPassword = ref('')

const isValid = computed(() => {
  // TODO: Define password rules
  return (
    newPassword.value.length > 0 && newPassword.value === confirmPassword.value
  )
})
</script>

<template>
  <VFlex class="h-full">
    <Spacer />
    <Container maxWidth="320px" center>
      <CRFDBox title="Set New Password">
        <CRFDInput
          v-model="newPassword"
          type="password"
          placeholder="New Password"
        />
        <CRFDInput
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />

        <template #footer-right>
          <CRFDButton :disabled="!isValid">Set</CRFDButton>
        </template>
      </CRFDBox>
    </Container>
    <Spacer />
  </VFlex>
</template>
