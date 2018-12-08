<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Uso o Beneficios en Especie Propiedad de un Tercero</h2>
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