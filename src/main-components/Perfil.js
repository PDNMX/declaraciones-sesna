/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Informacion from "./Informacion";

import * as ConstClass from  '../ConstValues.js';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

class Perfil extends Component{

	constructor(props){
		super(props);
		this.state = {
			profile : null
		}

		this.getProfile = this.getProfile.bind(this);
		this.ingresosAnualesNetos = this.ingresosAnualesNetos.bind(this);

		this.getProfile(this.props.match.params.id);
	}


	/*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /  hace el llamado al api para obtener la info
  /  de un servidor público
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  getProfile(id){
    let conf = Object.assign({}, ConstClass.fetchObj);

    conf.body = JSON.stringify({id : id});

    fetch(ConstClass.endpoint, conf)
      .then(response => response.json())
      .then(d => {
        console.log("yaaaa:", d);
        this.setState({profile : d});
      });
  }

  ingresosAnualesNetos(){
		  	let i, all = [];
		  	for(i = 0; i < ConstClass.Incomefields.length; i++){
		  		if(this.state.profile.ingresos[ConstClass.Incomefields[i]].length ){
		  			all = all.concat(this.state.profile.ingresos[ConstClass.Incomefields[i]].map(d => d.ingreso_bruto_anual));
		  		}
		  	}

		  	all = all.filter(d => d.moneda.codigo == "MXN").map(d => d.valor);

		  	return all.reduce(reducer).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	}



	render(){
		if(!this.state.profile){
			console.log("nel");
			return null;
	  }
		return(
			<div>
<div v-if="profile">

	<div className="row pdn_card_m_info">
		<div className="col-sm-6">
			<div className="row">
				<div className="col-sm-4">
					<img src="/img/avatar.svg" />
				</div>
				<div className="col-sm-8">
					<h1>{this.state.profile.informacion_personal.informacion_general.nombres} {this.state.profile.informacion_personal.informacion_general.primer_apellido} {this.state.profile.informacion_personal.informacion_general.segundo_apellido}</h1>
					<p className="pdn_mail">{this.state.profile.informacion_personal.informacion_general.correo_electronico.laboral}</p>
					<p className="pdn_label">ENCARGO ACTUAL</p>
					<p>{this.state.profile.informacion_personal.datos_encargo_actual.empleo_cargo_comision}</p>
				</div>
			</div>
		</div>
		<div className="col-sm-3">

			<p className="pdn_label">ÁREA DE ADSCRIPCIÓN</p>
			<p>{this.state.profile.informacion_personal.datos_encargo_actual.area_adscripcion}</p>
			<p className="pdn_label">DEPENDENCIA</p>
			<p><strong>{this.state.profile.informacion_personal.datos_encargo_actual.ente_publico}</strong></p>
		</div>
		<div className="col-sm-3 right">
				<p className="pdn_label">INGRESOS ANUALES NETOS</p>
				<h3><span className="pdn_score">${this.ingresosAnualesNetos()}</span></h3>
				<p><small>Actualización: {this.state.profile.informacion_personal.informacion_general.fecha_declaracion} </small></p>
		</div>
	</div>

	<div className="row">
		<div className="col-sm-12">
			<nav className="pdn_main_nav">
				<ul>
					<li>
						<Link to={`/perfil/${this.props.match.params.id}/informacion`}><b className="pdn_i_ info"></b>Información</Link>
					</li>

					<li>
						<Link to={`/perfil/${this.props.match.params.id}/intereses`}><b className="pdn_i_ intereses"></b>Intereses</Link>
					</li>

					<li>
						<Link to={`/perfil/${this.props.match.params.id}/ingresos`}><b className="pdn_i_ ingresos"></b>Ingresos</Link>
					</li>

					<li>
						<Link to={`/perfil/${this.props.match.params.id}/activos`}><b className="pdn_i_ activos"></b>Activos</Link>
					</li>

					<li>
						<Link to={`/perfil/${this.props.match.params.id}/pasivos`}><b className="pdn_i_ pasivos"></b>Pasivos</Link>
					</li>
				</ul>
			</nav>
	  	</div>
	</div>


	<div className="row pnd_box">
		<Informacion profile={this.state.profile} />
	</div>


</div>

</div>
		);
	}
}

export default Perfil;
