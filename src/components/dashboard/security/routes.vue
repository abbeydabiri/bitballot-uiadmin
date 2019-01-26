<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import databaseRoutes from "@/components/dashboard/security/database/routes.vue"
  import usersRoutes from "@/components/dashboard/security/users/routes.vue"

  export default {
    children: [
        {
          path: 'database',
          component: databaseRoutes,
          children: databaseRoutes.children
        },
        {
          path: 'users',
          component: usersRoutes,
          children: usersRoutes.children
        },
    ],
  }
</script>