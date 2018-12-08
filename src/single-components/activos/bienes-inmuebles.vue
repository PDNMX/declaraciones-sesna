<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Bienes inmuebles</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="inmueble in items">
					<p class="pdn_label">Tipo de operación</p>
					<p class="pdn_data_p">{{inmueble.tipo_operacion.valor}}</p>
					
					<p class="pdn_label">Tipo de bien</p>
					<p class="pdn_data_p">{{inmueble.tipo_bien.valor}}</p>
					
					
					<p class="pdn_label">Superficie del terreno</p>
					<p class="pdn_data_p">{{inmueble.superficie_terreno}}</p>
					
					<p class="pdn_label">Superficie de construcción</p>
					<p class="pdn_data_p">{{inmueble.superficie_construccion}}</p>
					
					<p class="pdn_label">Porcentaje  de propiedad</p>
					<p class="pdn_data_p">{{inmueble.porcentaje_propiedad}}</p>
					
					<p class="pdn_label">Forma  de adquisición</p>
					<p class="pdn_data_p">{{inmueble.forma_adquisicion.valor}}</p>
					
					<p class="pdn_label">Relación con la persona que lo adquirió</p>
					<p class="pdn_data_p">{{inmueble.relacion_persona_adquirio.valor}}</p>
					
					<p class="pdn_label">Sector/Industria</p>
					<p class="pdn_data_p">{{inmueble.sector_industria.valor}}</p>
					
					<p class="pdn_label">Fecha de adquisición</p>
					<p class="pdn_data_p">{{inmueble.fecha_adquisicion}}</p>
					
					
					<p class="pdn_label">Precio de adquisición</p>
					<p class="pdn_data_p">${{inmueble.precio_adquisicion.valor}} {{inmueble.precio_adquisicion.moneda.codigo}} ({{inmueble.precio_adquisicion.moneda.moneda}}) </p>
					
					<p class="pdn_label">Valor Catastral</p>
					<p class="pdn_data_p">${{inmueble.valor_catastral}}</p>
					
					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{inmueble.observaciones}}</p>
		
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
				return this.profile.activos.bienes_inmuebles;
			}
		}
	}
</script>