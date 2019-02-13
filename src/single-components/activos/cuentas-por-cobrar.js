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
class ActivosCuentasPorCobrar extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Cuentas por cobrar</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (cuentas, i) =>
        <div className="pdn_d_box" v-for="cuentas in items">
          <p className="pdn_label">Número de registro</p>
          <p className="pdn_data_p">{cuentas.numero_registro}</p>
          
          
          <p className="pdn_label">Sector/Industria</p>
          <p className="pdn_data_p">{cuentas.sector_industria.valor}</p>
          
          <p className="pdn_label">Fecha de préstamo</p>
          <p className="pdn_data_p">{cuentas.fecha_prestamo}</p>
          
          
          <p className="pdn_label">Tasa de interés</p>
          <p className="pdn_data_p">{cuentas.tasa_interes}</p>
          
          
          <p className="pdn_label">Fecha de vencimiento</p>
          <p className="pdn_data_p">{cuentas.fecha_vencimiento}</p>
          
          <p className="pdn_label">Porcentaje de copropiedad</p>
          <p className="pdn_data_p">{cuentas.porcentaje_copropiedad}%</p>
          
          
        
          
                  

          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{cuentas.observaciones}</p>
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
    return this.props.profile.activos.cuentas_por_cobrar;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosCuentasPorCobrar;