<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import candidatesNew from "@/components/dashboard/ballots/candidates/candidates-new"
  import candidatesView from "@/components/dashboard/ballots/candidates/candidates-view"
  import candidatesEdit from "@/components/dashboard/ballots/candidates/candidates-edit"
  import candidatesSearch from "@/components/dashboard/ballots/candidates/candidates-search"

  export default {
    children: [
      { path: '', component: candidatesSearch, name:"candidates-search"},
      { path: 'new', component: candidatesNew, name:"candidates-new"},
      { path: ':id', component: candidatesView, name:"candidates-view"},
      { path: ':id/edit', component: candidatesEdit, name:"candidates-edit"},
    ],
  }
</script>