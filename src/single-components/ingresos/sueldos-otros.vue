<template>
	<div>
		<h3>Sueldos y Salarios por otros empleos</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.ingresos.sueldos_salarios_otros_empleos;
			}
		}
	}
</script>