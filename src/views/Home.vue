<template>
  <div id="home">
    <img src="../assets/logo.svg" class="mx-auto mb-4 h-24 w-24" />

    <h1 class="mb-7 font-serif text-3xl font-extrabold text-red/primary">
      Component <br />
      Library
    </h1>

    <p class="mx-auto w-9/12 max-w-lg font-sans italic text-black/2">
      This is a UI framework designed for the campbell river fire department.
    </p>

    <element-preview
      title="Input"
      v-model="inputFlavour"
      :options="inputFlavours"
    >
      <crfd-input v-model="value" placeholder="Input" :flavour="inputFlavour" />
      <br />
      <div class="my-2"></div>
      <crfd-input
        disabled
        v-model="value"
        placeholder="Input"
        :flavour="inputFlavour"
      />
    </element-preview>

    <element-preview
      title="Button"
      v-model="buttonFlavour"
      :options="buttonFlavours"
    >
      <crfd-button :flavour="buttonFlavour" :icon="icons.Plus"
        >Button</crfd-button
      >
      <crfd-button :flavour="buttonFlavour">Button</crfd-button>
      <crfd-button disabled :flavour="buttonFlavour">Button</crfd-button>
    </element-preview>

    <element-preview
      title="Modifier"
      v-model="modifierFlavour"
      :options="modifierFlavours"
    >
      <crfd-modifier :flavour="modifierFlavour" :icon="icons.Plus">
        Modifier
      </crfd-modifier>
      <crfd-modifier :flavour="modifierFlavour"> Modifier </crfd-modifier>
      <crfd-modifier disabled :flavour="modifierFlavour">
        Modifier
      </crfd-modifier>
    </element-preview>

    <element-preview title="Icon">
      <crfd-colored-icon color="#E93731" :icon="icons.ArrowCircleRight" />
      <crfd-colored-icon
        color="#F5A623"
        :icon="icons.ArrowCircleRight"
        rotate="45"
      />
      <crfd-colored-icon
        color="#0CCE6B"
        :icon="icons.ArrowCircleRight"
        rotate="90"
      />
    </element-preview>

    <element-preview
      title="Avatar"
      v-model="avatarFlavour"
      :options="avatarFlavours"
    >
      <crfd-avatar
        name="André Kuhlmann"
        email="error"
        :size="avatarFlavour"
      ></crfd-avatar>
      <crfd-avatar
        name="André Kuhlmann"
        email="andre.kuhlmann@study.hs-duesseldorf.de"
        :size="avatarFlavour"
      ></crfd-avatar>
      <crfd-avatar
        image="https://i.pinimg.com/originals/5a/e4/0a/5ae40a32eb62babcd4cfc1b2d8e6088b.gif"
        name="Chandler Bing"
        :size="avatarFlavour"
      ></crfd-avatar>
    </element-preview>

    <element-preview title="Label">
      <crfd-label title="Black" class="bg-black/primary text-white/primary" />
      <crfd-label title="Green" class="bg-green/primary text-white/primary" />
      <crfd-label title="Yellow" class="bg-yellow/primary text-white/primary" />
      <crfd-label title="Red" class="bg-red/primary text-white/primary" />
      <crfd-label title="Blue" class="bg-blue/primary text-white/primary" />
      <crfd-label title="Purple" class="bg-purple/primary text-white/primary" />
    </element-preview>

    <element-preview title="Path" v-model="pathCurrent" :options="pathOptions">
      <crfd-path :path="path" :value="pathCurrent" />
    </element-preview>

    <element-preview title="Indicator">
      <crfd-indicator />
    </element-preview>

    <element-preview title="Checkbox">
      <crfd-checkbox v-model="checkboxValue" />
      <crfd-checkbox v-model="checkboxValue" disabled />
    </element-preview>
  </div>
</template>

<script>
import ElementPreview from '../layouts/ElementPreview.vue'

import CRFDInput from '../components/CRFDInput.vue'
import CRFDButton from '../components/CRFDButton.vue'
import CRFDColoredIcon from '../components/CRFDColoredIcon.vue'
import CRFDModifier from '../components/CRFDModifier.vue'
import CRFDAvatar from '../components/CRFDAvatar.vue'
import CRFDLabel from '../components/CRFDLabel.vue'
import CRFDPath from '../components/CRFDPath.vue'
import CRFDIndicator from '../components/CRFDIndicator.vue'
import CRFDCheckbox from '../components/CRFDCheckbox.vue'

import * as icons from '../assets/icons'

export default {
  name: 'Home',
  components: {
    'element-preview': ElementPreview,
    'crfd-input': CRFDInput,
    'crfd-button': CRFDButton,
    'crfd-colored-icon': CRFDColoredIcon,
    'crfd-modifier': CRFDModifier,
    'crfd-avatar': CRFDAvatar,
    'crfd-label': CRFDLabel,
    'crfd-path': CRFDPath,
    'crfd-indicator': CRFDIndicator,
    'crfd-checkbox': CRFDCheckbox
  },
  data() {
    return {
      value: '',
      icons,
      inputFlavour: 'default',
      inputFlavours: ['default', 'success', 'error', 'autofill'],
      buttonFlavour: 'primary',
      buttonFlavours: ['primary', 'secondary', 'critical'],
      modifierFlavour: 'button',
      modifierFlavours: ['button', 'inactive', 'applied'],
      avatarFlavour: 'lg',
      avatarFlavours: ['sm', 'nm', 'lg', 'xl'],
      pathCurrent: 0,
      path: ['1. Step', '2. Step', '3. Step', '4. Step'],
      checkboxValue: false
    }
  },
  computed: {
    pathOptions() {
      return this.path.map((step, index) => index)
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  @apply bg-white/1 pb-12 pt-8;
}
</style>
