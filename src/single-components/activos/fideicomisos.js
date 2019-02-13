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
class ActivosFideicomisos extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Fideicomisos</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (fideicomiso, i) =>
        <div className="pdn_d_box" v-for="fideicomiso in items">
          <p className="pdn_label">Tipo de operación</p>
          <p className="pdn_data_p">{fideicomiso.tipo_operacion.valor}</p>
          
          <p className="pdn_label">Identificador del fideicomiso</p>
          <p className="pdn_data_p">{fideicomiso.identificador_fideicomiso}</p>
          
          
          <p className="pdn_label">Tipo de fideicomiso</p>
          <p className="pdn_data_p">{fideicomiso.tipo_fideicomiso.valor}</p>
          
          <p className="pdn_label">Objetivo del fideicomiso</p>
          <p className="pdn_data_p">{fideicomiso.objetivo}</p>
          
          <p className="pdn_label">Fecha de creación</p>
          <p className="pdn_data_p">{fideicomiso.fecha_creacion}</p>
          
          
          <p className="pdn_label">Vigencia</p>
          <p className="pdn_data_p">{fideicomiso.vigencia}</p>
          
          <p className="pdn_label">Residencia (México/Extranjero)</p>
          <p className="pdn_data_p">{fideicomiso.residencia.valor}</p>
          
          <p className="pdn_label">Moneda</p>
          <p className="pdn_data_p">{fideicomiso.moneda.moneda}</p>
          
          <p className="pdn_label">Porcentaje de Propiedad</p>
          <p className="pdn_data_p">{fideicomiso.porcentaje_propiedad_derechos_fiduciarios}%</p>
          
          
          <p className="pdn_label">Ingreso monetario obtenido</p>
          <p className="pdn_data_p">${fideicomiso.ingreso_monetario_obtenido}</p>
          
          <p className="pdn_label">Institución Fiduciaria</p>
          <p className="pdn_data_p">{fideicomiso.institucion_fiduciaria}</p>
          
          <p className="pdn_label">RFC Fideicomisario</p>
          <p className="pdn_data_p">{fideicomiso.rfc_fideicomsario}</p>       

          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{fideicomiso.observaciones}</p>
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
    return this.props.profile.activos.fideicomisos;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosFideicomisos;