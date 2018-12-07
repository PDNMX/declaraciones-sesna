<template>
	<div>
		<h3>Representación activa</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.intereses.representacion_activa;
			}
		}
	}
</script>