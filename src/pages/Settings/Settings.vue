<template>
  <div id="page">
    <SubHeader class="content-header" title="Settings" border />

    <InPageNavigationLayout :routes="routes">
      <template #general>
        <SGeneral />
      </template>

      <template #ui>
        <SUI />
      </template>

      <template #knowledgebase>
        <SKnowledge />
      </template>

      <template #feedback>
        <SFeedback />
      </template>

      <template #map>
        <SMap />
      </template>

      <template #changelog>
        <SChangelog />
      </template>

      <template #about>
        <SAbout />
      </template>

      <template #users>
        <SUsers />
      </template>

      <template #licenses>
        <SLicense />
      </template>
    </InPageNavigationLayout>

    <footer>
      <a href="https://kuhlti.me" target="_blank"> André Kuhlmann © 2022 </a>
    </footer>
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
          id: 'users',
          name: 'Users'
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

footer {
  @apply w-full border-t-2 border-t-white/2 bg-white/primary py-4 text-center;
}
</style>
