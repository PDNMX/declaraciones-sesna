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
		let section = this.props.section;
		return(
			<div>
	<div class="col-sm-3 sidebar">
		<h2>Ingresos</h2>
		<ul>
			<li>
	  	  <Link className={ !section ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos`}>
	  	    Sueldos y Salarios por el Encargo Público <span>{this.props.profile.ingresos.sueldos_salarios_publicos.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "sueldos-otros" ?"router-link-exact-active router-link-active" : ""}  to={`/perfil/${this.props.profile._id}/ingresos/sueldos-otros`}>
	  	    Sueldos y Salarios por otros empleos	<span>{this.props.profile.ingresos.sueldos_salarios_otros_empleos.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "actividad-profesional" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos/actividad-profesional`}>
	  	    Actividad profesional	<span>{this.props.profile.ingresos.actividad_profesional.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "actividad-empresarial" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos/actividad-empresarial`}>
	  	    Actividad empresarial	<span>{this.props.profile.ingresos.actividad_empresarial.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "actividad-economica-menor" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos/actividad-economica-menor`}>
	  	    Actividad económica menor	<span>{this.props.profile.ingresos.actividad_economica_menor.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "arrendamiento" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos/arrendamiento`}>
	  	    Arrendamiento	<span>{this.props.profile.ingresos.arrendamiento.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "intereses" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos/intereses`}>
	  	    Intereses	<span>{this.props.profile.ingresos.intereses.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "premios" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos/premios`}>
	  	    Premios	<span>{this.props.profile.ingresos.premios.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "otros-ingresos" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos/otros-ingresos`}>
	  	    Otros ingresos <span>{this.props.profile.ingresos.otros_ingresos.length}</span>
	  	  </Link>
	    </li>

	    <li>
	  	  <Link className={ section == "enajenacion" ?"router-link-exact-active router-link-active" : ""} to={`/perfil/${this.props.profile._id}/ingresos/enajenacion`}>
	  	    Enajenación de bienes <span>{this.props.profile.ingresos.enajenacion_bienes.length}</span>
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
