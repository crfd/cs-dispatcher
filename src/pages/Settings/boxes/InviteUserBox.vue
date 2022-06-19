<script lang="ts" setup>
import { computed, Ref, ref } from 'vue'
import { httpsCallable } from 'firebase/functions'
import {
  createNewUserFrame,
  UserRole,
  AllUserRoles,
  userRoleFromKey
} from '@crfd/cs-models'

import { functions } from '@/config/firebase'

const roleString: Ref<string> = ref(UserRole[UserRole.User])
const displayName = ref('')
const email = ref('')
const description = ref('')

const isSending = ref(false)
const success = ref(false)
const error: Ref<string | undefined> = ref(undefined)

// TODO: Validate Email
const isValid = computed(() => {
  return displayName.value.length > 0 && email.value.length > 0
})

const userRoleNames = AllUserRoles.map(role => {
  return UserRole[role]
})

const role = computed(() => {
  // force unwrapping as I am certain the value will always be a valid UserRole
  return userRoleFromKey(roleString.value) as UserRole
})

function reset() {
  roleString.value = UserRole[UserRole.User]
  displayName.value = ''
  email.value = ''
  description.value = ''
}

function sendInvite() {
  isSending.value = true
  error.value = undefined
  success.value = false

  const newUserBody = createNewUserFrame(
    role.value,
    email.value,
    displayName.value,
    description.value
  )
  httpsCallable(
    functions,
    'createNewUser'
  )(newUserBody)
    .then(res => {
      success.value = true

      // Remove success message after 5 seconds
      setTimeout(() => {
        success.value = false
      }, 5000)

      reset()
    })
    .catch(err => {
      console.error(err)

      const message = (err as Error).message
      error.value = message

      // Remove error message after 20 seconds
      setTimeout(() => {
        error.value = undefined
      }, 20000)
    })
    .finally(() => (isSending.value = false))
}
</script>

<template>
  <CRFDBox class="box" title="Invite New User">
    <p>
      Fill out the following data to add a new User to the System. Depending on
      which user group the user is associted with the user will have different
      privlages.
    </p>

    <CRFDDropdown
      :disabled="isSending"
      placeholder="Role"
      v-model="roleString"
      :options="userRoleNames"
      readonly
    />

    <CRFDInput
      v-model="displayName"
      placeholder="Name"
      type="text"
      :disabled="isSending"
    />

    <CRFDInput
      v-model="email"
      placeholder="E-Mail"
      type="email"
      :disabled="isSending"
    />

    <CRFDTextarea
      v-model="description"
      placeholder="User Description (Optional)"
      :disabled="isSending"
    />

    <template #footer-left>
      <CRFDSpinner v-if="isSending" />
      <span v-if="!isValid && !isSending && !error && !success">
        There are still some fields missing
      </span>
      <span v-else-if="isSending && !error && !success">Sending ...</span>
      <span v-else-if="!error && success" class="text-green/primary">
        Invitation Send
      </span>
      <span v-else-if="error" class="text-red/primary">{{ error }}</span>
    </template>

    <template #footer-right>
      <CRFDButton
        flavour="primary"
        :disabled="!isValid || isSending"
        @click="sendInvite"
      >
        Send Invitation
      </CRFDButton>
    </template>
  </CRFDBox>
</template>
