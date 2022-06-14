<script lang="ts" setup>
import { computed, Ref, ref } from 'vue'
import { fileDialog } from 'file-select-dialog'

import Feedback from '@/models/Feedback'
import { sendFeedback } from '@/controller/Feedback.controller'

// ====
// DATA
// ====

const name = ref('')
const feedback = ref('')
const file: Ref<File | null> = ref(null)
const maxFileSizeMB = ref(5)
const isSending = ref(false)
const success = ref(false)
const error: Ref<string | undefined> = ref(undefined)

// ========
// COMPUTED
// ========

const fileSize = computed(() => {
  return file.value?.size ?? 0
})

const exceedsMaxFileSize = computed(() => {
  return fileSize.value > maxFileSizeMB.value * 1024 * 1024
})

const fileText = computed(() => {
  return file.value?.name ?? 'No file selected'
})

const invalid = computed(() => {
  return name.value === '' || feedback.value === '' || exceedsMaxFileSize.value
})

const feedbackObject = computed(() => {
  const f = file.value
  return new Feedback(name.value, feedback.value, f ? [f] : [])
})

// =======
// METHODS
// =======

function reset() {
  name.value = ''
  feedback.value = ''
  file.value = null
}

function clearFile() {
  file.value = null
}

function fileSelectionHandler() {
  fileDialog().then(files => {
    console.log(typeof files)
    file.value = files[0]
    console.dir(files[0])
  })
}

async function send() {
  isSending.value = true

  try {
    await sendFeedback(feedbackObject.value)
    success.value = true

    // Remove success message after 5 seconds
    setTimeout(() => {
      success.value = false
    }, 5000)

    reset()
  } catch (e) {
    const message = (e as Error).message
    console.error(message)
    error.value = message

    // Remove error message after 20 seconds
    setTimeout(() => {
      error.value = undefined
    }, 20000)
  }

  isSending.value = false
}
</script>

<template>
  <CRFDBox class="box" title="Feedback">
    <p>
      Do you have any suggestion or issues with the application? Please let me
      know.
    </p>
    <CRFDInput v-model="name" placeholder="Name" :disabled="isSending" />
    <CRFDTextarea v-model="feedback" :disabled="isSending" />
    <HFlex>
      <CRFDButton
        @click="fileSelectionHandler"
        flavour="secondary"
        :disabled="isSending"
      >
        Select File
      </CRFDButton>
      <span class="text-black/2">{{ fileText }}</span>
      <div class="clear-icon-btn" v-if="file">
        <i-crfd-cancle @click="clearFile" width="24px" />
      </div>
      <Spacer />
      <div>
        <p v-if="file && exceedsMaxFileSize" class="text-red/primary">
          The file is too large.
        </p>
        <p v-else-if="file" class="text-green/primary">File selected</p>
        <p v-else>Max File Size: 5MB</p>
      </div>
    </HFlex>
    <template #footer-left>
      <CRFDSpinner v-if="isSending" />
      <span v-if="invalid && !isSending && !error && !success">
        There are still some fields missing
      </span>
      <span v-else-if="isSending && !error && !success">Sending ...</span>
      <span v-else-if="!error && success" class="text-green/primary">
        Successfully send Feedback
      </span>
      <span v-else-if="error" class="text-red/primary">{{ error }}</span>
    </template>
    <template #footer-right>
      <CRFDButton
        @click="send"
        flavour="secondary"
        :disabled="invalid || isSending"
      >
        Send
      </CRFDButton>
    </template>
  </CRFDBox>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
}

.clear-icon-btn {
  @apply cursor-pointer text-black/2;
}
</style>
