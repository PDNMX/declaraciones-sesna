/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Link } from 'react-router-dom';

import * as ConstClass from  '../../ConstValues.js';
import ChartistGraph from 'react-chartist';
import "../../css/chartist.min.css"

import EdadTotal from './age/EdadTotal';
import EdadTotalPorcentaje from './age/EdadTotalPorcentaje';

import EdadTotalEducacion from './age/EdadTotalEducacion';
import EdadTotalEducacionPorcentaje from './age/EdadTotalEducacionPorcentaje';

import EdadTotalNivelGobierno from './age/EdadTotalNivelGobierno';
import EdadTotalNivelGobiernoPorcentaje from './age/EdadTotalNivelGobiernoPorcentaje';


class Age extends Component{

	render(){
		let cat = this.props.match.params.categoria;
		return(
		<div>
			<div className="col-sm-3 sidebar">
				<h2>Edad</h2>
			  <ul>
			  	<li>
			  	  <Link to="/estadistica/edad" className={ !cat ? "router-link-exact-active router-link-active" : "" }>Rango de edad</Link>
			  	</li>
			  	<li>
			  	  <Link to="/estadistica/edad/edad-y-gobierno" className={ cat == "edad-y-gobierno" ? "router-link-exact-active router-link-active" : "" }>Rango de edad y nivel de gobierno</Link>
			  	</li>
			  	<li>
			  	  <Link to="/estadistica/edad/edad-y-educacion" className={ cat == "edad-y-educacion" ? "router-link-exact-active router-link-active" : "" }>Rango de edad y nivel educativo</Link>
			  	</li>
			  </ul>
				</div>
				<div className="col-sm-9 col-sm-offset-3 sidecontent">
					{ this.rangoEdad() }
				</div>
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
	rangoEdad(){
		let cat = this.props.match.params.categoria;
		if(!cat){
			return(
			  <div>
			    <EdadTotal />
			    <EdadTotalPorcentaje />
			  </div>
			);
	  }
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
	  }
	  else{
	  	return null;
	  }
	}

}

export default Age;
