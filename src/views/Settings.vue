<template>
  <div id="page">
    <ContentHeader class="content-header" title="Settings" border>
      <template v-slot:left></template>
      <template v-slot:right></template>
      <template v-slot:sub-left></template>
      <template v-slot:sub-right></template>
    </ContentHeader>
    <InPageNavigationLayout :routes="routes">
      <template #general>
        <h4 class="title">General</h4>

        <CRFDBox class="box" title="1. Setting">
          Here is some text that is inside the box
          <template #footer-left>Some Text</template>
          <template #footer-right>
            <CRFDButton flavour="secondary" disabled>Save</CRFDButton>
          </template>
        </CRFDBox>

        <CRFDBox class="box" title="2. Setting">
          Here is some text that is inside the box
          <template #footer-left>Some Text</template>
          <template #footer-right>
            <CRFDButton flavour="secondary" disabled>Save</CRFDButton>
          </template>
        </CRFDBox>

        <CRFDBox class="box" title="Map View">
          <CRFDInput type="text" />
          <template #footer-right>
            <CRFDButton flavour="secondary" disabled>Save</CRFDButton>
          </template>
        </CRFDBox>
      </template>

      <template #account>
        <h4 class="title">Account</h4>
        <LoremIpsum />
      </template>

      <template #feedback>
        <CRFDBox class="box" title="Feedback">
          <p>
            Do you have any suggestion or issues with the application? Please
            let me know.
          </p>
          <textarea></textarea>
          <template #footer-right>
            <CRFDButton flavour="secondary">Send</CRFDButton>
          </template>
        </CRFDBox>
      </template>

      <template #map>
        <h4 class="title">Map</h4>
        <LoremIpsum />
      </template>

      <template #about>
        <h4 class="title">About</h4>
        <Markdown :value="$t('settings.about.content')" />
      </template>

      <template #licenses>
        <h4 class="title">Licenses</h4>
        <p class="mb-6">
          A huge thanks to the developers of the following open source
          libraries:
        </p>
        <CRFDLibraryDetail v-for="dep in deps" :key="dep" :library="dep" />
      </template>
    </InPageNavigationLayout>
    <a
      href="https://kuhlti.me"
      target="_blank"
      class="w-full border-t-2 border-t-white/2 bg-white/primary py-4 text-center"
    >
      André Kuhlmann © 2022
    </a>
  </div>
</template>

<script>
import packageJson from '../../package.json'

export default {
  name: 'settings',
  props: {},
  data() {
    return {
      packageJson,
      routes: [
        {
          id: 'general',
          name: 'General'
        },
        {
          id: 'account',
          name: 'Account'
        },
        {
          id: 'map',
          name: 'Map View'
        },
        {
          id: 'notifications',
          name: 'Notifications'
        },
        {
          id: 'security',
          name: 'Security'
        },
        {
          id: 'advanced',
          name: 'Advanced'
        },
        {
          id: 'help',
          name: 'Help',
          newSection: true
        },
        {
          id: 'feedback',
          name: 'Feedback'
        },
        {
          id: 'about',
          name: 'About',
          newSection: true
        },
        {
          id: 'licenses',
          name: 'Licenses'
        }
      ]
    }
  },
  computed: {
    deps() {
      console.log(this.packageJson.dependencies)

      return [
        ...Object.keys(this.packageJson.dependencies),
        ...Object.keys(this.packageJson.devDependencies)
      ].sort((a, b) => {
        // when contains @types move to the end
        if (a.includes('@')) {
          return 1
        } else if (b.includes('@')) {
          return -1
        } else {
          return a.localeCompare(b)
        }
      })
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#page {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  flex: 1;
}

.box:not(:first-of-type) {
  @apply mt-6;
}

.title {
  @apply py-4 text-lg font-medium;
}
</style>
