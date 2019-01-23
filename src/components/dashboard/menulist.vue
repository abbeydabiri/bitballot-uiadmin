<template>
  <div class="w-50 w-30-m w-20-l fl-l">
    <nav class="vh-100 overflow-y-scroll w-20-l fixed bg-near-white">
      <ul class="list pt0 ph0 mt0">
        <slot ></slot>

        <li class="ph2 bg-black dim" >
        <router-link to="/admin" class="no-underline ">
          <p class="h3 f7 inline-flex items-center mv0 white ">
            <span class="oi mr2" data-glyph="dashboard"></span>
            Dashboard
          </p>
        </router-link>
         </li>
       
          <menulistgroup title="Records" :submenu="submenu.records"/>
          <menulistgroup title="Ballot" :submenu="submenu.ballots"/>
          <menulistgroup title="Reports" :submenu="submenu.reports"/>
          <menulistgroup title="Security" :submenu="submenu.security"/>


          <li class="ph2 bg-black-80 dim" >
            <router-link  class="no-underline" to="/">
              <p class="h3 f7 inline-flex items-center mv0 white ">
                <span class="oi mr2" data-glyph="account-logout"></span>
                Logout
              </p>
            </router-link>
          </li>
      </ul>
    </nav>
    
    <div class="menulist"></div>
  </div>
</template>
<script type="text/javascript">
  import menulistgroupComponent from "@/components/dashboard/menulistgroup"
  const submenu = {
    records: [
			{to:"/admin/records/profiles",icon:"people",title:"Profiles"},
			{to:"/admin/records/documents",icon:"box",title:"Documents"},
      {to:"/admin/records/settings",icon:"cog",title:"Settings"},
    ],

    ballots: [
      {to:"/admin/ballots/voters",icon:"cog",title:"Voters"},
      {to:"/admin/ballots/candidates",icon:"cog",title:"Candidates"},
			{to:"/admin/ballots/positions",icon:"box",title:"Positions"},
			{to:"/admin/ballots/proposals",icon:"people",title:"Proposals"},
    ],

    reports: [
			{to:"/admin/reports/scores",icon:"list-rich",title:"Score Board"},
      {to:"/admin/reports/voters",icon:"list-rich",title:"Voters Roll"},
    ],
   
    security: [
      {to:'/admin/security/users',icon:'people',title:'Users'},
    ],
  }
  export default {
    data() {return{
      submenu
    }},
    components: {
      "menulistgroup": menulistgroupComponent,
    },
  }
</script>