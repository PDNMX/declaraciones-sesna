<template>
	<div>
		<h3>inversiones, cuentas y valores</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.activos.inversiones_cuentas_valores;
			}
		}
	}
</script>