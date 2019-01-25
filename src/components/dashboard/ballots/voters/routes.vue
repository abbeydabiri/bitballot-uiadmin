<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import votersNew from "@/components/dashboard/ballots/voters/voters-new"
  import votersView from "@/components/dashboard/ballots/voters/voters-view"
  import votersEdit from "@/components/dashboard/ballots/voters/voters-edit"
  import votersSearch from "@/components/dashboard/ballots/voters/voters-search"

  export default {
    children: [
      { path: '', component: votersSearch, name:"voters-search"},
      { path: 'new', component: votersNew, name:"voters-new"},
      { path: ':id', component: votersView, name:"voters-view"},
      { path: ':id/edit', component: votersEdit, name:"voters-edit"},
    ],
  }
</script>