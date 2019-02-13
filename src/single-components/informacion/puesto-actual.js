/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";

class InfoPuesto extends Component{
	render(){
		return(
			<div className="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Puesto actual</h2>

		<div className="row">
			<div className="col-sm-8">
				<div className="pdn_d_box">
					<h3 className="pdn_data_p">{ this.props.profile.informacion_personal.datos_encargo_actual.empleo_cargo_comision}</h3>
					<p className="pdn_label">Área de adscripción</p>
					<p className="pdn_data_p pnd_address_note"><strong>{ this.props.profile.informacion_personal.datos_encargo_actual.area_adscripcion}</strong><br/>
					{ this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.vialidad.tipo_vial }	{ this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.vialidad.nom_vial }	#{ this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.numExt }
					<span>{ this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.numExt ? ", int. #" + this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.numExt : "" }</span><br/>
					{ this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.localidad.nom_loc }, { this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.municipio.nom_mun }<br/>
					{ this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.entidad_federativa.nom_ent }. C.P. { this.props.profile.informacion_personal.datos_encargo_actual.direccion_encargo.cp }
					</p>
					<p className="pdn_label">Dependencia</p>
					<p className="pdn_data_p"><a href="#">{ this.props.profile.informacion_personal.datos_encargo_actual.ente_publico}</a></p>
					<p className="pdn_label">Nivel de gobierno</p>
					<p className="pdn_data_p">{ this.props.profile.informacion_personal.datos_encargo_actual.nivel_gobierno.valor}</p>
					<p className="pdn_label">Poder</p>
					<p className="pdn_data_p">{ this.props.profile.informacion_personal.datos_encargo_actual.poder_juridico.valor}</p>
					<p className="pdn_label">Sector/Industria</p>
					<p className="pdn_data_p">{ this.props.profile.informacion_personal.datos_encargo_actual.sector_industria.valor}</p>
				</div>
			</div>
			<div className="col-sm-4">
				<div className="pdn_d_box">
					<p className="pdn_data_p">
					  { !this.props.items.contratado_honorarios ? "Sin contrato por honorarios" : "Contrato por honorarios"}
					</p>
					<p className="pdn_label">Nivel de encargo</p>
					<p className="pdn_data_p"><a href="#">{this.props.items.nivel_encargo}</a></p>
					<p className="pdn_label">Funciones</p>

				  {this.props.items.funciones_principales.map( (d,i) =>
				    <p className="pdn_data_p" key={"funciones-p-" + i}>{d.valor}</p>
				  )}

					<p className="pdn_label">Fecha de ingreso</p>
					<p className="pdn_data_p">{this.props.items.fecha_posesion}</p>
				</div>
			</div>
		</div>
	</div>
		);
	}
}

export default InfoPuesto;
