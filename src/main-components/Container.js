/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Busqueda from './Busqueda';

import Perfil from './Perfil';
//import * as ConstClass from  '../ConstValues.js';

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class Container extends Component{
	/*
	 * C O N S T R U C T O R
	 * ----------------------------------------------------------------------
	 */
	constructor(){
		super();

		//
		// THE STATE
		//
		this.state = {
			isProfile : false,
			profile : {}
		}
	}

	/*
	<Route path='/winemakers/:code' component={WineMaker}/>
	*/
	/*
	 * R E N D E R
	 * ----------------------------------------------------------------------
	 */
  render(){
  	return(
  	  <div id="react-app">
  		  <div className="breadcrumb">
  		    <div className="container">
  		      <div className="row">
  		        <div className="col-sm-12">
  		          {this.breadcrumb()}
  		        </div>
  		      </div>
  		    </div>
  		  </div>



  		<div className="pdn_b_title">
			  <div className="container">
				  <div className="row">
					  <div className="col-sm-2 col-sm-offset-2">
						  <img alt="logo" src="/img/1_icono.svg" width="150px" />
					  </div>
					  <div className="col-sm-6">
						  <h1><strong>Declaraciones</strong></h1>
					  </div>
					  <div className="col-sm-6">
						  <p>Consulta, visualiza y descarga los datos de las declaraciones patrimoniales, 
						  de intereses y las constancias de la declaración fiscal de los servidores públicos.</p>
					  </div>
				  </div>
			  </div>
		  </div>

		  <section className="pdn_m">
			  <div className="container">
				  <Switch>
				    <Route exact path='/' component={Busqueda}/>
				    <Route path='/perfil/:id' component={Perfil}/>
				  </Switch>
			  </div>
		  </section>
		  </div>
  	);
  }

  /*
	 * O T H E R   T E M P L A T E S
	 * ----------------------------------------------------------------------
	 */

	/*
	/  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	/
	/  El breadcrumb
	/
	/  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
	*/
	breadcrumb(){
		if(this.state.isProfile){
			return(
				<ul>
  		    <li><a href="#">Plataforma Digital Nacional</a></li>
  		    <li>{this.state.profile.informacion_personal.informacion_general.nombres}
  		        {this.state.profile.informacion_personal.informacion_general.primer_apellido}
  		        {this.state.profile.informacion_personal.informacion_general.segundo_apellido}
  		    </li>
  		  </ul>
			);
		}

		return(
			<ul>
			  <li><a href="#">Plataforma Digital Nacional</a></li>
				<li v-if="isProfile"><a href="/">Declaraciones</a></li>
			</ul>
		);
	}
}

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default Container;