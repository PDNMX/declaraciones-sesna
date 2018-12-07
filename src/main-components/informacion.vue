<template>
<div>
	<div class="col-sm-3 sidebar">
								<h2>Información personal</h2>
		<ul>
			<li>
	  	  <router-link :to="`/perfil/${userID}/informacion`">
	  	    Información general
	  	  </router-link>
	    </li>
	    <li>
	  	  <router-link :to="`/perfil/${userID}/informacion/puesto-actual`">
	  	    Puesto actual
	  	  </router-link>
	    </li>
	    <li>
	    	<router-link :to="`/perfil/${userID}/informacion/datos-curriculares`">
	  	    Datos curriculares
	  	  </router-link>
	    </li>
	    <li>
	    	<router-link :to="`/perfil/${userID}/informacion/experiencia-laboral`">
	  	    Experiencia laboral
	  	  </router-link>
	    </li>

	    <li>
	    	<router-link :to="`/perfil/${userID}/informacion/dependientes-economicos`">
	  	    Dependientes económicos
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