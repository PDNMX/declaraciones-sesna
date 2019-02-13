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
class ActivosBienesMueblesNoRegistrables extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Bienes muebles no registrables</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (mueble, i) => 
        <div className="pdn_d_box" v-for="mueble in items">
          <p className="pdn_label">Tipo de operación</p>
          <p className="pdn_data_p">{mueble.tipo_operacion.valor}</p>
          
          <p className="pdn_label">Tipo de bien</p>
          <p className="pdn_data_p">{mueble.tipo_bien.valor}</p>
          
          
          <p className="pdn_label">Descripción</p>
          <p className="pdn_data_p">{mueble.descripcion}</p>
          
          
          
          <p className="pdn_label">Titular del bien</p>
          <p className="pdn_data_p">{mueble.titular_bien.valor}</p>
          
          <p className="pdn_label">Porcentaje  de propiedad</p>
          <p className="pdn_data_p">{mueble.porcentaje_propiedad}</p>
          
          <p className="pdn_label">Forma  de adquisición</p>
          <p className="pdn_data_p">{mueble.forma_adquisicion.valor}</p>
          
          <p className="pdn_label">Relación con la persona que lo adquirió</p>
          <p className="pdn_data_p">{mueble.relacion_quien_adquirio.valor}</p>
          
          
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
    return this.props.profile.activos.bienes_muebles_no_registrables;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosBienesMueblesNoRegistrables;