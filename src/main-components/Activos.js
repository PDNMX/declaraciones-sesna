/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';

// ACTIVOS
import ActivosBienesInmuebles from '../single-components/activos/bienes-inmuebles';
import ActivosBienesMuebles from '../single-components/activos/bienes-muebles';
import ActivosBienesMueblesNoRegistrables from '../single-components/activos/bienes-muebles-no-registrables';
import ActivosInversiones from '../single-components/activos/inversiones';
import ActivosEfectivo from '../single-components/activos/efectivo-y-metales';
import ActivosFideicomisos from '../single-components/activos/fideicomisos';
import ActivosBienesIntangibles from '../single-components/activos/bienes-intangibles';
import ActivosCuentasPorCobrar from '../single-components/activos/cuentas-por-cobrar';
import ActivosBeneficiosEnEspecie from '../single-components/activos/beneficios-en-especie';

class Activos extends Component{
	render(){
		return(
			<div>
	<div class="col-sm-3 sidebar">
		<h2>Activos</h2>
		<ul>
			
			<li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos`}>
	  	    Bienes inmuebles
	  	  </Link>
	    </li>
	    
	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos/bienes-muebles`}>
	  	    Bienes muebles registrables
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos/bienes-muebles-no-registrables`}>
	  	    Bienes muebles no registrables
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos/inversiones`}>
	  	    Inversiones
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos/efectivo-y-metales`}>
	  	    Efectivo y metales
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos/fideicomisos`}>
	  	    Fideicomisos
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos/bienes-intangibles`}>
	  	    Bienes intangibles
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos/cuentas-por-cobrar`}>
	  	    Cuentas por cobrar
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/activos/beneficios-en-especie`}>
	  	    Uso o Beneficios en Especie Propiedad de un Tercero
	  	  </Link>
	    </li>

	  </ul>
	</div>
	  <Switch>
	    <Route exact path='/perfil/:id/activos' render={() => <ActivosBienesInmuebles profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/activos/bienes-muebles' render={() => <ActivosBienesMuebles profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/activos/bienes-muebles-no-registrables' render={() => <ActivosBienesMueblesNoRegistrables profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/activos/inversiones' render={() => <ActivosInversiones profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/activos/efectivo-y-metales' render={() => <ActivosEfectivo profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/activos/fideicomisos' render={() => <ActivosFideicomisos profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/activos/bienes-intangibles' render={() => <ActivosBienesIntangibles profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/activos/cuentas-por-cobrar' render={() => <ActivosCuentasPorCobrar profile={this.props.profile}  />}/>
	    <Route exact path='/perfil/:id/activos/beneficios-en-especie' render={() => <ActivosBeneficiosEnEspecie profile={this.props.profile}  />}/>
	  </Switch>
</div>
		);
	}
}

export default Activos;