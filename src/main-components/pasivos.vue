<template>
<div>
	<div class="col-sm-3 sidebar">
		<h2>Pasivos</h2>
		<ul>
			<li>
	  	  <router-link :to="`/perfil/${userID}/pasivos`">
	  	    Deudas
	  	  </router-link>
	    </li>
	    <li>
	  	  <router-link :to="`/perfil/${userID}/pasivos/otras-obligaciones`">
	  	    Otras obligaciones
	  	  </router-link>
	    </li>
	  </ul>
	</div>
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