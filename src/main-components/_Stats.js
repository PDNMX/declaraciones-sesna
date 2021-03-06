/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';

import Age from "../single-components/stats/Age.js";
import GobLevel from "../single-components/stats/GobLevel.js";
import State from "../single-components/stats/State.js";
import Education from "../single-components/stats/Education.js";

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class Stats extends Component{
	// constructor(){
	// 	super();
	// }

	render(){
		let section = this.props.match.params.section;
		return(
	<div>
			{/* título */}
			<div className="row">
				<div className="col-sm-12">
					<h1>Estadísticas</h1>
				</div>
			</div>

			{/* navegación */}
			<div className="row">
				<div className="col-sm-12">
					<nav className="pdn_main_nav">
					  <ul>
							<li>
								<Link to={`${process.env.PUBLIC_URL}/estadistica/edad`} className={ section === "edad" ? "router-link-active" : "" }>
								  <b className="pdn_i_ age"></b>Edad
								</Link>
							</li>
							<li>
								<Link to={`${process.env.PUBLIC_URL}/estadistica/nivel-de-gobierno`} className={ section === "nivel-de-gobierno" ? "router-link-active" : "" }>
								  <b className="pdn_i_ gov"></b>Nivel de gobierno
								</Link>
							</li>

							<li>
								<Link to={`${process.env.PUBLIC_URL}/estadistica/entidad-federativa`} className={ section === "entidad-federativa" ? "router-link-active" : "" }>
								  <b className="pdn_i_ state"></b>Estado
								</Link>
							</li>

							<li>
								<Link  to={`${process.env.PUBLIC_URL}/estadistica/educacion`} className={ section === "educacion" ? "router-link-active" : "" }>
								  <b className="pdn_i_ education"></b>Educación
								</Link>
							</li>

							<li><b className="pdn_i_ property"></b>Bienes inmuebles</li>

							<li><b className="pdn_i_ salary"></b>Salarios</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="row pnd_box">
			  <Switch>
				    <Route path={`${process.env.PUBLIC_URL}/estadistica/edad/:categoria?`} component={Age} />
				    <Route path={`${process.env.PUBLIC_URL}/estadistica/nivel-de-gobierno/:categoria?`} component={GobLevel} />
				    <Route path={`${process.env.PUBLIC_URL}/estadistica/entidad-federativa/:categoria?`} component={State} />
				    <Route path={`${process.env.PUBLIC_URL}/estadistica/educacion/:categoria?`} component={Education} />
				</Switch>
			</div>

	</div>
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
export default Stats;
