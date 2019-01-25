<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import proposalsNew from "@/components/dashboard/ballots/proposals/proposals-new"
  import proposalsView from "@/components/dashboard/ballots/proposals/proposals-view"
  import proposalsEdit from "@/components/dashboard/ballots/proposals/proposals-edit"
  import proposalsSearch from "@/components/dashboard/ballots/proposals/proposals-search"

  export default {
    children: [
      { path: '', component: proposalsSearch, name:"proposals-search"},
      { path: 'new', component: proposalsNew, name:"proposals-new"},
      { path: ':id', component: proposalsView, name:"proposals-view"},
      { path: ':id/edit', component: proposalsEdit, name:"proposals-edit"},
    ],
  }
</script>