<template>
  <div id="home">
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
      <crfd-input
        v-model="value"
        placeholder="Placeholder"
        :flavour="inputFlavour"
      />
      <crfd-input
        disabled
        v-model="value"
        placeholder="Placeholder"
        :flavour="inputFlavour"
      />
    </element-preview>

    <element-preview
      title="Dropdown"
      v-model="dropdownFlavour"
      :options="inputFlavours"
    >
      <crfd-dropdown
        v-model="dropdownValue"
        placeholder="Fruit"
        :flavour="dropdownFlavour"
      />
      <crfd-dropdown
        disabled
        v-model="dropdownValue"
        placeholder="Fruit"
        :flavour="dropdownFlavour"
      />

      <br />
      {{ dropdownValue }}
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
      <crfd-icon color="#E93731" :icon="icons.ArrowCircleRight" />
      <crfd-icon color="#F5A623" :icon="icons.ArrowCircleRight" rotate="45" />
      <crfd-icon color="#0CCE6B" :icon="icons.ArrowCircleRight" rotate="90" />
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

    <element-preview title="Spinner">
      <crfd-spinner />
    </element-preview>

    <element-preview title="Checkbox">
      <crfd-checkbox v-model="checkboxValue" />
      <crfd-checkbox v-model="checkboxValue" disabled />
    </element-preview>

    <element-preview title="Indicator">
      <input
        type="number"
        min="0"
        max="3"
        v-model="indicatorValue"
        class="border border-black"
      />
      <br />
      <br />
      <crfd-indicator :active="indicatorValue" />
    </element-preview>

    <element-preview title="Map">
      <crfd-map />
    </element-preview>

    <element-preview title="Card">
      <crfd-card class="w-3/4">
        It's always good to find out you're going to be working from home…
        <br />
        <br />
        <span class="text-sm italic text-black/1">
          Unless you're a firefighter.
        </span>
        😜
      </crfd-card>
    </element-preview>

    <h3
      class="mt-12 border-t-2 border-t-white/2 pt-8 pb-4 text-lg font-bold text-black/2"
    >
      Work in Progress
    </h3>

    <element-preview title="Detail"> </element-preview>
    <element-preview title="Datetime Input">
      <a
        href="https://dbrekalo.github.io/vue-date-pick/examples.html#calendar-widget"
      >
        https://dbrekalo.github.io/vue-date-pick/examples.html#calendar-widget
      </a>
    </element-preview>
    <element-preview title="Select"> </element-preview>
    <element-preview title="Multi-Select"> </element-preview>
    <element-preview title="Table"> </element-preview>
    <element-preview title="Calendar"> </element-preview>
    <element-preview title="Command Palette"> </element-preview>
    <element-preview title="Modal"> </element-preview>
    <element-preview title="List"> </element-preview>
  </div>
</template>

<script>
import * as Components from '../components'
const CRFD = Components.CRFD

import * as icons from '../assets/icons'

export default {
  name: 'Home',
  components: {
    'element-preview': Components.ElementPreview,
    'crfd-button': CRFD.Button,
    'crfd-modifier': CRFD.Modifier,
    'crfd-icon': CRFD.Icon,
    'crfd-input': CRFD.Input,
    'crfd-dropdown': CRFD.Dropdown,
    'crfd-avatar': CRFD.Avatar,
    'crfd-label': CRFD.Label,
    'crfd-path': CRFD.Path,
    'crfd-spinner': CRFD.Spinner,
    'crfd-checkbox': CRFD.Checkbox,
    'crfd-indicator': CRFD.Indicator,
    'crfd-map': CRFD.Map,
    'crfd-card': CRFD.Card
  },
  data() {
    return {
      value: '',
      icons,
      inputFlavour: 'default',
      inputFlavours: ['default', 'success', 'error', 'autofill'],
      dropdownFlavour: 'default',
      dropdownValue: '',
      buttonFlavour: 'primary',
      buttonFlavours: ['primary', 'secondary', 'critical'],
      modifierFlavour: 'button',
      modifierFlavours: ['button', 'inactive', 'applied'],
      avatarFlavour: 'lg',
      avatarFlavours: ['sm', 'nm', 'lg', 'xl'],
      pathCurrent: 0,
      path: ['1. Step', '2. Step', '3. Step', '4. Step'],
      checkboxValue: false,
      indicatorValue: 1
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
