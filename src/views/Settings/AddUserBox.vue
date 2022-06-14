<script lang="ts" setup>
import { useUsers } from '@/stores/global'
import { computed, ref } from 'vue'

const users = useUsers()

const displayName = ref('')
const email = ref('')

// TODO: Validate Email
const isValid = computed(() => {
  return displayName.value.length > 0 && email.value.length > 0
})
</script>

<template>
  <CRFDBox class="box" title="Invite New User">
    <p>
      Fill out the following data to add a new User to the System. Depending on
      which user group the user is associted with the user will have different
      privlages.
    </p>

    <CRFDInput v-model="displayName" placeholder="Name" type="text" required />
    <CRFDInput v-model="email" placeholder="E-Mail" type="email" required />

    <CRFDTextarea placeholder="User Description (Optional)"></CRFDTextarea>

    <template #footer-right>
      <CRFDButton flavour="primary" :disabled="!isValid">
        Send Invitation
      </CRFDButton>
    </template>
  </CRFDBox>
</template>
