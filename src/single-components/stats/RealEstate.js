/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {Grid, Paper} from '@material-ui/core';
import * as ConstClass from  '../../ConstValues.js';
import ChartistGraph from 'react-chartist';
import "../../css/chartist.min.css";

import PropiedadTotal from './real-estate/PropiedadTotal';
import ConstruccionTotal from './real-estate/ConstruccionTotal';

class RealEstate extends Component{
	render(){
		let cat = this.props.match.params.categoria;
		return(
			<div>
		 <Grid item sm={3} className="col-sm-3 sidebar">
				<h2>Bienes inmuebles</h2>
			  <ul>
			  	<li>
			  	  <Link to={`${process.env.PUBLIC_URL}/estadistica/bienes-inmuebles`} className={ !cat ? "router-link-exact-active router-link-active" : "" }>Bienes inmuebles</Link>
			  	</li>
			  </ul>
		 </Grid>
				<Grid container spacing={24} direction={'row-reverse'} className="col-sm-offset-3 sidecontent">
					<Grid item sm={9}>
					{ this.rangoBienes() }
					</Grid>
				</Grid>
		</div>
		);
	}

	/*
	 * T E M P L A T E S
	 * ----------------------------------------------------------------------
	 */

	/*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
	rangoBienes(){
		let cat = this.props.match.params.categoria;
		if(!cat){
			return(
			  <div>
			    <PropiedadTotal />
			    <ConstruccionTotal />
			  </div>
			);
	  }
	  /*
	  else if(cat == "edad-y-gobierno"){
	  	return(
	  		<div>
	  		  <EdadTotalNivelGobierno />
	  		  <EdadTotalNivelGobiernoPorcentaje />
	  		</div>
	  	);
	  }
	  else if(cat == "edad-y-educacion"){
	  	return(
	  		<div>
	  		  <EdadTotalEducacion />
	  		  <EdadTotalEducacionPorcentaje />
	  		</div>
	  	);
	  }*/
	  else{
	  	return null;
	  }
	  
	}
}

export default RealEstate;