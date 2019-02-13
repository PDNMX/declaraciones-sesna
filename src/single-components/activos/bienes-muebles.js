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
class ActivosBienesMuebles extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Bienes muebles registrables</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (mueble, i) => 
        <div className="pdn_d_box" v-for="mueble in items">
          <p className="pdn_label">Tipo de operación</p>
          <p className="pdn_data_p">{mueble.tipo_operacion.valor}</p>
          
          <p className="pdn_label">Tipo de bien</p>
          <p className="pdn_data_p">{mueble.tipo_bien_mueble.valor}</p>
          
          
          <p className="pdn_label">Marca</p>
          <p className="pdn_data_p">{mueble.marca}</p>
          
          <p className="pdn_label">Submarca</p>
          <p className="pdn_data_p">{mueble.submarca}</p>
          
          <p className="pdn_label">Modelo</p>
          <p className="pdn_data_p">{mueble.modelo}</p>
          
          <p className="pdn_label">Titular del bien</p>
          <p className="pdn_data_p">{mueble.titular_bien.valor}</p>
          
          <p className="pdn_label">Porcentaje  de propiedad</p>
          <p className="pdn_data_p">{mueble.porcentaje_propiedad}</p>
          
          <p className="pdn_label">Forma  de adquisición</p>
          <p className="pdn_data_p">{mueble.forma_adquisicion.valor}</p>
          
          <p className="pdn_label">Relación con la persona que lo adquirió</p>
          <p className="pdn_data_p">{mueble.relacion_persona_quien_adquirio.valor}</p>
          
          <p className="pdn_label">Sector/Industria</p>
          <p className="pdn_data_p">{mueble.sector_industria.valor}</p>
          
          <p className="pdn_label">Fecha de adquisición</p>
          <p className="pdn_data_p">{mueble.fecha_adquisicion}</p>
          
          
          <p className="pdn_label">Precio de adquisición</p>
          <p className="pdn_data_p">${mueble.precio_adquisicion.valor} {mueble.precio_adquisicion.moneda.codigo} ({mueble.precio_adquisicion.moneda.moneda}) </p>
          
          
          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{mueble.observaciones}</p>
    
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
    return this.props.profile.activos.bienes_muebles_registrables;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosBienesMuebles;