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
class IngresosOtros extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Otros ingresos</h2>
    <div className="row">
      <div className="col-sm-12">
        {this.items().map( (sueldo, i) => 
        <div className="pdn_d_box" v-for="sueldo in items">
        <p className="pdn_label">Sector o industria</p>
        <p className="pdn_data_p">{sueldo.sector_industria.valor}</p>
        <p className="pdn_label">Tipo de actividad o servicio</p>
        <p className="pdn_data_p">{sueldo.tipo_actividad.valor}</p>
        <p className="pdn_label">Descripción de actividad o servicio</p>
        <p className="pdn_data_p">{sueldo.descripcion_actividad}</p>
        <p className="pdn_label">Ingreso bruto anual</p>
        <p className="pdn_data_p">{sueldo.ingreso_bruto_anual.valor} {sueldo.ingreso_bruto_anual.moneda.codigo}</p>
        <p className="pdn_label">Moneda</p>
        <p className="pdn_data_p">{sueldo.ingreso_bruto_anual.moneda.moneda}</p>
        <p className="pdn_label">Unidad temporal</p>
        <p className="pdn_data_p">{sueldo.ingreso_bruto_anual.unidad_temporal.valor}</p>
        <p className="pdn_label">Duración frecuencia</p>
        <p className="pdn_data_p">{sueldo.ingreso_bruto_anual.duracion_frecuencia}</p>
        <p className="pdn_label">Fecha de transacción</p>
        <p className="pdn_data_p">{sueldo.ingreso_bruto_anual.fecha_transaccion}</p>
        <p className="pdn_label">Observaciones</p>
        <p className="pdn_data_p">{sueldo.observaciones}</p>
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
    return this.props.profile.ingresos.otros_ingresos;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default IngresosOtros;