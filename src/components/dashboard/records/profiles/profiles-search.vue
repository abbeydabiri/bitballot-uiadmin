<template>
    <section>
      <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
        <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
          Profiles / Search
        </div>

        <router-link :to="{'name':'profiles-new'}" class="fl right-1 absolute ph2 pv1 br4 bg-red hover-bg-dark-red grow-ns pointer f6 white tc no-underline">
          + New
        </router-link>
      </div>

      <div class="cf pv3"></div>

      <div class="dn bg-black br2-l pa2 cf tc w-100">
        <div class="cf fl-ns  dib items-center inline-flex"> 
          <select class="fl-ns pa1 ba b--silver br2 bg-white ">
            <option></option>
            <option>enabled</option>
            <option>disabled</option>
          </select>
        </div>

        <div class="cf fl-ns w-100 w-20-ns dib items-center inline-flex bg-green hover-bg-dark-green br4 tc">
          <input type="text" id="searchText" v-model="search.text" placeholder="Search By:" class="bn f6 fl tracked bg-white black pa2 w-90 br4" style="min-width: 80px;">
          <span @click="searchRecords" class="oi mh2" data-glyph="magnifying-glass"></span>
        </div>
        

        

        <div class="cf fr-ns w-100 w-50-ns dib tr-ns tc pt2 h2">
          <span class=" f6">
            page
            <input type="number" class="w2 bn tc br2 bg-white" v-model="search.offset">
          </span>
          <span class=" f6 pl1">
            <input type="number" class="w2 bn tc br2 bg-white" v-model="search.limit">
            records
          </span>
        </div>
      </div>


      <table-display>
        <template slot="tableHead">
          <tr class="tl bg-black black f7">
            <td class="tc">
              	<span @click="searchRecords" class="oi bg-green white pv1 b db" data-glyph="magnifying-glass"></span>
            </td>
            <td class="">
              <input type="text" v-model="search.filter.fullname" placeholder="Fullname" class="ba b--black-10 f7 fl tracked bg-white black pa1 w-100 br1">
            </td>
            <td class="">
              <input type="text" v-model="search.filter.mobile" placeholder="Mobile" class="ba b--black-10 f7 fl tracked bg-white black pa1 w-100 br1">
            </td>
            <td class="">
              <input type="text" v-model="search.filter.email" placeholder="Email" class="ba b--black-10 f7 fl tracked bg-white black pa1 w-100 br1">
            </td>
            <td class="">
              <input type="text" v-model="search.filter.city" placeholder="City" class="ba b--black-10 f7 fl tracked bg-white black pa1 w-100 br1">
            </td>
            <td class="">
              <input type="text" v-model="search.filter.state" placeholder="State" class="ba b--black-10 f7 fl tracked bg-white black pa1 w-100 br1">
            </td>
          </tr>
          <tr class="tl bg-black white">
            <td class=""></td>
            <td class="pa2 ">Fullname</td>
            <td class="pa2 ">Mobile</td>
            <td class="pa2 ">Email</td>
            <td class="pa2 ">City</td>
            <td class="pa2 ">State</td>
          </tr>
        </template>
        <template slot="tableBody" v-if="recordList.length > 0">
          <tr class="stripe-dark" v-for="(profile, index) in recordList" :key="index">
            <td class="tc">
              <router-link data-glyph="eye" class="f7 oi br-pill bg-green hover-bg-dark-green ph1 pt1 near-white" :to="{name:'profiles-view',params:{id:profile.ID}}" > </router-link>
            </td>
            <td class=" pa2">
              <span class="f7">#{{index+1}}.</span> {{profile.Fullname}}
            </td>
            <td class=" pa2 f7">{{profile.Mobile}}</td>
            <td class=" pa2 f7">{{profile.Email}}</td>
            <td class=" pa2 f7">{{profile.City}}</td>
            <td class=" pa2 f7">{{profile.State}}</td>
          </tr>
        </template>
      </table-display>
      
      <div class="black fl w-50 dib tl pt2 h2 f7">
        <span class="bg-black white pa1 br1 fl">page: 
          <input type="number" class="w3 black bn tc br2 bg-white " v-model="search.offset">
        </span>
      </div>
      <div class="black fr w-50 dib tr pt2 h2 f7">
        <span class="bg-black white pa1 br1 fr">
          <input type="number" class="w3 black bn tc br2 bg-white " v-model="search.limit">
          records
        </span>
      </div>
            
            

      <div v-if="recordList.length < 1">
        <h1 class="black f6 tc ma5">There are currently no profiles within the system</h1>
      </div>

    </section>
</template>

<script type="text/javascript">
  import {HTTP} from "@/common"
  import tableDisplay from "@/components/dashboard/tableDisplay"

  export default {
    data() {return{
      url: "/api/profiles", recordList: [],
      search: {text: "", field: "Fullname", limit: 20, skip: 0, 
          filter:{fullname:"",phone:"",station:"",state:"",workstatus:""}
        },
    }},
    components: { tableDisplay },
    created() {this.searchRecords()},
    methods: {
      searchRecords() {
        this.isSearch = true
        this.recordList = []
        HTTP.post(this.url+'/search', this.search,{withCredentials: true}).then((response) => {
          
          this.recordList = response.data.Body
        }).catch((e) => { console.log(e) })
      },
    }
  }
</script>
