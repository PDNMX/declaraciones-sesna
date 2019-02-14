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
				<div className="pdn_d_box">
					<p className="pdn_graph_label"><b className="pdn_graph_label_item label publico"></b> Ámbito público</p>
				</div>
			</div>
		</div>


		<div className="row">
			<div className="col-sm-12">
			  { this.props.items.map( (job, i) =>
				<div className="pdn_d_box" key={"job-" + i}>
					<div className="row">
						<div className="col-sm-6">
							<p className="pnd_box_note pdn_gray">Del {job.fecha_ingreso} al {job.fecha_salida}</p>
						</div>
						<div className="col-sm-6">
							<p className="right"><span className={ 'label ' + job.ambito.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}>Ámbito {job.ambito.valor}</span></p>
						</div>
					</div>
					<h3 className="pdn_data_p">{job.cargo_puesto}</h3>
					<div className="row pdn_border">
						<div className="col-sm-6">
							<p className="pdn_label">Institución</p>
							<p className="pdn_data_p">{job.nombre_institucion}<br/>
							<span className="pnd_box_note">{ job.direccion.vialidad.tipo_vial }	{ job.direccion.vialidad.nom_vial }	#{ job.direccion.numExt }
							<span>{ job.direccion.numExt ? ", int. #" + job.direccion.numExt : "" }</span><br/>
							{ job.direccion.localidad.nom_loc }, { job.direccion.municipio.nom_mun }<br/>
							{ job.direccion.entidad_federativa.nom_ent }. C.P. { job.direccion.cp }
							</span>
							</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Unidad Administrativa / Área</p>
							<p className="pdn_data_p">{job.unidad_administrativa}</p>
						</div>
					</div>
					{/* ends row */}
					<div className="row pdn_border">
						<div className="col-sm-6">
							<p className="pdn_label">Nivel de gobierno</p>
							<p className="pdn_data_p">{job.nivel_gobierno.valor}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Poder</p>
							<p className="pdn_data_p">{job.poder_ente.valor}</p>
						</div>
					</div>
					{/* ends row */}
					<div className="row pdn_border">
						<div className="col-sm-6">
							<p className="pdn_label">Sector/Industria</p>
							<p className="pdn_data_p">{job.sector_industria.valor}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Nivel del encargo</p>
							<p className="pdn_data_p">{job.nivel_encargo}</p>
						</div>
					</div>
					{/* ends row */}
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
