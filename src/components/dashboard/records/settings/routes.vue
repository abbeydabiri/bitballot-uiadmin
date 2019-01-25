<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import settingsNew from "@/components/dashboard/records/settings/settings-new"
  import settingsView from "@/components/dashboard/records/settings/settings-view"
  import settingsEdit from "@/components/dashboard/records/settings/settings-edit"
  import settingsSearch from "@/components/dashboard/records/settings/settings-search"

  export default {
    children: [
      { path: '', component: settingsSearch, name:"settings-search"},
      { path: 'new', component: settingsNew, name:"settings-new"},
      { path: ':id', component: settingsView, name:"settings-view"},
      { path: ':id/edit', component: settingsEdit, name:"settings-edit"},
    ],
  }
</script>