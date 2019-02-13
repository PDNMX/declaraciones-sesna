/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";

class InfoGeneral extends Component{
	render(){
		return(
			<div>
	<div className="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Información general</h2>
		
		<div className="row">
			<div className="col-sm-7">
				<div className="pdn_d_box">
					<p className="pdn_label">Nacionalidades</p>
					<p className="pdn_data_p">
					  { this.props.items.nacionalidades.map(d => d.valor) }
				  </p>
					<p className="pdn_label">Lugar de nacimiento</p>
					<p className="pdn_data_p">{this.props.items.entidad_federativa_nacimiento.nom_ent}</p>
				</div>
			</div>
			<div className="col-sm-5">
				<div className="pdn_d_box">
					<p className="pdn_label">Estado Civil</p>
					<p className="pdn_data_p">{this.props.items.estado_civil.valor}</p>
					<p className="pdn_label">Regimen matrimonial</p>
					<p className="pdn_data_p">{this.props.items.regimen_matrimonial.valor}</p>
				</div>
			</div>
		</div>
	</div>
</div>
		);
	}
}

export default InfoGeneral;