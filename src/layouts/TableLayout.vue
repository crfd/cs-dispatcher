<template>
  <ContentHeader :title="title">
    <template v-slot:left></template>
    <template v-slot:right>
      <CRFDButton flavour="secondary">Edit</CRFDButton>
      <CRFDButton>Create</CRFDButton>
    </template>
    <template v-slot:sub-left>
      <CRFDModifier title="Calender View" />
    </template>
    <template v-slot:sub-right></template>
  </ContentHeader>
</template>

<script>
export default {
  name: 'table-layout',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped></style>
