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
import Stats from './Stats';
import Perfil from './Perfil';
import PerfilMaterialUI from './PerfilMaterialUI';

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
	constructor(props){
		super(props);

		//
		// THE STATE
		//
		this.state = {
			isProfile : false,
			profile : {}
		}
	}

	/*
	 * R E N D E R
	 * ----------------------------------------------------------------------
	 */
  render(){
  	let show = this.props.location.pathname == "/";
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


		<div style={ {display : (show ? "block" : "none")} }>
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
			{/* <!--section nav--> */}
			<section className="pdn_sis_nav">
				<div className="container">
					<div className="row">
						<ul className="pdn_cont_nav">
							<li className="current">
								<a href="/">
									<figure><img src="/img/servidores_declaraciones.svg" width="60px" /></figure>
									Buscar un servidor público
								</a>
							</li>
							<li><a href="/estadistica/edad"><figure><img src="/img/estadisticas.svg" width="60px" /></figure>Estadísticas</a></li>
						</ul>
					</div>
				</div>
			</section>
		</div>

			{/* <!--section pdn_m--> */}
		  <section className="pdn_m">
			  <div className="container">
				  <Switch>
				    <Route exact path='/' component={Busqueda}/>
				    <Route path='/perfil/:id/:section/:subsection?' component={PerfilMaterialUI}/>
				    <Route path='/estadistica/:section' component={Stats}/>
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
			let amigo = this.state.profile.informacion_personal.informacion_general;
			return(
				<ul>
  		    <li><a href="https://plataformadigitalnacional.org/">Plataforma Digital Nacional</a></li>
  		    <li>{amigo.nombres}
  		        {amigo.primer_apellido}
  		        {amigo.segundo_apellido}
  		    </li>
  		  </ul>
			);
		}

		return(
			<ul>
			  <li><a href="https://plataformadigitalnacional.org/">Plataforma Digital Nacional</a></li>
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
