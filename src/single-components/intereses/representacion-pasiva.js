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
class InteresesRepPasiva extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Representación pasiva</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (interes, i) => 
        <div className="pdn_d_box" v-for="interes in items">
        <p className="pdn_label">Tipo de representación</p>
        <p className="pdn_data_p">{interes.tipo_representacion.valor}</p>
        <p className="pdn_label">Nombre del representante</p>
        <p className="pdn_data_p">{interes.nombre_representante}</p>
        <p className="pdn_label">Ocupación o profesión</p>
        <p className="pdn_data_p">{interes.ocupacion_profesion}</p>
        <p className="pdn_label">Fecha de inicio de representación</p>
        <p className="pdn_data_p">{interes.fecha_inicio_representacion}</p>
        <p className="pdn_label">Sector o industria</p>
        <p className="pdn_data_p">{interes.sector_industria.valor}</p>
        <p className="pdn_label">Tiene intereses</p>
        <p className="pdn_data_p">{interes.tiene_intereses ? "Sí" : "No"}</p>
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
    return this.props.profile.intereses.representacion_pasiva;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesRepPasiva;