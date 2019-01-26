<template>
    <section>
        <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
            <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
                Positions / View
            </div>
            <router-link :to="{name:'positions-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
                Go Back
            </router-link>
        </div>  

        <notify class="mv2" :notifications="notifications"></notify>

        <div v-if="isFound" class="pa2 bg-light-gray br4 cf w-100">
                
            <div class="mt3 pa2 w-100">
                <label class="db fw4 lh-copy f7 black">Select Status </label>
                <select class="pa1 ba b--silver br2 bg-white  " disabled="disabled" v-model="record.Workflow">
                    <option></option>
                    <option>enabled</option>
                    <option>disabled</option>
                </select>
            </div>
    
            <div class="w-100">
                <div class="fl pa2 mt3 mt0-ns w-100 w-40-ns">
                    <label class="db fw4 lh-copy f6 black"> Title</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Title">
                </div>
            
                <div class="fl pa2 mt3 mt0-ns w-100 w-40-ns">
                    <label class=" fw4 lh-copy f6 black"> Proposal</label>
                    <label class=" fw4 lh-copy f7 red fr" @click="profileList=[],record.Proposal='',record.ProposalID=0">- clear</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " @keyup="searchProposal" type="text" disabled="disabled" v-model="record.Proposal">
                    <div class="relative w-100">
                        <small>
                            <ul class="bg-white absolute w-100 pa0 br2 br--bottom mt0 list">
                                <li class="pa2 black bt b--near-white" @click="record.ProposalID = proposal.ID, record.Proposal=proposal.Title, proposalList = []" v-for="(proposal, index) in proposalList" :key="index">
                                    <span class="f7">#{{index+1}}</span> {{proposal.Title}}
                                </li>
                            </ul>
                        </small>
                    </div>
                </div>

                <div class="fl pa2 mt3 mt0-ns w-100 w-20-ns">
                    <label class="db fw4 lh-copy f6 black"> Max Candidates</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="number" disabled="disabled" v-model.number="record.MaxCandidate">
                </div>
            </div>
    
            <div class="fl pa2 mt3 mt0-ns w-100">
                <label class="db fw4 lh-copy f6 black"> Description</label>
                <textarea class="pa2 ba b--silver br2 bg-white w-100" disabled="disabled" v-model="record.Description"></textarea>
            </div>


            <div class="fl w-100 mt3">
                <router-link :to="{name:'positions-edit',params:{id:record.ID}}" class="fr ph3 pv2 br4 bg-green grow-ns pointer f6 white tc no-underline" >
                    Edit
                </router-link>
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
	
	export default {
		data() {return{
			url: "/api/positions", 
			record: {}, 
			notifications:[], 
			isFound:false,
		}},
        components: { notify },
        created () { 
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
		}
	}
</script>