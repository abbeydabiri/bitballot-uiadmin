<template>
  <section class="">

    <loadingscreen/>
    
      <template>
        <div class="center mw7 mw6-l" >
          <article class="dt center tc vh-100 min-vh-100 w-100" style="max-width:350px">

            <div class="dtc v-mid">
              <img src="@/assets/logo.png" class="pb2 pt4 h4 tc dn" />

              <div class="cf  bg-transparent shadow-1 br1 center pa3 " style="" >

                <div class="w-100 fl">
                  <p class="cf db w-100 f5 pt2 pb2 black fw4">Sign in to BitBallot Admin</p>
                </div>


                <notify :notifications="notifications"></notify>

                <div  class="center">

                  <div class="cf w-100 pv3">
                    <input class="signin f6 fw3 bn pa2 dib w-100 white" type="text" placeholder="Username"  v-model="username" />
                  </div>

                  <div class="cf w-100 pv3">
                    <input class="signin f6 fw3 bn pa2 dib w-100 white" type="password" placeholder="Password"  v-model="password" />
                    <router-link to="/restore" class="cf no-underline">
                      <p class="fr gray f7">Forgot Password?</p>
                    </router-link>
                  </div>

                  <span to="/dashboard" class="cf tl no-underline inline-flex items-center pa2 white button relative pointer"  @click="login()">
                      SIGN IN
                      <img src="@/assets/arrow-right.png" class="pl3 fr"/>
                  </span>

                  <div class="cf w-100 pt4">
                      <p class="f7"> 2019 © BitBallot</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </template>
      
  </section>
</template>

<script type="text/javascript">
  import {HTTP} from '@/common';
  import {checkRedirect} from '@/common';
  import notify from "@/components/notify"
  import loadingscreen from "@/components/loading"

  export default {
    components: {
      "notify": notify,
      "loadingscreen": loadingscreen,
    },
    data() {return{
      lLoading:true, notifications:[], username:'',password:'',
    }},
    methods: {
      login() {
        HTTP.post('/api/login', {
          username:this.username,
          password:this.password
        },{withCredentials: true}).then(response => {
          console.log(response)
          this.notifications.push(response.data)
          setTimeout(checkRedirect(response.data),2000)
        }).catch(e => {
          console.log(e)
          this.error = e
          // this.errors.push(e)
        })
      }
    }
  }
</script>
