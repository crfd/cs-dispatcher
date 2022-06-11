<template>
  <VFlex class="gap-8">
    <CRFDBox class="box" title="Hazards">
      <p>List all predetermined hazards</p>
      <ul>
        <li>Category</li>
        <li>Name</li>
        <li>Measurements</li>
      </ul>
      <template #footer-left></template>
      <template #footer-right>
        <CRFDButton flavour="secondary" disabled>Save</CRFDButton>
      </template>
    </CRFDBox>

    <CRFDBox class="box" title="Equipment">
      <p>Customize the look and feel of the navigation bar</p>
      <HFlex>
        <input type="checkbox" />
        <p>Show Icons</p>
      </HFlex>
      <template #footer-left></template>
      <template #footer-right>
        <CRFDButton flavour="secondary" disabled>Save</CRFDButton>
      </template>
    </CRFDBox>
  </VFlex>
</template>
