<template>
		<section>
			<div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
				<div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
					Profiles / New
				</div>
				<router-link :to="{name:'profiles-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
					Go Back
				</router-link>
			</div>

			<notify class="mv2" :notifications="notifications"></notify>


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
			
			<div class="bg-light-gray ph2 pb2 br4 br--bottom black fl w-100">
				
				<div class="ph2" v-if="tabProps.personShow">
					<p class="w-100 cf  gray tracked"> PERSONAL Information</p>


					<div class=" fl w-30-l pa1">
						<input type="file" class="dn" @change="uploadImageDisplay('Image')" ref="profileImage"/>
						<img :src="record.Image" @error="record.Image = profileIcon" class="w5 br-100 bg-near-white pa1" @click="uploadImage('profileImage')" />
					</div>

					<div class=" fl w-70-l">
						<div class="fl mv2 w-100 w-25-l pa1">
							<label class="db fw4 lh-copy f6 black"> Title:</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Title">
						</div>

						<div class="fl mv2 w-100 w-25-l pa1">
							<label class="db fw4 lh-copy f6 black">Surname:</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Lastname">
						</div>

						<div class="fl mv2 w-100 w-25-l pa1">
							<label class="db fw4 lh-copy f6 black">First Name:</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Firstname">
						</div>

						<div class="fl mv2 w-100 w-25-l pa1">
							<label class="db fw4 lh-copy f6 black">Middle Name:</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Othername">
						</div>

						<div class="fl mv2 w-100 w-25-l pa1">
							<label class="db fw4 lh-copy f6 black">Date of Birth:</label>
							<input class="pl1 pv1 ba b--silver br2 bg-white w-100 f7 " type="date" v-model="record.Dob">
						</div>

						<div class="fl mv2 w-100 w-25-l pa1">
							<label class="db fw4 lh-copy f6 black">Gender:</label>
							<select class="pa2 ba b--silver br2 bg-white w-100 " v-model="record.Gender">
								<option value="">Select Gender</option>
								<option>Male</option>
								<option>Female</option>
							</select>
						</div>

						<div class="fl mv2 w-100 w-25-l pa1">
							<label class="db fw4 lh-copy f6 black">Marital Status:</label>
							<select class="pa2 ba b--silver br2 bg-white w-100 " v-model="record.MaritalStatus">
								<option value="">Select Marital Status</option>
								<option value="Married">Married</option>
								<option value="Single">Single</option>
							</select>
						</div>

						<div class="fl w-100 bt b--near-white"></div>

						<div class="fl mv2 w-100 w-25-l pa1">
							<label class="db fw4 lh-copy f6 black">Mobile</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Mobile">
						</div>

						<div class="fl mv2 w-100 w-75-l pa1">
							<label class="db fw4 lh-copy f6 black">Email Address</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.Email">
						</div>

						<div class="fl mv2 w-40 pa1">
							<label class="db fw4 lh-copy f6 black">Street</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.Street">
						</div>

						<div class="fl mv2 w-20 pa1">
							<label class="db fw4 lh-copy f6 black">City</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.City">
						</div>

						<div class="fl mv2 w-20 pa1">
							<label class="db fw4 lh-copy f6 black">State</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.State">
						</div>
						
						<div class="fl mv2 w-20 pa1">
							<label class="db fw4 lh-copy f6 black">Country</label>
							<input class="pa2 ba b--silver br2 bg-white w-100 " type="email" v-model="record.Country">
						</div>
					</div>

					<div class="fl w-100 pa1">
						<div v-if="isSave" class="fr ph3 pv2 br4 bg-green pointer f6 white tc no-underline"  @click="save" >
							Submit
						</div>
					</div>
						
				</div>

				<div class="pa2" v-if="tabProps.documentationsShow">
					<p class="w-100 cf gray tracked"> Documentations: </p>
					<small>save profile record first to view linked documentations</small>
				</div>

				<div class="pa2" v-if="tabProps.proposalsShow">
					<p class="w-100 cf  gray tracked"> Proposals: </p>
					<small>save profile record first to view linked proposals</small>
				</div>

				<div class="pa2" v-if="tabProps.positionsShow">
					<p class="w-100 cf  gray tracked"> Positions: </p>
					<small>save profile record first to view linked positions</small>
				</div>        

				<div class="pa2" v-if="tabProps.settingsShow">
					<p class="w-100 cf  gray tracked"> Settings: </p>
					<small>save profile record first to view linked settings</small>
				</div>

			</div>

		</section>
</template>

<script type="text/javascript">
	import {HTTP} from "@/common"
	import {checkRedirect} from "@/common"
	import {displayImage} from "@/common"
	import notify from "@/components/notify"

	import profileIcon from "@/assets/user.png"

	export default {
		created(){this.toggleTab("")},
		data() {return{
			url: "/api/profiles",
			record: {Image:""},
			notifications:[],
			isSave:true,
			profileIcon,
			tabProps:{},
		}},
		components: { notify },
		methods: {
			uploadImageDisplay(field) {
				displayImage(event, this, field)
			},
			uploadImage(imageRef) {
				this.$refs[imageRef].click()
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
						app.record = {Image:""}
					}
				}).catch((e) => {
					console.log(e)
				})
			},
			toggleTab(tabname) {
				switch(tabname) {
					default:
						this.tabProps = {personClass:"bg-gray white",personShow:true}
						break;
					case "documentation":
						this.tabProps = {documentationsClass:"bg-gray white",documentationsShow:true}
						break;
					case "proposals":
						this.tabProps = {proposalsClass:"bg-gray white",proposalsShow:true}
						break;
					case "positions":
						this.tabProps = {positionsClass:"bg-gray white",positionsShow:true}
						break;
					case "settings":
						this.tabProps = {settingsClass:"bg-gray white",settingsShow:true}
						break;
				}
			}
		}
	}
</script>
