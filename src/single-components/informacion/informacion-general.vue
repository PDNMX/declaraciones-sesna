<template>
	<div>
		<h3>Información general</h3>
		<p>
		  correo:
		  {{profile.informacion_personal.informacion_general.correo_electronico.laboral}}
	  </p>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			}
		}
	}
</script>