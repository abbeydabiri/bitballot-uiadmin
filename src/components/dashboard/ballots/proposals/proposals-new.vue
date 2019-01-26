<template>
		<section>
			<div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
				<div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
					Proposals / New
				</div>
				<router-link :to="{name:'proposals-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
					Go Back
				</router-link>
			</div>  

			<notify class="mv2" :notifications="notifications"></notify>

			<div class="pa2 bg-light-gray br4 cf w-100">
					
				<div class="mt3 pa2 w-100">
					<label class="db fw4 lh-copy f7 black">Select Status </label>
					<select class="pa1 ba b--silver br2 bg-white  " v-model="record.Workflow">
						<option></option>
						<option>enabled</option>
						<option>disabled</option>
					</select>
				</div>
		
				<div class="w-100">
					<div class="fl pa2 mt3 mt0-ns w-100">
						<label class="db fw4 lh-copy f6 black"> Title</label>
						<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Title">
					</div>
				</div>

				<div class="fl pa2 mt3 mt0-ns w-50 w-25-ns">
					<label class="db fw4 lh-copy f6 black"> Open Date</label>
					<input class="pa1-l pa2 ba b--silver br2 bg-white w-100 " type="date" v-model="record.OpenDateDay">
				</div>
				<div class="fl pa2 mt3 mt0-ns w-50 w-25-ns">
					<label class="db fw4 lh-copy f6 black"> Open Time</label>
					<input class="pa1-l pa2 ba b--silver br2 bg-white w-100 " type="time" v-model="record.OpenDateTime">
				</div>

				<div class="fl pa2 mt3 mt0-ns w-50 w-25-ns">
					<label class="db fw4 lh-copy f6 black"> End Date</label>
					<input class="pa1-l pa2 ba b--silver br2 bg-white w-100 " type="date" v-model="record.EndDateDay">
				</div>
				<div class="fl pa2 mt3 mt0-ns w-50 w-25-ns">
					<label class="db fw4 lh-copy f6 black"> End Time</label>
					<input class="pa1-l pa2 ba b--silver br2 bg-white w-100 " type="time" v-model="record.EndDateTime">
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
			url: "/api/proposals", 
			record: {}, 
			notifications:[], 
			isSave:true,
		}},
		components: { notify },
		methods: {
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