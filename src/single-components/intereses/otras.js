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
class InteresesOtras extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Otras partes relacionadas</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (interes, i) => 
        <div className="pdn_d_box">
        <p className="pdn_label">Tipo de relación</p>
        <p className="pdn_data_p">{interes.tipo_relacion.valor}</p>
        <p className="pdn_label">Fecha de inicio de relación</p>
        <p className="pdn_data_p">{interes.fecha_inicio_relacion}</p>
        <p className="pdn_label">Ocupación</p>
        <p className="pdn_data_p">{interes.ocupacion}</p>
        <p className="pdn_label">Tiene interés</p>
        <p className="pdn_data_p">{interes.tiene_interes ? "Sí" : "No"}</p>
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
    return this.props.profile.intereses.otras_partes;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesOtras;