<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import customersNew from "@/components/dashboard/profiles/customers/customers-new"
  import customersView from "@/components/dashboard/profiles/customers/customers-view"
  import customersEdit from "@/components/dashboard/profiles/customers/customers-edit"
  import customersSearch from "@/components/dashboard/profiles/customers/customers-search"

  export default {
    children: [
      { path: '', component: customersSearch, name:"customers-search"},
      { path: 'new', component: customersNew, name:"customers-new"},
      { path: ':id', component: customersView, name:"customers-view"},
      { path: ':id/edit', component: customersEdit, name:"customers-edit"},
    ],
  }
</script>
