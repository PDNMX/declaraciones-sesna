<template>
	<div>
		<h3>Experiencia laboral</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},
			items(){
				return this.profile.informacion_personal.experiencia_laboral;
			}
		}
	}
</script>