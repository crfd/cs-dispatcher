<template>
  <CRFDBox class="box" title="Feedback">
    <p>
      Do you have any suggestion or issues with the application? Please let me
      know.
    </p>
    <CRFDInput v-model="name" placeholder="Name" />
    <CRFDTextarea v-model="feedback" />
    <HFlex>
      <CRFDButton @click="fileSelectionHandler" flavour="secondary">
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
      <span v-if="invalid">There are still some fields missing</span>
    </template>
    <template #footer-right>
      <CRFDButton @click="send" flavour="secondary" :disabled="invalid">
        Send
      </CRFDButton>
    </template>
  </CRFDBox>
</template>

<script>
import { fileDialog } from 'file-select-dialog'

export default {
  name: 'FeedbackBox',
  data() {
    return {
      name: '',
      feedback: '',
      file: null,
      maxFileSizeMB: 5
    }
  },
  computed: {
    invalid() {
      return this.name === '' || this.feedback === '' || this.exceedsMaxFileSize
    },
    fileSize() {
      return this.file?.size ?? 0
    },
    exceedsMaxFileSize() {
      return this.fileSize > this.maxFileSizeMB * 1024 * 1024
    },
    fileText() {
      return this.file ? this.file.name : 'No File selected'
    }
  },
  methods: {
    reset() {
      this.name = ''
      this.feedback = ''
      this.file = null
    },
    clearFile() {
      this.file = null
    },
    send() {
      console.log('send')
    },
    fileSelectionHandler() {
      fileDialog().then(files => {
        this.file = files[0]
        console.dir(files[0])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
}

.clear-icon-btn {
  @apply cursor-pointer text-black/2;
}
</style>
