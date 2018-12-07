<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Sueldos y Salarios por el Encargo Público</h2>
		
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="sueldo in items">
					<p class="pdn_label">Ente público</p>
					<p class="pdn_data_p">{{sueldo.ente_publico}}</p>
					
					
					<p class="pdn_data_p">{{sueldo}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.ingresos.sueldos_salarios_publicos;
			}
		}
	}
</script>