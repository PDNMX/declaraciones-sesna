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
class ActivosEfectivo extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Efectivo y metales</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (efectivo, i) =>
        <div className="pdn_d_box" v-for="efectivo in items">
          <p className="pdn_label">Tipo de operación</p>
          <p className="pdn_data_p">{efectivo.tipo_operacion.valor}</p>
          
          <p className="pdn_label">Tipo de moneda</p>
          <p className="pdn_data_p">{efectivo.tipo_moneda.moneda}</p>
          
          
          <p className="pdn_label">Tipo de metal</p>
          <p className="pdn_data_p">{efectivo.tipo_metal.valor}</p>
          
          <p className="pdn_label">Unidades</p>
          <p className="pdn_data_p">{efectivo.unidades}</p>
          

          
          <p className="pdn_label">Forma  de adquisición</p>
          <p className="pdn_data_p">{efectivo.forma_adquisicion.valor}</p>
                  

          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{efectivo.observaciones_comentarios}</p>
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
    return this.props.profile.activos.efectivo_metales;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosEfectivo;