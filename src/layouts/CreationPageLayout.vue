<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue'

import router from '@/router'

// =====
// TYPES
// =====

interface PathComponent {
  id: string
  name: string
}

// =====
// PROPS
// =====

const props = defineProps({
  title: {
    type: String,
    default: 'No Title'
  },
   path: {
    type: Array<PathComponent>,
    default: () => []
  },
  returnPage: {
    type: String,
    default: 'home'
  }
})

const { title, path, returnPage } = toRefs(props)

// ====
// DATA
// ====

/** The index of the current step that is being shown. */
const step = ref(0)

// ========
// COMPUTED
// ========

const isFirstPage = computed(() => step.value === 0)
const isLastPage = computed(() =>  step.value === path.value.length - 1)
const selectedStep = computed(() => path.value[step.value])

// ====
// EMIT
// ====

const emit = defineEmits(['save'])

// =======
// METHODS
// =======

function push(name: string) {
  router.push({ name })
}

function previous() {
  if (!isFirstPage.value) step.value--
}

function next() {
  if (!isLastPage.value) step.value++
}

function save() {
  emit('save')
}
</script>

<template>
  <VFlex id="page">
    <SubHeader :title="title">
      <template v-slot:right>
        <CRFDButton flavour="secondary" @click="push(returnPage)">
          Cancle
        </CRFDButton>
        <CRFDButton :disabled="true" @click="save">Save</CRFDButton>
      </template>
    </SubHeader>

    <PathLayout :path="path" :value="step">
      <template v-for="page in path" :key="page.id" #[page.id]>
        <CRFDBox :title="page.name">
          <slot :name="page.id"> No content to display </slot>
        </CRFDBox>
      </template>
    </PathLayout>

    <Spacer />

    <div class="navigation-container">
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
    </div>
  </VFlex>
</template>

<style lang="scss" scoped>
#page {
  height: 100%;
}

.navigation-container {
  @apply pt-4 pb-8;
}

.navigation-buttons {
  @apply mt-3;
}
</style>
