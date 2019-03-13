/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Grid, Paper} from '@material-ui/core';

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
		let section = this.props.match.params.section;
		return(
	<div>
			{/* título */}
			<Grid container spacing={24}>
				<Grid item sm={12}>
					<h1>Estadísticas</h1>
				</Grid>
			</Grid>

			{/* navegación */}
			<Grid container justify="space-evenly" spacing={24}>
				<Grid item xs={12} >
					<nav className="pdn_main_nav">
					  <ul>
							<li>
								<Link to="/estadistica/edad" className={ section == "edad" ? "router-link-active" : "" }>
								  <b className="pdn_i_ age"></b>Edad
								</Link>
							</li>
							<li>
								<Link to="/estadistica/nivel-de-gobierno" className={ section == "nivel-de-gobierno" ? "router-link-active" : "" }>
								  <b className="pdn_i_ gov"></b>Nivel de gobierno
								</Link>
							</li>

							<li>
								<Link to="/estadistica/entidad-federativa" className={ section == "entidad-federativa" ? "router-link-active" : "" }>
								  <b className="pdn_i_ state"></b>Estado
								</Link>
							</li>

							<li>
								<Link  to="/estadistica/educacion" className={ section == "educacion" ? "router-link-active" : "" }>
								  <b className="pdn_i_ education"></b>Educación
								</Link>
							</li>

							<li><b className="pdn_i_ property"></b>Bienes inmuebles</li>

							<li><b className="pdn_i_ salary"></b>Salarios</li>
						</ul>
					</nav>
				</Grid>
			</Grid>

			<div className="row pnd_box">
					  <Switch>
						    <Route path='/estadistica/edad/:categoria?' component={Age} />
						    <Route path='/estadistica/nivel-de-gobierno/:categoria?' component={GobLevel} />
						    <Route path='/estadistica/entidad-federativa/:categoria?' component={State} />
						    <Route path='/estadistica/educacion/:categoria?' component={Education} />
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
