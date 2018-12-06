<template>
	<div>
		<h2>Información</h2>
		<ul>
			<li>
	  	  <router-link :to="`/perfil/${userID}/informacion`">
	  	    información general
	  	  </router-link>
	    </li>
	    <li>
	  	  <router-link :to="`/perfil/${userID}/informacion/puesto-actual`">
	  	    puesto actual
	  	  </router-link>
	    </li>
	    <li>
	    	<router-link :to="`/perfil/${userID}/informacion/datos-curriculares`">
	  	    datos curriculares
	  	  </router-link>
	    </li>
	  </ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		computed : {
			userID(){
				return this.$parent.userID;
			},
			profile(){
		  	return this.$parent.profile;
		  }
		}
	}
</script>