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
class ActivosBeneficiosEnEspecie extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Uso o Beneficios en Especie Propiedad de un Tercero</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (beneficio, i) =>
        <div className="pdn_d_box" v-for="beneficio in items">
          <p className="pdn_label">Tipo de bien</p>
          <p className="pdn_data_p">{beneficio.tipo_bien.valor}</p>
          
          <p className="pdn_label">Valor del mercado</p>
          <p className="pdn_data_p">${beneficio.valor_mercado.valor} {beneficio.valor_mercado.moneda.codigo} ({beneficio.valor_mercado.moneda.moneda})</p>
          
          <p className="pdn_label">Relación con Propietario del Bien</p>
          <p className="pdn_data_p">{beneficio.relacion_persona.valor}</p>
          
          
          <p className="pdn_label">Sector/Industria</p>
          <p className="pdn_data_p">{beneficio.sector_industria.valor}</p>
          
          
          <p className="pdn_label">Fecha de inicio</p>
          <p className="pdn_data_p">{beneficio.fecha_inicio}</p>
          


          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{beneficio.observaciones}</p>
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
    return this.props.profile.activos.uso_especie_propiedad_tercero;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosBeneficiosEnEspecie;