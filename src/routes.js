import Vue from "vue"
import Router from "vue-router"

//splash-screen
// import loadingComponent from "@/components/loading"

//sign-up&in
import signinComponent from "@/components/auth/signin"
import restoreComponent from "@/components/auth/restore"

//dashboard
import menuBasedComponent from "@/components/menuBased"

import dashboardComponent from "@/components/dashboard/home"


import recordsRoutes from "@/components/dashboard/records/routes.vue"
// import reportsRoutes from "@/components/dashboard/reports/routes.vue"
// import supplychainRoutes from "@/components/dashboard/supplychain/routes.vue"
// import pointofsaleRoutes from "@/components/dashboard/pointofsale/routes.vue"
// import marketingRoutes from "@/components/dashboard/marketing/routes.vue"
// import maintenanceRoutes from "@/components/dashboard/maintenance/routes.vue"
import securityRoutes from "@/components/dashboard/security/routes.vue"


import {
  checkPermissions
} from "@/common.js"

Vue.use(Router)
const router =  new Router({
    mode: "hash",
    routes: [
      { path: '', component: signinComponent },
      { path: '/signin', component: signinComponent },
      { path: '/restore', component: restoreComponent },

      { path: '/admin', component: menuBasedComponent,
        children: [

          { path: '', component: dashboardComponent, name: 'dashboard'},
          
          { path: 'records', component: recordsRoutes, children: recordsRoutes.children }, 
          
          { path: 'security', component: securityRoutes, children: securityRoutes.children },
      ] }

    ]
  })

router.beforeResolve((to, from, next) => {
  // checkPermissions();
  setTimeout(function () {
    next();
  }, 150);
  
})

export {router}