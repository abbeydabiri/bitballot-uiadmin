<template >
  <section>
    <loadingscreen/>

    <div class="w-100 relative white">
      <nav @click="toggleMenu" class="w-100 center cf f6 f5-ns inline-flex items-center fw5 h3 bg-black fixed  z-max">
          <span  class="oi ml2 db dn-l" data-glyph="menu"></span>
          <span class=" white pl2 f4 f5-ns">
            BitBallot ADMIN
          </span>
          <router-link :to="{name: 'dashboard'}">
            <img src="@/assets/logo.png" class="h2  absolute right-0  top-0" />
          </router-link>

          <span class="right-1 absolute f7 tr">
            <small>ETH:</small> <b>{{ether.balance}}</b> </br>
            <small>{{ether.address}}</small>
          </span>
      </nav>
      
    
      
      <div class="cf">
        <div class="fl h3 w-100"></div>
        <menulist class="top-0 left-0 vh-100 z-max fixed absolute relative-l dn db-l" :class="{'slideInLeft':lShow, 'slideOutLeft':!lShow}">
          <template slot="default">
            <li class="ph2 bg-black-80 dim pointer">              
              <p class="h3 f7 inline-flex items-center mv0 white db dn-l w-100" @click="toggleMenu">
                <span class="oi mr2" data-glyph="account-logout"></span>
                CLOSE
              </p>
            </li>
          </template>
        </menulist>
        
        <div class="min-vh-100 white w-100 w-80-l fl pa2 pa3-l center bg-white br2 relative ">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- App specific objects  -->
<script type="text/javascript">
  import {HTTP} from '@/common';
  import loadingscreen from "@/components/loading"
  import menulist from "@/components/dashboard/menulist"

  export default {
    name: "menuBased",
    data() {return{
		lShow:false,
		slideOut:"dn",
		ether: { balance:0, address:"" },
		setIntervalId:{},
    }},
    methods: {
		toggleMenu() {
			this.lShow = !this.lShow
			document.getElementsByTagName("html")[0].classList.toggle('overflow-hidden');
		},
		checkBalance() {
			const app = this;
			HTTP.get('/api/eth/balance', {withCredentials: true}) .then((response) => {
				if (response.data.Body !== null ) {
					app.ether = response.data.Body
					app.ether.address = app.ether.address.substring(0,8)+"....."+ app.ether.address.substring(app.ether.address.length-8,app.ether.address.length)
				}
			}) .catch((e) => { console.log(e) })
		}
    },
    components: {
      menulist,loadingscreen
    },
    created() {	
		this.checkBalance()
		this.setIntervalId = setInterval(this.checkBalance, 15000);
    },
    beforeDestroy(){
		clearInterval(this.setIntervalId);
    },

  }
</script>