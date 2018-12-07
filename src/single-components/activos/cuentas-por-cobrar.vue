<template>
	<div>
		<h3>cuentas por cobrar</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.activos.cuentas_por_cobrar;
			}
		}
	}
</script>