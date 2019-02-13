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
import Pasivos from "./Pasivos";
import Intereses from "./Intereses";
import Activos from "./Activos";

/*
import Ingresos from "./Ingresos";
import Activos from "./Activos";
*/

import * as ConstClass from  '../ConstValues.js';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class Perfil extends Component{
	/*
	 * C O N S T R U C T O R
	 * ----------------------------------------------------------------------
	 */
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
	 * R E N D E R
	 * ----------------------------------------------------------------------
	 */
	render(){
		if(!this.state.profile){
			console.log("nel"); 
			return null;
	  } 
		return(
			<div>
<div v-if="profile">

	<div className="row pdn_card_m_info">
		<div className="col-sm-5">
			<div className="row">
				<div className="col-sm-4">
					<img src="/img/user.svg" />
				</div>
				<div className="col-sm-8">
					<h1>{this.state.profile.informacion_personal.informacion_general.nombres} {this.state.profile.informacion_personal.informacion_general.primer_apellido} {this.state.profile.informacion_personal.informacion_general.segundo_apellido}</h1>
					<p>{this.state.profile.informacion_personal.informacion_general.correo_electronico.laboral}</p>
				</div>					
			</div>
		</div>
		<div className="col-sm-4">
			<h3>{this.state.profile.informacion_personal.datos_encargo_actual.empleo_cargo_comision}</h3>
			<p>{this.state.profile.informacion_personal.datos_encargo_actual.area_adscripcion}<br/>
				<strong>{this.state.profile.informacion_personal.datos_encargo_actual.ente_publico}</strong></p>
		</div>
		<div className="col-sm-3">
				<h3><span className="pdn_score">${this.ingresosAnualesNetos()}</span></h3>
				<p>Ingresos anuales netos</p>
				<p><small>Actualización: {this.state.profile.informacion_personal.informacion_general.fecha_declaracion} </small></p>
		</div>
	</div>

	<div className="row">
		<div className="col-sm-12">
			<nav className="pdn_main_nav">
				<ul>
					<li>
						<Link to={`/perfil/${this.props.match.params.id}/informacion`}>Información</Link>
					</li>
				
					<li>
						<Link to={`/perfil/${this.props.match.params.id}/intereses`}>Intereses</Link>
					</li>
				
					<li>
						<Link to={`/perfil/${this.props.match.params.id}/ingresos`}>Ingresos</Link>
					</li>
				
					<li>
						<Link to={`/perfil/${this.props.match.params.id}/activos`}>Activos</Link>
					</li>
				
					<li>
						<Link to={`/perfil/${this.props.match.params.id}/pasivos`}>Pasivos</Link>
					</li>
				</ul>
			</nav>
	  	</div>
	</div>


	<div className="row pnd_box">
		<Switch>
	    <Route path='/perfil/:id/informacion' render={() => <Informacion profile={this.state.profile} /> }/>
	    <Route path='/perfil/:id/pasivos' render={() => <Pasivos profile={this.state.profile} /> }/>
	    <Route path='/perfil/:id/intereses' render={() => <Intereses profile={this.state.profile} /> }/>
	    <Route path='/perfil/:id/activos' render={() => <Activos profile={this.state.profile} /> }/>
	    {/*
	    <Route path='/perfil/:id/ingresos' render={() => <Ingresos profile={this.state.profile} /> }/>
	    <Route path='/perfil/:id/intereses' render={() => <Intereses profile={this.state.profile} /> }/>
	    <Route path='/perfil/:id/activos' render={() => <Activos profile={this.state.profile} /> }/>
	    <Route path='/perfil/:id/pasivos' render={() => <Pasivos profile={this.state.profile} /> }/>
	  */}

	  </Switch>
	</div>
		
			
</div>

</div>
		);
	}

	/*
	 * M E T H O D S
	 * ----------------------------------------------------------------------
	 */

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

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /  
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
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
}

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default Perfil;