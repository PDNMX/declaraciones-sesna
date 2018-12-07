<template>
	<div>
		<h3>empresas sociedades asociaciones</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.intereses.empresas_sociedades_asociaciones;
			}
		}
	}
</script>