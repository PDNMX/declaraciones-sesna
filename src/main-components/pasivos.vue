<template>
	<div>
		<h2>Pasivos</h2>
		<ul>
			<li>
	  	  <router-link :to="`/perfil/${userID}/pasivos`">
	  	    deduas
	  	  </router-link>
	    </li>
	    <li>
	  	  <router-link :to="`/perfil/${userID}/pasivos/otras-obligaciones`">
	  	    otras obligaciones
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