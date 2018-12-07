<template>
	<div>
		<h3>bienes muebles no registrables</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.activos.bienes_muebles_no_registrables;
			}
		}
	}
</script>