/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import {Typography, Grid, Button, Paper} from '@material-ui/core';

class InfoExperiencia extends Component{
	render(){
		return(
			<Grid container spacing={24} direction={'row-reverse'} className="sidecontent">
				<Grid item sm={9}>
					<h2>Experiencia laboral</h2>
					<Grid container spacing={24}>
						<Grid item sm={12}>
							<Paper className="pdn_d_box">
								<p className="pdn_graph_label"><b className="pdn_graph_label_item label publico"></b> Ámbito público</p>
							</Paper>
						</Grid>
					</Grid>

					<Grid container spacing={24}>
						<Grid item sm={12}>
							<Paper className="pdn_d_box">
								 { this.props.items.map( (job, i) =>
									 <Grid container spacing={24}>
										 <Grid item sm={6}>
										 <p className="pnd_box_note pdn_gray" key={"job-" + i}>Del {job.fecha_ingreso} al {job.fecha_salida}</p>
										 </Grid>
										 <Grid item sm={6}>
										 <p className="right"><span className={ 'label ' + job.ambito.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}>Ámbito {job.ambito.valor}</span></p>
										 </Grid>
										 <Grid item sm={12}>
										 	<h3 className="pdn_data_p">{job.cargo_puesto}</h3>
										 </Grid>
										 <Grid item sm={12} className="pdn_border">
										 	<Grid item sm={6}>
												<p className="pdn_label">Institución</p>
												<p className="pdn_data_p">{job.nombre_institucion}<br/>
												<span className="pnd_box_note">{ job.direccion.vialidad.tipo_vial }	{ job.direccion.vialidad.nom_vial }	#{ job.direccion.numExt }
												<span>{ job.direccion.numInt ? ", int. #" + job.direccion.numInt : "" }</span><br/>
												{ job.direccion.localidad.nom_loc }, { job.direccion.municipio.nom_mun }<br/>
												{ job.direccion.entidad_federativa.nom_ent }. C.P. { job.direccion.cp }
												</span>
												</p>
											</Grid>
											<Grid item sm={6}>
											<p className="pdn_label">Unidad Administrativa / Área</p>
											<p className="pdn_data_p">{job.unidad_administrativa}</p>
											</Grid>
										 </Grid>
									 </Grid>


									)}
							</Paper>
						</Grid>
					</Grid>

		<div className="row">
			<div className="col-sm-12">
			  { this.props.items.map( (job, i) =>
				<div className="pdn_d_box" key={"job-" + i}>


					<div >
						<div className="col-sm-6">

						</div>
						<div className="col-sm-6">

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
		</Grid>
		</Grid>
		);
	}

	items(){
    return this.props.profile.informacion_personal.experiencia_laboral;
  }

}

export default InfoExperiencia;
