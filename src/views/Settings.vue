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
        <FeedbackBox />
      </template>

      <template #map>
        <h4 class="title">Map</h4>
        <LoremIpsum />
      </template>

      <template #changelog>
        <h4 class="title">Changelog</h4>
        <Markdown
          value="A history of all commits can be seen on the GitHub repository<br>[campbell-river-fire-department/cs-dispatcher](https://github.com/campbell-river-fire-department/cs-dispatcher/commits/main)"
        />
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
        <CRFDLibraryDetail
          class="shadow-sm"
          v-for="dep in deps"
          :key="dep"
          :library="dep"
        />

        <div class="divider"></div>

        <span>Further software and ressources:</span>

        <CRFDDetail summary="Icons8" class="bg-white/primary shadow-sm">
          <Markdown
            value="Many of the icons have been provided by [https://icons8.com](https://icons8.com)"
          />
        </CRFDDetail>
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
          id: 'admin',
          name: 'Administration'
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
          id: 'changelog',
          name: 'Changelog',
          newSection: true
        },
        {
          id: 'about',
          name: 'About'
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

.divider {
  @apply mt-8 mb-4 h-[2px] rounded bg-white/2;
}
</style>
