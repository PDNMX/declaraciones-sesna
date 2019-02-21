/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Link } from 'react-router-dom';

import NivelGobiernoTotal from './gob-level/NivelGobiernoTotal';
import NivelGobiernoPorcentaje from './gob-level/NivelGobiernoPorcentaje';

import NivelGobiernoEducacion from './gob-level/NivelGobiernoEducacion';
import NivelGobiernoEducacionPorcentaje from './gob-level/NivelGobiernoEducacionPorcentaje';

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class GobLevel extends Component{
	/*
	 * C O N S T R U C T O R
	 * ----------------------------------------------------------------------
	 */
	constructor(props){
		super(props);
	};

	/*
	 * R E N D E R
	 * ----------------------------------------------------------------------
	 */
	render(){
		return(
			<div>
			  <ul>
			  	<li>
			  	  <Link to="/estadistica/nivel-de-gobierno">nivel de gobierno</Link>
			  	</li>
			  	<li>
			  	  <Link to="/estadistica/nivel-de-gobierno/gobierno-y-edad" >nivel de gobierno y edad</Link>
			  	</li>
			  	<li>
			  	  <Link to="/estadistica/nivel-de-gobierno/gobierno-y-educacion" >nivel de gobierno y educación</Link>
			  	</li>
			  </ul>
			  { this.nivelGobierno() }
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
	nivelGobierno(){
		let cat = this.props.match.params.categoria;
		if(!cat){
			return(
			  <div>
			    <NivelGobiernoTotal />
			    <NivelGobiernoPorcentaje />
			  </div>
			);
	  }
	  else if(cat == "gobierno-y-edad"){

	  }
	  else if(cat == "gobierno-y-educacion"){
	  	return(
	  		<div>
	  		  <NivelGobiernoEducacion />
	  		  <NivelGobiernoEducacionPorcentaje />
	  		</div>
	  	);
	  }
	  else{
	  	return null;
	  }
	}
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default GobLevel;
