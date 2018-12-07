<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Dependientes económicos</h2>
		
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box"  v-for="dependiente in items">
					<p class="pdn_data_p">{{dependiente.tipo_relacion.valor}}</p>
				{{dependiente}}
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
				return this.profile.informacion_personal.datos_dependientes_economicos;
			}
		}
	}
</script>