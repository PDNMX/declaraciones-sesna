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
	constructor(){
		super();

	}

	render(){
		return(
			<div className="row">
				<div className="col-sm-12">
			<nav className="pdn_main_nav">
			  <ul>
					<li>
						<Link to="/estadistica/edad">
						  Edad
						</Link>
					</li>
					<li>
						<Link to="/estadistica/nivel-de-gobierno">
						  Nivel de gobierno
						</Link>
					</li>

					<li>
						<Link to="/estadistica/entidad-federativa">
						  Estado
						</Link>
					</li>

					<li>
						<Link  to="/estadistica/educacion">
						  Educación
						</Link>
					</li>

					<li>Bienes inmuebles</li>

					<li>Salarios</li>
				</ul>
				</nav>
			  <Switch>
				    <Route path='/estadistica/edad' component={Age} />
				    <Route path='/estadistica/nivel-de-gobierno' component={GobLevel} />
				    <Route path='/estadistica/entidad-federativa' component={State} />
				    <Route path='/estadistica/educacion' component={Education} />
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
