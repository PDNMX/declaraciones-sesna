/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";

class InfoExperiencia extends Component{
	render(){
		return(
			<div className="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Experiencia laboral</h2>
		
		<div className="row">
			<div className="col-sm-12">
			  { this.props.items.map( (job, i) =>
				<div className="pdn_d_box" key={"job-" + i}>
					<div className="row">
						<div className="col-sm-6">
							<p className="pdn_data_p">Del {job.fecha_ingreso} al {job.fecha_salida}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_data_p">Ámbito {job.ambito.valor}</p>
						</div>
					</div>
					<p className="pdn_data_p">{job.cargo_puesto}</p>
					<div className="row">
						<div className="col-sm-6">
							<p className="pdn_label">Institución</p>
							<p className="pdn_data_p">{job.nombre_institucion}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Unidad Administrativa / Área</p>
							<p className="pdn_data_p">{job.unidad_administrativa}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Nivel de gobierno</p>
							<p className="pdn_data_p">{job.nivel_gobierno.valor}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Poder</p>
							<p className="pdn_data_p">{job.poder_ente.valor}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Sector/Industria</p>
							<p className="pdn_data_p">{job.sector_industria.valor}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Nivel del encargo</p>
							<p className="pdn_data_p">{job.poder_ente.valor}</p>
						</div>
					</div>
					<p className="pdn_label">Funciones principales</p>
					{ job.funciones_principales.map( (d, j) =>
					<p className="pdn_data_p" key={"fun-prin-" + j}>{d.valor}</p>
				  )}
				</div>
			  )}
			</div>
	
		</div>
	</div>
		);
	}
}

export default InfoExperiencia;