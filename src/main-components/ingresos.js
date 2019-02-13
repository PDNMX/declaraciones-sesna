/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';

// INGRESOS
import IngresosSueldosPublicos from '../single-components/ingresos/sueldos-publicos';
import IngresosSueldosOtros from '../single-components/ingresos/sueldos-otros';
import IngresosActividadProfesional from '../single-components/ingresos/actividad-profesional';
import IngresosActividadEmpresarial from '../single-components/ingresos/actividad-empresarial';
import IngresosActividadEconomica from '../single-components/ingresos/actividad-economica';
import IngresosArrendamiento from '../single-components/ingresos/arrendamiento';
import IngresosIntereses from '../single-components/ingresos/intereses';
import IngresosPremios from '../single-components/ingresos/premios';
import IngresosOtros from '../single-components/ingresos/otros';
import IngresosEnajenacion from '../single-components/ingresos/enajenacion';

class Ingresos extends Component{
	render(){
		return(
			<div>
	<div class="col-sm-3 sidebar">
		<h2>Ingresos</h2>
		<ul>
			<li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos`}>
	  	    Sueldos y Salarios por el Encargo Público
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/sueldos-otros`}>
	  	    Sueldos y Salarios por otros empleos
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/actividad-profesional`}>
	  	    Actividad profesional
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/actividad-empresarial`}>
	  	    Actividad empresarial
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/actividad-economica-menor`}>
	  	    Actividad económica menor
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/arrendamiento`}>
	  	    Arrendamiento
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/intereses`}>
	  	    Intereses
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/premios`}>
	  	    Premios
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/otros-ingresos`}>
	  	    Otros ingresos
	  	  </Link>
	    </li>

	    <li>
	  	  <Link to={`/perfil/${this.props.profile._id}/ingresos/enajenacion`}>
	  	    Enajenación de bienes
	  	  </Link>
	    </li>

	    
	    
	  </ul>
	 </div>
	 <Switch>
	   <Route exact path='/perfil/:id/ingresos' render={() => <IngresosSueldosPublicos profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/sueldos-otros' render={() => <IngresosSueldosOtros profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/actividad-profesional' render={() => <IngresosActividadProfesional profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/actividad-empresarial' render={() => <IngresosActividadEmpresarial profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/actividad-economica-menor' render={() => <IngresosActividadEconomica profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/arrendamiento' render={() => <IngresosArrendamiento profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/intereses' render={() => <IngresosIntereses profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/premios' render={() => <IngresosPremios profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/otros-ingresos' render={() => <IngresosOtros profile={this.props.profile}  />}/>
	   <Route exact path='/perfil/:id/ingresos/enajenacion' render={() => <IngresosEnajenacion profile={this.props.profile}  />}/>
	 </Switch>
	</div>
		);
	}
}

export default Ingresos;