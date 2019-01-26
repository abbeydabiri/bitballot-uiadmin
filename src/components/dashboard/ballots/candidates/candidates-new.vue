<template>
		<section>
			<div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
				<div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
					Candidates / New
				</div>
				<router-link :to="{name:'candidates-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
					Go Back
				</router-link>
			</div>  

			<notify class="mv2" :notifications="notifications"></notify>

			<div class="pa2 bg-light-gray br4 cf w-100">
					
				<div class="mt3 pa2 w-100">
					<label class="db fw4 lh-copy f7 black">Select Status </label>
					<select class="pa1 ba b--silver br2 bg-white  " v-model="record.Workflow">
						<option></option>
						<option>pending</option>
						<option>accredited</option>
						<option>rejected</option>
					</select>
				</div>

				<div class="w-100">
					<div class="fl pa2 mt3 mt0-ns w-100 w-50-ns">
						<label class=" fw4 lh-copy f6 black"> Candidate</label>
						<label class=" fw4 lh-copy f7 red fr" @click="profileList=[],record.Candidate='',record.CandidateID=0">- clear</label>
						<input class="pa2 ba b--silver br2 bg-white w-100 " @keyup="searchCandidate" type="text" v-model="record.Candidate">
						<div class="relative w-100">
							<small>
								<ul class="bg-white absolute w-100 pa0 br2 br--bottom mt0 list">
									<li class="pa2 black bt b--near-white" @click="record.CandidateID = candidate.ID, record.Candidate=candidate.Fullname, candidateList = []" v-for="(candidate, index) in candidateList" :key="index">
										<span class="f7">#{{index+1}}</span> {{candidate.Fullname}}
									</li>
								</ul>
							</small>
						</div>
					</div>

					<div class="fl pa2 mt3 mt0-ns w-100 w-50-ns">
						<label class=" fw4 lh-copy f6 black"> Position</label>
						<label class=" fw4 lh-copy f7 red fr" @click="profileList=[],record.Position='',record.PositionID=0">- clear</label>
						<input class="pa2 ba b--silver br2 bg-white w-100 " @keyup="searchPosition" type="text" v-model="record.Position">
						<div class="relative w-100">
							<small>
								<ul class="bg-white absolute w-100 pa0 br2 br--bottom mt0 list">
									<li class="pa2 black bt b--near-white" @click="record.PositionID = position.ID, record.Position=position.Title, positionList = []" v-for="(position, index) in positionList" :key="index">
										<span class="f7">#{{index+1}}</span> {{position.Title}} <small class="i">({{position.Proposal}})</small>
									</li>
								</ul>
							</small>
						</div>
					</div>

				</div>
		
				<div class="fl pa2 mt3 mt0-ns w-100">
					<label class="db fw4 lh-copy f6 black"> Description</label>
					<textarea class="pa2 ba b--silver br2 bg-white w-100" v-model="record.Description"></textarea>
				</div>


				<div class="fl w-100 mt3">
					<div v-if="isSave" class="fr ph3 pv2 br4 bg-green grow-ns pointer f6 white tc no-underline"  @click="save" >
						Submit
					</div>
				</div>
					
			</div>

		</section>
</template>

<script type="text/javascript">
	import {HTTP} from "@/common"
	import {checkRedirect} from "@/common"
	import notify from "@/components/notify"
	
	export default {
		data() {return{
			url: "/api/candidates", 
			record: {}, 
			notifications:[], 
			candidateList:[],
			positionList:[],
			isSave:true,
		}},
		components: { notify },
		methods: {
			searchCandidate() {
				const app = this;
				const url = "/api/profiles/search";
				const search = {text: app.record.Candidate, field: "Fullname", limit: 20, skip: 0};
				HTTP.post(url, search,{withCredentials: true}).then((response) => {
					app["candidateList"] = response.data.Body
				}).catch((e) => { console.log(e) })
			},
			searchPosition() {
				const app = this;
				const url = "/api/positions/search";
				const search = {text: app.record.Position, field: "Title", limit: 20, skip: 0};
				HTTP.post(url, search,{withCredentials: true}).then((response) => {
					app["positionList"] = response.data.Body
				}).catch((e) => { console.log(e) })
			},
			
			save () {
				const app = this;
				app.isSave = false;
				HTTP.post(app.url, app.record, {withCredentials: true})
				.then((response) => {
					this.notifications.push(response.data)
					setTimeout(checkRedirect(response.data),1500)
					app.isSave = true;
					if(response.data.Body !== null){
						app.record = {}
					}
				}).catch((e) => {
					console.log(e)
				})
			},
		}
	}
</script>