<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import documentsNew from "@/components/dashboard/records/documents/documents-new"
  import documentsView from "@/components/dashboard/records/documents/documents-view"
  import documentsEdit from "@/components/dashboard/records/documents/documents-edit"
  import documentsSearch from "@/components/dashboard/records/documents/documents-search"

  export default {
    children: [
      { path: '', component: documentsSearch, name:"documents-search"},
      { path: 'new', component: documentsNew, name:"documents-new"},
      { path: ':id', component: documentsView, name:"documents-view"},
      { path: ':id/edit', component: documentsEdit, name:"documents-edit"},
    ],
  }
</script>