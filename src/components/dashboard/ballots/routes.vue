<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import votersRoutes from "@/components/dashboard/ballots/voters/routes.vue"
  import candidatesRoutes from "@/components/dashboard/ballots/candidates/routes.vue"
  import positionsRoutes from "@/components/dashboard/ballots/positions/routes.vue"
  import proposalsRoutes from "@/components/dashboard/ballots/proposals/routes.vue"
  

  export default {
    children: [
        {
          path: 'voters',
          component: votersRoutes,
          children: votersRoutes.children
        },
        {
          path: 'candidates',
          component: candidatesRoutes,
          children: candidatesRoutes.children
        },
        {
          path: 'positions',
          component: positionsRoutes,
          children: positionsRoutes.children
        },
        {
          path: 'proposals',
          component: proposalsRoutes,
          children: proposalsRoutes.children
        },
    ],
  }
</script>