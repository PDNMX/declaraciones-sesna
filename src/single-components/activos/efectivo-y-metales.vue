<template>
	<div>
		<h3>efectivo y metales</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.activos.efectivo_metales;
			}
		}
	}
</script>