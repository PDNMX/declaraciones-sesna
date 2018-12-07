<template>
	<div>
		<h3>Uso o Beneficios en Especie Propiedad de un Tercero</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.activos.uso_especie_propiedad_tercero;
			}
		}
	}
</script>