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
class ActivosInversiones extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Inversiones, cuentas y valores</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (inversion, i) =>
        <div className="pdn_d_box" v-for="inversion in items">
          <p className="pdn_label">Tipo de operación</p>
          <p className="pdn_data_p">{inversion.tipo_operacion.valor}</p>
          
          <p className="pdn_label">Tipo de bien</p>
          <p className="pdn_data_p">{inversion.tipo_inversion.valor}</p>
          
          
          <p className="pdn_label">Tipo especifico de inversión</p>
          <p className="pdn_data_p">{inversion.tipo_especifico_inversion.valor}</p>
          
          <p className="pdn_label">Inversión Nacional o Extranjera</p>
          <p className="pdn_data_p">{inversion.nacional_extranjero.valor}</p>
          
          <p className="pdn_label">Tipo de moneda</p>
          <p className="pdn_data_p">{inversion.tipo_moneda.moneda}</p>
          
          
          <p className="pdn_label">Nombre de la Institución</p>
          <p className="pdn_data_p">{inversion.nombre_institucion}</p>
          
          <p className="pdn_label">Forma  de adquisición</p>
          <p className="pdn_data_p">{inversion.forma_adquisicion.valor}</p>
          
          <p className="pdn_label">Titular del bien</p>
          <p className="pdn_data_p">{inversion.titular_bien.valor}</p>
          
          <p className="pdn_label">Porcentaje  de inversión del funcionario</p>
          <p className="pdn_data_p">{inversion.porcentaje_inversion}%</p>
        
          <p className="pdn_label">Sector</p>
          <p className="pdn_data_p">{inversion.sector_industria.valor}</p>          

          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{inversion.observaciones}</p>
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
    return this.props.profile.activos.inversiones_cuentas_valores;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosInversiones;