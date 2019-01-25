<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Deudas</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="pasivo in items">
				<p class="pdn_label">Tipo de operación</p>
				<p class="pdn_data_p">{{pasivo.tipo_operacion.valor}}</p>
				<p class="pdn_label">Tipo de acreedor</p>
				<p class="pdn_data_p">{{pasivo.tipo_acreedor.valor}}</p>
				<p class="pdn_label">Tipo de adeudo</p>
				<p class="pdn_data_p">{{pasivo.tipo_adeudo.valor}}</p>
				<p class="pdn_label">País</p>
				<p class="pdn_data_p">{{pasivo.nacional_extranjero.valor}}</p>
				<p class="pdn_label">Sector o industria</p>
				<p class="pdn_data_p">{{pasivo.sector_industria.valor}}</p>
				<p class="pdn_label">Fecha de adeudo</p>
				<p class="pdn_data_p">{{pasivo.fecha_adeudo}}</p>
				<p class="pdn_label">Monto original</p>
				<p class="pdn_data_p">{{pasivo.monto_original+' '+pasivo.tipo_moneda.codigo}}</p>
				<p class="pdn_label">Moneda</p>
				<p class="pdn_data_p">{{pasivo.monto_original+' '+pasivo.tipo_moneda.moneda}}</p>
				<p class="pdn_label">Tasa de interés</p>
				<p class="pdn_data_p">{{pasivo.tasa_interes}}</p>
				<p class="pdn_label">Saldo pendiente</p>
				<p class="pdn_data_p">{{pasivo.saldo_pendiente}}</p>
				<p class="pdn_label">Montos abonados</p>
				<p class="pdn_data_p" v-for ="monto in pasivo.montos_abonados"><span>{{monto}}</span></p>
				<p class="pdn_label">Plazo del adeudo</p>
				<p class="pdn_data_p">{{pasivo.plazo_adeudo+' '+pasivo.unidad_medida_adeudo.valor}}</p>
				<p class="pdn_label">Titularidad de la deuda</p>
				<p class="pdn_data_p">{{pasivo.titularidad_deuda.valor}}</p>
				<p class="pdn_label">Porcentaje de adeudo del titular</p>
				<p class="pdn_data_p">{{pasivo.porcentaje_adeudo_titular}}%</p>
				<p class="pdn_label">Garantía</p>
				<p class="pdn_data_p" v-if="pasivo.garantia">Sí</p>
				<p class="pdn_data_p" v-else>No</p>
				<p class="pdn_label">Observaciones</p>
				<p class="pdn_data_p">{{pasivo.observaciones}}</p>
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
				return this.profile.pasivos.deudas;
			}
		}
	}
</script>
