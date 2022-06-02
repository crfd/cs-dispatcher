<template>
  <ContentHeader :title="title">
    <template v-slot:left></template>
    <template v-slot:right>
      <crfd-button flavour="secondary">Edit</crfd-button>
      <crfd-button>Create</crfd-button>
    </template>
    <template v-slot:sub-left>
      <crfd-modifier title="Calender View" />
    </template>
    <template v-slot:sub-right></template>
  </ContentHeader>
</template>

<script>
import { ContentHeader } from '../components/'
import { Button, Modifier } from '../components/CRFD'

export default {
  name: 'table-layout',
  components: {
    ContentHeader,
    'crfd-button': Button,
    'crfd-modifier': Modifier
  },
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped></style>
