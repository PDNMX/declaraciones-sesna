<template>
<div>
	<div class="col-sm-3 sidebar">
		<h2>Intereses</h2>
		<ul>
			<li>
	  	  <router-link :to="`/perfil/${userID}/intereses`">
	  	    Empresas o asociaciones
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/intereses/membresias`">
	  	    Membresías
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/intereses/apoyos`">
	  	    Apoyos
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/intereses/representacion-activa`">
	  	    representación activa
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/intereses/representacion-pasiva`">
	  	    representación pasiva
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/intereses/socios`">
	  	    Socios comerciales
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/intereses/clientes`">
	  	    Clientes principales
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/intereses/otras`">
	  	    Otras partes relacionadas
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/intereses/beneficios`">
	  	    Beneficios gratuitos
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