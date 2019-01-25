<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import positionsNew from "@/components/dashboard/ballots/positions/positions-new"
  import positionsView from "@/components/dashboard/ballots/positions/positions-view"
  import positionsEdit from "@/components/dashboard/ballots/positions/positions-edit"
  import positionsSearch from "@/components/dashboard/ballots/positions/positions-search"

  export default {
    children: [
      { path: '', component: positionsSearch, name:"positions-search"},
      { path: 'new', component: positionsNew, name:"positions-new"},
      { path: ':id', component: positionsView, name:"positions-view"},
      { path: ':id/edit', component: positionsEdit, name:"positions-edit"},
    ],
  }
</script>