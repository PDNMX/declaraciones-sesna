<template>
	<div>
		<h3>Dependientes económicos</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},
			items(){
				return this.profile.informacion_personal.datos_dependientes_economicos;
			}
		}
	}
</script>