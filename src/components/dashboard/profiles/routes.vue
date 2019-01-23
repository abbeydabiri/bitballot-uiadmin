<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import customersRoutes from "@/components/dashboard/profiles/customers/routes.vue"
  import partnersRoutes from "@/components/dashboard/profiles/partners/routes.vue"
  import staffsRoutes from "@/components/dashboard/profiles/staffs/routes.vue"
  import documentsRoutes from "@/components/dashboard/profiles/documents/routes.vue"
  import settingsRoutes from "@/components/dashboard/profiles/settings/routes.vue"
  

  export default {
    children: [
      {
        path: 'customers',
        component: customersRoutes,
        children: customersRoutes.children
      },
      {
        path: 'staffs',
        component: staffsRoutes,
        children: staffsRoutes.children
      },
      {
        path: 'partners',
        component: partnersRoutes,
        children: partnersRoutes.children
      },
      {
        path: 'documents',
        component: documentsRoutes,
        children: documentsRoutes.children
      },
      {
        path: 'settings',
        component: settingsRoutes,
        children: settingsRoutes.children
      },
    ],
  }
</script>