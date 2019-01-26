<template>
  <section >
    
      <article class="pa3 black" data-name="slab-stat-large">
        <div class="fl w-100">
          <h2 class="f5 mb3 mt4">Records</h2>
          <dl class="dib mr4 mt0">
            <dt class="db f6">Profiles</dt>
            <dd class="ml0 b f3 f2-ns">100
            </dd>
          </dl>
          <dl class="dib mr4 mt0">
            <dt class="db f6">Documents</dt>
            <dd class="ml0 b f3 f2-ns">100</dd>
          </dl>
        </div>

        <div class="fl w-100">
          <h2 class="f5 mb3 mt4">Ballots</h2>
          <dl class="dib mr4 mt0">
            <dt class="db f6">Voters</dt>
            <dd class="ml0 b f3 f2-ns">100
            </dd>
          </dl>
          <dl class="dib mr4 mt0">
            <dt class="db f6">Candidates</dt>
            <dd class="ml0 b f3 f2-ns">100</dd>
          </dl>
          <dl class="dib mr4 mt0">
            <dt class="db f6">Positions</dt>
            <dd class="ml0 b f3 f2-ns">100</dd>
          </dl>
          <dl class="dib mr4 mt0">
            <dt class="db f6">Proposals</dt>
            <dd class="ml0 b f3 f2-ns">100</dd>
          </dl>
        </div>

        <div class="fl w-100">
          <h2 class="f5 mb3 mt4">Reports</h2>
          <dl class="dib mr4 mt0">
            <dt class="db f6">Score Board</dt>
            <dd class="ml0 b f3 f2-ns">100
            </dd>
          </dl>
          <dl class="dib mr4 mt0">
            <dt class="db f6">Voters Roll</dt>
            <dd class="ml0 b f3 f2-ns">100</dd>
          </dl>
        </div>
      
    </article>


    


    
  </section>
</template>

<script type="text/javascript">

  import {HTTP} from '@/common';
  import menulistComponent from "@/components/dashboard/menulist"
  import tableDisplayComponent from "@/components/dashboard/table"
  import postingStatusComponent from "@/components/postingStatus"

  export default {
    data() {return{
      screen,
      searchRecordParam:"",
      wings: [],
      notifications: [],
    }},
    components: {
      "menulist": menulistComponent,
      "tableDisplay": tableDisplayComponent,
      "posting-status": postingStatusComponent,
    },
    created () {

      // ============ Get Wing Info =============
      // HTTP.post('/api/wings/search', {text: "", field: "", limit: 20, skip: 0}, {withCredentials: true})
      // .then((response) => {
      //   console.log(response.data)
      // })
      // .catch((e) => {
      //   console.log(e)
      // })

     
    }
  }

</script>
