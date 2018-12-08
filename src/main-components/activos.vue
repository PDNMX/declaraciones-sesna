<template>
<div>
	<div class="col-sm-3 sidebar">
		<h2>Activos</h2>
		<ul>
			
			<li>
	  	  <router-link :to="`/perfil/${userID}/activos`">
	  	    bienes inmuebles
	  	  </router-link>
	    </li>
	    
	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/bienes-muebles`">
	  	    bienes muebles registrables
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/bienes-muebles-no-registrables`">
	  	    bienes muebles no registrables
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/inversiones`">
	  	    inversiones
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/efectivo-y-metales`">
	  	    efectivo y metales
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/fideicomisos`">
	  	    fideicomisos
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/bienes-intangibles`">
	  	    bienes intangibles
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/cuentas-por-cobrar`">
	  	    cuentas por cobrar
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/beneficios-en-especie`">
	  	    Uso o Beneficios en Especie Propiedad de un Tercero
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