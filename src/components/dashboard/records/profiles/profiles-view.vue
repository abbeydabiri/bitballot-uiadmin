<template>
    <section>
      <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
        <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
          Profiles / View
        </div>
        <router-link :to="{name:'profiles-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
          Go Back
        </router-link>
      </div>


      <notify class="mv2" :notifications="notifications"></notify>

      <div v-if="isFound" class="bg-light-gray br4 cf">
      
        <div class="f6 w-100 bg-light-gray gray bb bt  b--white-40 br4 br--top cf inline-flex items-center relative">
          <span class="w-20 tc pointer dim pa3 br4 br--left br--top " :class="tabProps.personClass" @click="toggleTab('person')">
            <span class="oi" data-glyph="person"></span>
            <label class="dn dib-ns">Personal</label>
          </span>
          <span class="w-20 tc pointer dim pa3 bl b--white-40 " :class="tabProps.documentationClass" @click="toggleTab('documentation')">
            <span class="oi" data-glyph="briefcase"></span>
            <label class="dn dib-ns">Documentation</label>
          </span>
          <span class="w-20 tc pointer dim pa3 bl b--white-40 " :class="tabProps.proposalsClass" @click="toggleTab('proposals')">
            <span class="oi" data-glyph="document"></span>
            <label class="dn dib-ns">Proposals</label>
          </span>
          <span class="w-20 tc pointer dim pa3 bl b--white-40 " :class="tabProps.positionsClass" @click="toggleTab('positions')">
            <span class="oi" data-glyph="tag"></span>
            <label class="dn dib-ns">Positions</label>
          </span>
          <span class="w-20 tc pointer dim pa3 bl b--white-40 br4 br--right br--top " :class="tabProps.settingsClass" @click="toggleTab('settings')">
            <span class="oi" data-glyph="cog"></span>
            <label class="dn dib-ns">Settings</label>
          </span>
        </div>
      
        <div class="bg-light-gray ph2 pb2 br4 br--bottom cf black">
          
          <div class="ph2" v-if="tabProps.personShow">
              <p class="w-100 cf  gray tracked"> PERSONAL Information</p>
              
                <div class="fl w-30-l pa1">
                  <img :src="record.Image" @error="record.Image = profileIcon" class="w5 br-100 bg-near-white pa1"/>
                </div>

                <div class="fl w-70-l">
                  
                  <div class="fl mv2 w-100 w-25-l pa1">
                    <label class="db fw4 lh-copy f6 black"> Title:</label>
                    <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Title}}</div>
                  </div>

                  <div class="fl mv2 w-100 w-25-l pa1">
                    <label class="db fw4 lh-copy f6 black">Surname:</label>
                    <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Lastname}}</div>
                  </div>
              
                  <div class="fl mv2 w-100 w-25-l pa1">
                    <label class="db fw4 lh-copy f6 black">First Name:</label>
                    <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Firstname}}</div>
                  </div>

                  <div class="fl mv2 w-100 w-25-l pa1">
                    <label class="db fw4 lh-copy f6 black">Middle Name:</label>
                    <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Othername}}</div>
                  </div>

                  <div class="fl mv2 w-100 w-25-l pa1">
                    <label class="db fw4 lh-copy f6 black">Date of Birth:</label>
                    <div class="pl1 pv1 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Dob}}</div>
                  </div>

                  <div class="fl mv2 w-100 w-25-l pa1">
                    <label class="db fw4 lh-copy f6 black">Gender:</label>
                    <div class="pl1 pv1 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Gender}}</div>
                  </div>

                  <div class="fl mv2 w-100 w-25-l pa1">
                    <label class="db fw4 lh-copy f6 black">Marital Status:</label>
                    <div class="pl1 pv1 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.MaritalStatus}}</div>
                  </div>

                  <div class="fl w-100 bt b--near-white"></div>
                    <div class="fl mv2 w-100 w-25-l pa1">
                      <label class="db fw4 lh-copy f6 black">Phone 1 </label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Phone}}</div>
                    </div>

                    <div class="fl mv2 w-100 w-25-l pa1">
                      <label class="db fw4 lh-copy f6 black">Phone 2 </label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Phone2}}</div>
                    </div>
                  
                    <div class="fl mv2 w-100 w-50-l pa1">
                      <label class="db fw4 lh-copy f6 black">Email Address</label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Email}}</div>
                    </div>


                    <div class="fl mv2 w-100 pa1">
                      <label class="db fw4 lh-copy f6 black">Home Address</label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 h3 overflow-scroll">&nbsp;{{record.Address}}</div>
                    </div>
                  </div>


                  <div class="fl w-100 bt b--near-white"></div>
                    <div class="fl mv2 w-100 w-25-l pa1">
                      <label class="db fw4 lh-copy f6 black">Mobile</label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Mobile}}</div>
                    </div>

                    <div class="fl mv2 w-100 w-75-l pa1">
                      <label class="db fw4 lh-copy f6 black">Email Address</label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Email}}</div>
                    </div>

                    <div class="fl mv2 w-40 pa1">
                      <label class="db fw4 lh-copy f6 black">Street</label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Street}}</div>
                    </div>

                    <div class="fl mv2 w-20 pa1">
                      <label class="db fw4 lh-copy f6 black">City</label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.City}}</div>
                    </div>

                    <div class="fl mv2 w-20 pa1">
                      <label class="db fw4 lh-copy f6 black">State</label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.State}}</div>
                    </div>
                    
                    <div class="fl mv2 w-20 pa1">
                      <label class="db fw4 lh-copy f6 black">Country</label>
                      <div class="pa2 ba b--white-50 br2 bg-near-white w-100 ">&nbsp;{{record.Country}}</div>
                    </div>
                  </div>
              

          </div>

          
          <div class="pa2" v-if="tabProps.documentationsShow">
              <p class="w-100 cf  gray tracked"> Documentations</p>
          </div>

          <div class="pa2" v-if="tabProps.proposalsShow">
              <p class="w-100 cf  gray tracked"> Proposals</p>
          </div>

          <div class="pa2" v-if="tabProps.positionsShow">
              <p class="w-100 cf  gray tracked"> Positions</p>
          </div>        

          <div class="pa2" v-if="tabProps.settingsShow">
              <p class="w-100 cf  gray tracked"> Settings</p>
          </div>


          <div class="w-100 mt3">
              <router-link :to="{name:'profiles-edit',params:{id:record.ID}}" class="fr ph3 pv2 br4 bg-green grow-ns pointer f6 white tc no-underline" >
                Edit
              </router-link>
          </div>
        </div>
      </div>

      <div v-else>
        <h1 class="black f6 tc ma5">record not found</h1>
      </div>

    </section>
</template>

<script type="text/javascript">
  import {HTTP} from "@/common"
  import {checkRedirect} from "@/common"
  import notify from "@/components/notify"
  import userIcon from "@/assets/user.png"

  export default {
    data() {return{
      url: "/api/profiles",
      record: {},
      notifications:[],
      isFound:false,
      userIcon,
      tabProps:{},
    }},
    components: { notify },
    created () {
      this.toggleTab("");
      this.getRecord(this.$route.params.id)
    },
    methods: {
      getRecord (id) {
        const app = this;
        HTTP.get(this.url+'?id='+id, {withCredentials: true}).then((response) => {
          this.record = response.data.Body
          this.notifications.push(response.data)
          setTimeout(checkRedirect(response.data),1500)

          if(response.data.Body.ID == id){
            app.isFound = true
          }
        }).catch((e) => { console.log(e) })
      },
      toggleTab(tabname) {
        switch(tabname) {
          default:
            this.tabProps = {personClass:"bg-gray white",personShow:true}
            break;
          case "occupation":
            this.tabProps = {occupationClass:"bg-gray white",occupationShow:true}
            break;
          case "ecclesia":
            this.tabProps = {ecclesiaClass:"bg-gray white",ecclesiaShow:true}
            break;
          case "designation":
            this.tabProps = {designationClass:"bg-gray white",designationShow:true}
            break;
          case "groupunit":
            this.tabProps = {groupunitClass:"bg-gray white",groupunitShow:true}
            break;
        }
      }
    }
  }
</script>
