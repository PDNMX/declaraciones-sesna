<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Bienes muebles no registrables</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="mueble in items">
					<p class="pdn_label">Tipo de operación</p>
					<p class="pdn_data_p">{{mueble.tipo_operacion.valor}}</p>
					
					<p class="pdn_label">Tipo de bien</p>
					<p class="pdn_data_p">{{mueble.tipo_bien.valor}}</p>
					
					
					<p class="pdn_label">Descripción</p>
					<p class="pdn_data_p">{{mueble.descripcion}}</p>
					
					
					
					<p class="pdn_label">Titular del bien</p>
					<p class="pdn_data_p">{{mueble.titular_bien.valor}}</p>
					
					<p class="pdn_label">Porcentaje  de propiedad</p>
					<p class="pdn_data_p">{{mueble.porcentaje_propiedad}}</p>
					
					<p class="pdn_label">Forma  de adquisición</p>
					<p class="pdn_data_p">{{mueble.forma_adquisicion.valor}}</p>
					
					<p class="pdn_label">Relación con la persona que lo adquirió</p>
					<p class="pdn_data_p">{{mueble.relacion_quien_adquirio.valor}}</p>
					
					
					<p class="pdn_label">Fecha de adquisición</p>
					<p class="pdn_data_p">{{mueble.fecha_adquisicion}}</p>
					
					
					<p class="pdn_label">Precio de adquisición</p>
					<p class="pdn_data_p">${{mueble.precio_adquisicion.valor}} {{mueble.precio_adquisicion.moneda.codigo}} ({{mueble.precio_adquisicion.moneda.moneda}}) </p>
					
					
					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{mueble.observaciones}}</p>

		
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
				return this.profile.activos.bienes_muebles_no_registrables;
			}
		}
	}
</script>