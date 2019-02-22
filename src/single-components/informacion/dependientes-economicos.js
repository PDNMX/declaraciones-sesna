/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";

class InfoDependientes extends Component{

	render(){
		return(
			<div className="col-sm-9 col-sm-offset-3 sidecontent">
			<h2>Dependientes económicos: {this.items().length}</h2>
			<div className="row">
				<div className="col-sm-12">
					<div className="pdn_d_box">
						<div className="pdn_bar_container">
							<div className="pdn_bar conyuge"></div>
						</div>
						<p className="pdn_graph_label"><b className="pdn_graph_label_item label conyuge"></b> Cónyugue</p>
					</div>
				</div>
			</div>


		<div className="row">
			<div className="col-sm-12">
			  { this.items().map( (dependiente, i) =>
				<div className="pdn_d_box" key={"dependiente-" + i}>
					<div className="row pdn_border">
						<div className="col-sm-6">
							<p><span className={ 'label ' + dependiente.tipo_relacion.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}> {dependiente.tipo_relacion.valor}</span></p>
						</div>
					</div>
					<div className="row pdn_border">
						<div className="col-sm-6">
							<p className="pdn_label">Sector / Industria</p>
							<p className="pdn_data_p">{dependiente.sector_industria.valor}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Proveedor o Contratista de Gobierno</p>
							<p className="pdn_data_p">{!dependiente.proveedor_contratista_gobierno ? "No" : "Sí"}</p>
						</div>
					</div>

					<div className="row pdn_border">
						<div className="col-sm-6">
							<p className="pdn_label">Intereses en el mismo Sector/Industria</p>
							<p className="pdn_data_p">{!dependiente.tiene_intereses_mismo_sector_declarante ? "No" : "Sí"}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Desarrolla actividades de cabildeo en el mismo Sector/Industria</p>
							<p className="pdn_data_p">{!dependiente.desarrolla_cabildeo_sector_declarante ? "No" : "Sí"}</p>
						</div>
					</div>

					<p className="pdn_label">Observaciones</p>
					<p className="pdn_data_p">{dependiente.observaciones}</p>

					{ dependiente.beneficiario_programa_publico.map( (programa, j) =>
					<div key={"programa-" + i + "-" + j}>
						<div className="row pdn_border">
						<div className="col-sm-6">
							<p className="pdn_label">Beneficiaro de programa</p>
							<p className="pdn_data_p">{programa.nombre_programa}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Orden de Gobierno que otorga el apoyo</p>
							<p className="pdn_data_p">{programa.institucion_otorga_apoyo}</p>
						</div>
						</div>
						<div className="row">
						<div className="col-sm-6">
							<p className="pdn_label">Tipo de apoyo</p>
							<p className="pdn_data_p">{programa.tipo_apoyo.valor}</p>
						</div>
						<div className="col-sm-6">
							<p className="pdn_label">Valor del Apoyoo</p>
							<p className="pdn_data_p">${programa.valor_apoyo}</p>
						</div>
						</div>
					</div>
				  )}

				</div>
			  )}
			</div>
		</div>
	</div>
		);
	}

	items(){
    return this.props.profile.informacion_personal.dependientes_economicos;
  }

}

export default InfoDependientes;
