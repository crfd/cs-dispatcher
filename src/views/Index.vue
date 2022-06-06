<template>
  <div id="home">
    <h1 class="mb-7 font-serif text-3xl font-extrabold text-red/primary">
      Component <br />
      Library
    </h1>

    <p class="mx-auto w-9/12 max-w-lg font-sans italic text-black/2">
      This is a UI framework <b>customly</b> designed for the campbell river
      fire department.
    </p>

    <ElementPreview
      title="Input"
      v-model="inputFlavour"
      :options="inputFlavours"
    >
      <CRFDInput
        v-model="value"
        placeholder="Placeholder"
        :flavour="inputFlavour"
      />
      <CRFDInput
        disabled
        v-model="value"
        placeholder="Placeholder"
        :flavour="inputFlavour"
        class="mt-3"
      />
    </ElementPreview>

    <ElementPreview
      title="Select"
      v-model="dropdownFlavour"
      :options="inputFlavours"
    >
      <CRFDDropdown
        v-model="dropdownValue"
        placeholder="Fruit"
        :flavour="dropdownFlavour"
      />
      <CRFDDropdown
        disabled
        v-model="dropdownValue"
        placeholder="Fruit"
        :flavour="dropdownFlavour"
        class="mt-3"
      />

      <br v-if="dropdownValue" />
      {{ dropdownValue }}
    </ElementPreview>

    <ElementPreview
      title="Button"
      v-model="buttonFlavour"
      :options="buttonFlavours"
    >
      <div class="flex justify-center gap-3">
        <CRFDButton :flavour="buttonFlavour" :icon="icons.Plus">
          Button
        </CRFDButton>
        <CRFDButton :flavour="buttonFlavour">Button</CRFDButton>
        <CRFDButton disabled :flavour="buttonFlavour">Button</CRFDButton>
      </div>
    </ElementPreview>

    <ElementPreview
      title="Modifier"
      v-model="modifierFlavour"
      :options="modifierFlavours"
    >
      <CRFDModifier :flavour="modifierFlavour" :icon="icons.Plus">
        Modifier
      </CRFDModifier>
      <CRFDModifier :flavour="modifierFlavour"> Modifier </CRFDModifier>
      <CRFDModifier disabled :flavour="modifierFlavour">
        Modifier
      </CRFDModifier>
    </ElementPreview>

    <ElementPreview title="Icon">
      <CRFDIcon color="#E93731" :icon="icons.ArrowCircleRight" />
      <CRFDIcon color="#F5A623" :icon="icons.ArrowCircleRight" rotate="45" />
      <CRFDIcon color="#0CCE6B" :icon="icons.ArrowCircleRight" rotate="90" />
    </ElementPreview>

    <ElementPreview
      title="Avatar"
      v-model="avatarFlavour"
      :options="avatarFlavours"
    >
      <CRFDAvatar
        name="André Kuhlmann"
        email="error"
        :size="avatarFlavour"
      ></CRFDAvatar>
      <CRFDAvatar
        name="André Kuhlmann"
        email="andre.kuhlmann@study.hs-duesseldorf.de"
        :size="avatarFlavour"
      ></CRFDAvatar>
      <CRFDAvatar
        image="https://i.pinimg.com/originals/5a/e4/0a/5ae40a32eb62babcd4cfc1b2d8e6088b.gif"
        name="Chandler Bing"
        :size="avatarFlavour"
      ></CRFDAvatar>
    </ElementPreview>

    <ElementPreview title="Label">
      <CRFDLabel
        title="Black"
        class="bg-black/primary text-white/primary"
        lowercase
      />
      <CRFDLabel
        title="Green"
        class="bg-green/primary text-white/primary"
        lowercase
      />
      <CRFDLabel
        title="Yellow"
        class="bg-yellow/primary text-white/primary"
        lowercase
      />
      <CRFDLabel
        title="Red"
        class="bg-red/primary text-white/primary"
        lowercase
      />
      <CRFDLabel
        title="Blue"
        class="bg-blue/primary text-white/primary"
        lowercase
      />
      <CRFDLabel
        title="Purple"
        class="bg-purple/primary text-white/primary"
        lowercase
      />
    </ElementPreview>

    <ElementPreview title="Path" v-model="pathCurrent" :options="pathOptions">
      <crfd-path :path="path" :value="pathCurrent" />
    </ElementPreview>

    <ElementPreview title="Spinner">
      <CRFDSpinner />
    </ElementPreview>

    <ElementPreview title="Checkbox">
      <CRFDCheckbox v-model="checkboxValue" />
      <CRFDCheckbox v-model="checkboxValue" disabled />
    </ElementPreview>

    <ElementPreview title="Indicator">
      <input
        type="number"
        min="0"
        max="3"
        v-model="indicatorValue"
        class="border border-black"
      />
      <br />
      <br />
      <CRFDIndicator :active="indicatorValue" />
    </ElementPreview>

    <ElementPreview title="Map">
      <CRFDMap class="rounded-lg" />
    </ElementPreview>

    <ElementPreview title="Card">
      <CRFDCard class="w-3/4">
        It's always good to find out you're going to be working from home…
        <br />
        <br />
        <span class="text-sm italic text-black/1">
          Unless you're a firefighter.
        </span>
        😜
      </CRFDCard>
    </ElementPreview>

    <ElementPreview title="NFPA 704 Hazard Diamond">
      <CRFDHazardDiamond />
      <br />
      <CRFDHazardDiamond
        flammability="4"
        special="W"
        health="3"
        reactivity="1"
      />
    </ElementPreview>

    <ElementPreview
      title="Tooltip"
      v-model="tooltipPosition"
      :options="tooltipPositions"
    >
      <CRFDTooltip text="Some Tooltip" :position="tooltipPosition">
        <p>Hover here!</p>
      </CRFDTooltip>
    </ElementPreview>

    <ElementPreview title="Markdown">
      <Markdown
        value="This is some [**Markdown**](https://github.com/developit/snarkdown)"
      />
    </ElementPreview>

    <ElementPreview title="Detail">
      <CRFDDetail summary="Extend">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        quos optio eius atque, dicta possimus inventore fugiat consequatur esse
        ipsa maxime fugit sint pariatur voluptatem dolorum quod facere odit id.
      </CRFDDetail>
    </ElementPreview>

    <ElementPreview title="Box">
      <CRFDBox :title="Box">
        This is a simple box component, that provides a way to bundle
        information. It provides an optional footer.
        <template #footer-left> Left </template>
        <template #footer-right>
          <CRFDButton flavour="secondary">Right</CRFDButton>
        </template>
      </CRFDBox>
    </ElementPreview>

    <ElementPreview title="Textarea">
      <CRFDTextarea v-model="textAreaValue" placeholder="Test" />
      <CRFDTextarea
        v-model="textAreaValue"
        placeholder="Test"
        disabled
        class="mt-3"
      />
    </ElementPreview>

    <h3
      class="mt-12 border-t-2 border-t-white/2 pt-8 pb-4 text-lg font-bold text-black/2"
    >
      Work in Progress
    </h3>

    <ElementPreview title="Datetime Input">
      <a
        href="https://dbrekalo.github.io/vue-date-pick/examples.html#calendar-widget"
      >
        https://dbrekalo.github.io/vue-date-pick/examples.html#calendar-widget
      </a>
    </ElementPreview>
    <ElementPreview title="Dropdown"> </ElementPreview>
    <ElementPreview title="Select"> </ElementPreview>
    <ElementPreview title="Multi-Select"> </ElementPreview>
    <ElementPreview title="Table"> </ElementPreview>
    <ElementPreview title="Calendar"> </ElementPreview>
    <ElementPreview title="Command Palette"> </ElementPreview>
    <ElementPreview title="Command Options"> </ElementPreview>
    <ElementPreview title="Modal"> </ElementPreview>
    <ElementPreview title="List"> </ElementPreview>
    <ElementPreview title="Date Input"> </ElementPreview>
    <ElementPreview title="Datetime Input"> </ElementPreview>
  </div>
</template>

<script>
import * as icons from '@icons'

export default {
  name: 'Home',
  data() {
    return {
      value: '',
      icons,
      inputFlavour: 'default',
      inputFlavours: ['default', 'success', 'error', 'autofill'],
      dropdownFlavour: 'default',
      dropdownValue: '',
      buttonFlavour: 'primary',
      buttonFlavours: [
        'primary',
        'secondary',
        'critical',
        'link',
        'link-active',
        'link-active-2'
      ],
      modifierFlavour: 'button',
      modifierFlavours: ['button', 'inactive', 'applied'],
      avatarFlavour: 'lg',
      avatarFlavours: ['sm', 'nm', 'lg', 'xl'],
      pathCurrent: 0,
      path: ['1. Step', '2. Step', '3. Step', '4. Step'],
      checkboxValue: false,
      indicatorValue: 1,
      tooltipPositions: ['top', 'right', 'bottom', 'left'],
      tooltipPosition: 'top',
      textAreaValue: ''
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
