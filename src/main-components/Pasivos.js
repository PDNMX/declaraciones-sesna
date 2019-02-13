/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';

// PASIVOS
import PasivosDeudas from '../single-components/pasivos/deudas';
import PasivosObligaciones from '../single-components/pasivos/otras-obligaciones';

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class Pasivos extends Component{

	/*
	 * R E N D E R
	 * ----------------------------------------------------------------------
	 */
	render(){
		return(
			<div>
			<div class="col-sm-3 sidebar">
		<h2>Pasivos</h2>
		<ul>
			<li>
	  	  <Link to={`/perfil/${this.props.profile._id}/pasivos`}>
	  	    Deudas
	  	  </Link>
	    </li>
	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/pasivos/otras-obligaciones`}>
	  	    Otras obligaciones
	  	  </Link>
	    </li>
	  </ul>
	</div>
	  <Switch>
	    <Route exact path='/perfil/:id/pasivos' render={() => <PasivosDeudas profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/pasivos/otras-obligaciones' render={() => <PasivosObligaciones profile={this.props.profile}  />}/>
	  </Switch>
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
export default Pasivos;