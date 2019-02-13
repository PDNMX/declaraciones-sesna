/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class InteresesClientes extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div  className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Clientes principales</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (interes, i) => 
        <div className="pdn_d_box" v-for="interes in items">
        <p className="pdn_label">Nombre del negocio</p>
        <p className="pdn_data_p">{interes.nombre_negocio}</p>
        <p className="pdn_label">Número de registro</p>
        <p className="pdn_data_p">{interes.numero_registro}</p>
        <p className="pdn_label">Sector o industria</p>
        <p className="pdn_data_p">{interes.sector_industria.valor}</p>
        <p className="pdn_label">Observaciones</p>
        <p className="pdn_data_p">{interes.observaciones}</p>
        </div>
        )}
      </div>
    </div>

  </div>
    );
  }

  /*
   * M E T H O D S
   * ----------------------------------------------------------------------
   */
  items(){
    return this.props.profile.intereses.clientes_principales;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesClientes;