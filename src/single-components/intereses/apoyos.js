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
class InteresesApoyos extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
        <h2>Apoyos ({this.items().length})</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (interes, i) =>
        <div className="pdn_d_box" v-for="interes in items">
        <p className="pdn_label">Es beneficiario</p>
        <p className="pdn_data_p">{interes.es_beneficiario ? "Sí" : "No"}</p>
        <p className="pdn_label">Programa</p>
        <p className="pdn_data_p" >{interes.programa}</p>
        <p className="pdn_label">Institución otorgante</p>
        <p className="pdn_data_p" >{interes.institucion_otorgante}</p>
        <p className="pdn_label">Nivel de Gobierno</p>
        <p className="pdn_data_p" >{interes.nivel_orden_gobierno.valor}</p>
        <p className="pdn_label">Tipo de Apoyo</p>
        <p className="pdn_data_p" >{interes.tipo_apoyo.valor}</p>
        <p className="pdn_label">Valor anual del apoyo</p>
        <p className="pdn_data_p" >{interes.valor_anual_apoyo}</p>
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
    return this.props.profile.intereses.apoyos_beneficios_publicos;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesApoyos;
