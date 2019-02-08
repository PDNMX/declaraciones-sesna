/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, { Component } from 'react';
//import * as ConstClass from  '../ConstValues.js';

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class BusquedaTable extends Component{
	constructor(){
		super();

		this.showPagination = this.showPagination.bind(this);
		this.showPrev       = this.showPrev.bind(this);
		this.showNext       = this.showNext.bind(this);

		this.state = {
			newPage : 0
		}
	}
	/*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
	render(){
		return(
			<div>
			<table className="table">
			<thead>
				<tr>
					<th>nombre</th>
					<th>oficina</th>
					<th>cargo</th>
					<th>estado</th>
					<th>municipio</th>
				</tr>
			</thead>
			<tbody>
			{this.props.results.map( (compa, i) => 
				<tr key={'result-tr-' + i}>
					<td>
						<a href={`/perfil/${compa._id}/informacion`}>
					    {compa.informacion_personal.informacion_general.nombres} {compa.informacion_personal.informacion_general.primer_apellido} {compa.informacion_personal.informacion_general.segundo_apellido}
					  </a>
					</td>
					<td>
					  {compa.informacion_personal.datos_encargo_actual.ente_publico}
				  </td>
					<td>
					  {compa.informacion_personal.datos_encargo_actual.empleo_cargo_comision}
				  </td>
					<td>
					{compa.informacion_personal.datos_encargo_actual.direccion_encargo.entidad_federativa.nom_ent}</td>
					<td>
					{compa.informacion_personal.datos_encargo_actual.direccion_encargo.municipio.nom_mun}</td>
				</tr>
			)}
			</tbody>
		</table>
		{this.showPagination()}
		</div>
		);
	}

	/*
   * M E T H O D S
   * ----------------------------------------------------------------------
   */

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  showPagination(){
  	if(this.props.pages > 1){
  		return(
  			<ul>
  			{this.showPrev()}
			  <li>
			  	<form onSubmit={this._search}>
			  		<p>
			  			<input id="page-select" 
			  			       type="number" 
			  			       min="1" 
			  			       value={this.state.newPage + 1} 
			  			       onChange={this.handleNewPage} />
			  			 / {this.props.pages}
			  		</p>
			  	</form>
			  </li>
			  {this.showNext()}
			  </ul>
  		);
  	}

  	return "";
  }

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  handleNewPage(e){

  }

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  _search(){
  	this.props.search(this.newPage);
  }

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  showPrev(){
  	if(this.props.page > 0 ){
  		return(
  			<li>
					<a href="#" onClick={this._search(this.props.page-1)}>anterior</a>
				</li>
  		);
  	}

  	return null;
  }

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  showNext(){
  	if(this.props.page < this.props.pages-1){
  		return(
  			<li>
			  	<a href="#" onClick={this._search(this.props.page+1)}>siguiente</a>
			  </li>
  		);
  	}
  	return null;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default BusquedaTable;