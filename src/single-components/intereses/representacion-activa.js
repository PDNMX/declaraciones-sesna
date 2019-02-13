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
class InteresesRepActiva extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div  className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Representación activa</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (interes, i) => 
        <div className="pdn_d_box" v-for="interes in items">
        <p className="pdn_label">Tipo de representación</p>
        <p className="pdn_data_p">{interes.tipo_representacion.valor}</p>
        <p className="pdn_label">Sector o industria</p>
        <p className="pdn_data_p">{interes.sector_industria.valor}</p>
        <p className="pdn_label">Fecha de inicio</p>
        <p className="pdn_data_p">{interes.fecha_inicio}</p>
        <p className="pdn_label">Pagado</p>
        <p className="pdn_data_p">{interes.pagado ? "Sí" : "No"}</p>
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
    return this.props.profile.intereses.representacion_activa;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesRepActiva;