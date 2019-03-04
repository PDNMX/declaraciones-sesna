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
		let section = this.props.section;
		return(
			<div>
			<div class="col-sm-3 sidebar">
		<h2>Pasivos</h2>
		<ul>
			<li>
	  	  <Link className={ !section ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/pasivos`}>
	  	    Deudas <span>{this.props.profile.pasivos.deudas.length}</span>
	  	  </Link>
	    </li>
	    <li>
	  	  <Link className={ section == "otras-obligaciones" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/pasivos/otras-obligaciones`}>
	  	    Otras obligaciones <span>{this.props.profile.pasivos.otras_obligaciones.length}</span>
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
