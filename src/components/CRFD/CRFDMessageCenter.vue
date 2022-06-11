<template>
  <Container max-width="520px" right>
    <VFlex>
      <CRFDMessage
        v-for="(message, i) in modelValue"
        :key="message.id"
        :message="message"
        @dismiss="removeMessage(i)"
      />
    </VFlex>
  </Container>
</template>

<script>
export default {
  props: {
    modelValue: Array
  },
  emits: ['update:modelValue'],
  methods: {
    removeMessage(index) {
      const filteredArray = this.modelValue.filter((_, i) => i !== index)
      this.$emit('update:modelValue', filteredArray)
    }
  }
}
</script>
