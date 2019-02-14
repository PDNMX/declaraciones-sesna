/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';

// INTERESES
import InteresesEmpresas from '../single-components/intereses/empresas';
import InteresesMembresias from '../single-components/intereses/membresias';
import InteresesApoyos from '../single-components/intereses/apoyos';
import InteresesRepActiva from '../single-components/intereses/representacion-activa';
import InteresesRepPasiva from '../single-components/intereses/representacion-pasiva';
import InteresesSocios from '../single-components/intereses/socios';
import InteresesClientes from '../single-components/intereses/clientes';
import InteresesOtras from '../single-components/intereses/otras';
import InteresesBeneficios from '../single-components/intereses/beneficios';


class Intereses extends Component{
	render(){
		let section = this.props.section;
		return(
			<div>
	<div className="col-sm-3 sidebar">
		<h2>Intereses</h2>
		<ul>
			<li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses`}>
	  	    Empresas o asociaciones
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses/membresias`}>
	  	    Membresías
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses/apoyos`}>
	  	    Apoyos
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses/representacion-activa`}>
	  	    Representación activa
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses/representacion-pasiva`}>
	  	    Representación pasiva
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses/socios`}>
	  	    Socios comerciales
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses/clientes`}>
	  	    Clientes principales
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses/otras`}>
	  	    Otras partes relacionadas
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/intereses/beneficios`}>
	  	    Beneficios gratuitos
	  	  </Link>
	    </li>

	  </ul>
	  </div>
	  <Switch>
	    <Route exact path='/perfil/:id/intereses' render={() => <InteresesEmpresas profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/intereses/membresias' render={() => <InteresesMembresias profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/intereses/apoyos' render={() => <InteresesApoyos profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/intereses/representacion-activa' render={() => <InteresesRepActiva profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/intereses/representacion-pasiva' render={() => <InteresesRepPasiva profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/intereses/socios' render={() => <InteresesSocios profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/intereses/clientes' render={() => <InteresesClientes profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/intereses/otras' render={() => <InteresesOtras profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/intereses/beneficios' render={() => <InteresesBeneficios profile={this.props.profile}  />}/>
	  </Switch>
</div>
		);
	}
}

export default Intereses;
