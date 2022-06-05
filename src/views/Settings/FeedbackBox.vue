<template>
  <CRFDBox class="box" title="Feedback">
    <p>
      Do you have any suggestion or issues with the application? Please let me
      know.
    </p>
    <CRFDInput v-model="name" placeholder="Name" />
    <CRFDTextarea v-model="feedback" />
    <HFlex>
      <CRFDButton flavour="secondary">Select File</CRFDButton>
      <span class="text-black/2">No File selected</span>
      <div class="spacer"></div>
      <p>Max File Size: 5MB</p>
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
export default {
  name: 'FeedbackBox',
  data() {
    return {
      name: '',
      feedback: '',
      file: null
    }
  },
  computed: {
    invalid() {
      return this.name === '' || this.feedback === ''
    }
  },
  methods: {
    reset() {
      this.name = ''
      this.feedback = ''
      this.file = null
    },
    send() {
      console.log('send')
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
