<template>
	<div>

	  <h1>El perfil</h1>
	  <div v-if="profile">
	  	<p>{{profile.informacion_personal.informacion_general.nombres}}</p>

	  	<ul>
	  		<li>
	  			<router-link :to="`/perfil/${userID}/informacion`">informacion</router-link>
	  		</li>

	  		<li>
	  			<router-link :to="`/perfil/${userID}/intereses`">intereses</router-link>
	  		</li>

	  		<li>
	  			<router-link :to="`/perfil/${userID}/ingresos`">ingresos</router-link>
	  		</li>

	  		<li>
	  			<router-link :to="`/perfil/${userID}/activos`">activos</router-link>
	  		</li>

	  		<li>
	  			<router-link :to="`/perfil/${userID}/pasivos`">pasivos</router-link>
	  		</li>
	  	</ul>
	  	<router-view></router-view>
	  </div>


  </div>
</template>

<script>
	export default {
		data(){
			return {
			};
		},
		mounted(){
			//console.log("yoh", this.userID, this.$parent.profile);
			//console.log(this.profile);
			if(!this.profile) this.$parent.getProfile(this.userID);
		},

		computed: {
			userID(){
			  return this.$parent.$route.params.id;
		  },

		  profile(){
		  	return this.$parent.profile;
		  }
		}
	}
</script>