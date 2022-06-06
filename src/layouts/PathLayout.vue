<template>
  <RightDetailLayout>
    <template #left>
      <CRFDPath :path="path" :value="value" />
    </template>
    <template #right> <slot /> </template>
  </RightDetailLayout>
</template>

<script>
export default {
  props: {
    path: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {}
  },
  computed: {},
  emits: [],
  methods: {}
}
</script>

<style lang="scss" scoped></style>
