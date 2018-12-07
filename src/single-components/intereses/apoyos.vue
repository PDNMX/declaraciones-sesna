<template>
	<div>
		<h3>apoyos</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.intereses.apoyos_beneficios_publicos;
			}
		}
	}
</script>