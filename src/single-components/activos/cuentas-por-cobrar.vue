<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Cuentas por cobrar</h2>
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