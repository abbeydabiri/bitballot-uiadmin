<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import partnersNew from "@/components/dashboard/profiles/partners/partners-new"
  import partnersView from "@/components/dashboard/profiles/partners/partners-view"
  import partnersEdit from "@/components/dashboard/profiles/partners/partners-edit"
  import partnersSearch from "@/components/dashboard/profiles/partners/partners-search"

  export default {
    children: [
      { path: '', component: partnersSearch, name:"partners-search"},
      { path: 'new', component: partnersNew, name:"partners-new"},
      { path: ':id', component: partnersView, name:"partners-view"},
      { path: ':id/edit', component: partnersEdit, name:"partners-edit"},
    ],
  }
</script>
