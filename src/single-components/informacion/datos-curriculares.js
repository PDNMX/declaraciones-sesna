/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";

class InfoCurriculum extends Component{
	render(){
		return(
			<div className="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Datos curriculares</h2>
		
		<div className="row">
			<div className="col-sm-12">
			  {this.props.items.grados_academicos.map( (grado, i) =>
				<div className="pdn_d_box" key={"grado-" + i}>
					<p className="pdn_data_p">{grado.grado_obtenido} en {grado.carrera}</p>
					<p className="pdn_label">Institución Educativa </p>
					<p className="pdn_data_p">{grado.institucion_educativa}<br/>
						{grado.lugar_institucion_educativa.entidad.nom_ent}, {grado.lugar_institucion_educativa.pais.valor}
					</p>
					<div className="row">
						<div className="col-sm-6">
							<p className="pdn_label">Estatus</p>
							<p className="pdn_data_p">{grado.estatus.valor}</p>
							<p className="pdn_label">Documento obtenido</p>
							<p className="pdn_data_p">{grado.documento_obtenido.valor}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Año de conclusión</p>
							<p className="pdn_data_p">{this.props.profile.informacion_personal.datos_encargo_actual.nivel_gobierno.valor}</p>
							<p className="pdn_label">Cédula Profesional</p>
							<p className="pdn_data_p">{grado.cedula_profesional}</p>
						</div>
					</div>
				</div>
			  )}
			</div>
	
		</div>
	</div>
		);
	}
}

export default InfoCurriculum;