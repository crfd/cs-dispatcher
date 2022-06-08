<template>
  <VFlex id="page">
    <ContentHeader class="content-header" title="New Space">
      <template v-slot:left></template>
      <template v-slot:right>
        <CRFDButton flavour="secondary" @click="push('spaces')">
          Cancle
        </CRFDButton>
        <CRFDButton :disabled="disabled">Save</CRFDButton>
      </template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>

    <PathLayout :path="path" :value="step">
      <template #general>
        <CRFDBox :title="selectedPath.name">
          <ul>
            <li>What contractor does the confined space belong to?</li>
            <li>What is the identifier of the confined space?</li>
            <li>What is the name of the confined space?</li>
            <li>What further describes the confined space?</li>
            <li>What is the location of the confined space?</li>
            <ul>
              <li>GPS coordinates</li>
              <li>Textual description of the location on sight</li>
            </ul>
            <li>
              Are there any images that might help to locate the confined space?
            </li>
            <ul>
              <li>Image Name</li>
              <li>Optional description for the image</li>
            </ul>
          </ul>
        </CRFDBox>
      </template>

      <template #hazards>
        <CRFDBox :title="selectedPath.name">
          <ul>
            <li>Add all hazards found inside the confined space</li>
            <li>
              Each Hazard has a granular control: <i>1. Category</i> >
              <i>2. Detailed Hazard</i>
            </li>
            <li>
              For each selected hazard more information has to be provided
            </li>
            <ul>
              <li>
                Optional description of the hazard, in case the definition does
                not provide enough information
              </li>
              <li>
                Ways to measuring or ensuring that the confined space is safe to
                enter.
              </li>
              <ul>
                <li>
                  (Some predefined options, depending on the hazard that was
                  selected)
                </li>
                <li>Measurement Value restriction</li>
              </ul>
              <li>Ways to mitigate the hazard</li>
              <li>Images</li>
              <ul>
                <li>Image Name</li>
                <li>Optional description for the image</li>
              </ul>
            </ul>
          </ul>
        </CRFDBox>
      </template>

      <template #contact>
        <CRFDBox :title="selectedPath.name">
          <ul>
            <li>Autofill: Contact Information based on selected contractor</li>
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </ul>
        </CRFDBox>
      </template>

      <template #documents>
        <CRFDBox :title="selectedPath.name">
          <ul>
            <li>Predefined Categories of different Documents</li>
            <li>Custom Document Names</li>
            <li>Optional descriptions of documents</li>
          </ul>
        </CRFDBox>
      </template>
    </PathLayout>

    <Spacer />

    <footer>
      <p class="text-black/1">Validation Errors</p>
      <HFlex class="navigation-buttons justify-center">
        <CRFDButton
          @click="previous"
          flavour="secondary"
          :disabled="isFirstPage"
        >
          Previous
        </CRFDButton>
        <CRFDButton @click="next" flavour="primary" :disabled="isLastPage">
          Next
        </CRFDButton>
      </HFlex>
    </footer>
  </VFlex>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      path: [
        {
          id: 'general',
          name: 'General'
        },
        {
          id: 'hazards',
          name: 'Hazard Assessment'
        },
        {
          id: 'contact',
          name: 'Contact'
        },
        {
          id: 'documents',
          name: 'Documents'
        }
      ],
      step: 0
    }
  },
  computed: {
    disabled() {
      return true
    },
    selectedPath() {
      return this.path[this.step]
    },
    isFirstPage() {
      return this.step === 0
    },
    isLastPage() {
      return this.step === this.path.length - 1
    }
  },
  methods: {
    push(name) {
      this.$router.push({ name })
    },
    next() {
      if (!this.isLastPage) {
        this.step++
      }
    },
    previous() {
      if (!this.isFirstPage) {
        this.step--
      }
    },
    save() {
      console.log('save')
    }
  }
}
</script>

<style lang="scss" scoped>
#page {
  height: 100%;
}

ul {
  padding-left: 16px;
  list-style-type: disc;
}

ul > ul {
  list-style-type: circle;
}

ul > ul > ul {
  list-style-type: square;
}

footer {
  @apply pt-4 pb-8;
}

.navigation-buttons {
  @apply mt-3;
}
</style>
