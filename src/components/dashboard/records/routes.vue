<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import profilesRoutes from "@/components/dashboard/records/profiles/routes.vue"
  import settingsRoutes from "@/components/dashboard/records/settings/routes.vue"
  import documentsRoutes from "@/components/dashboard/records/documents/routes.vue"
  

  export default {
    children: [
        {
          path: 'profiles',
          component: profilesRoutes,
          children: profilesRoutes.children
        },
        {
          path: 'settings',
          component: settingsRoutes,
          children: settingsRoutes.children
        },
        {
          path: 'documents',
          component: documentsRoutes,
          children: documentsRoutes.children
        },
    ],
  }
</script>