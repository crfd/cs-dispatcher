<template>
  <RightDetailLayout>
    <template #left>
      <CRFDPath :path="pathStringArray" :value="value" />
    </template>
    <template #right>
      <template v-for="(step, i) in path" :key="step.id">
        <div v-if="i === value">
          <slot :name="step.id"></slot>
        </div>
      </template>
    </template>
  </RightDetailLayout>
</template>

<script>
export default {
  props: {
    path: {
      type: Array,
      default: () => [
        {
          id: 'general',
          name: 'General'
        }
      ]
    },
    value: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {}
  },
  computed: {
    pathStringArray() {
      return this.path.map(step => step.name)
    }
  },
  emits: [],
  methods: {}
}
</script>

<style lang="scss" scoped></style>
