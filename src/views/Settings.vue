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
        <VFlex class="gap-8">
          <CRFDBox class="box" title="1. Setting">
            <p>Perform changes to the UI</p>

            <template #footer-left></template>
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
        </VFlex>
      </template>

      <template #ui>
        <UISettings />
      </template>

      <template #knowledgebase>
        <KnowledgebaseSettings />
      </template>

      <template #account>
        <h4 class="title">Account</h4>
        <LoremIpsum />
      </template>

      <template #feedback>
        <FeedbackSettings />
      </template>

      <template #map>
        <MapSettings />
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
        <LicensesSettings />
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
export default {
  name: 'settings',
  props: {},
  data() {
    return {
      routes: [
        {
          id: 'general',
          name: 'General'
        },
        {
          id: 'ui',
          name: 'UI'
        },
        {
          id: 'map',
          name: 'Map View'
        },
        {
          id: 'account',
          name: 'Account'
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
          id: 'knowledgebase',
          name: 'Knowledgebase'
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
  computed: {},
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

.title {
  @apply py-4 text-lg font-medium;
}

.divider {
  @apply mt-8 mb-4 h-[2px] rounded bg-white/2;
}
</style>
