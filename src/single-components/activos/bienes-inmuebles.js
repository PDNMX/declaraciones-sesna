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
class ActivosBienesInmuebles extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Bienes inmuebles</h2>
    <div className="row">
      <div className="col-sm-12">

        { this.items().map( (inmueble, i) => 
        <div className="pdn_d_box" v-for="inmueble in items">
          <p className="pdn_label">Tipo de operación</p>
          <p className="pdn_data_p">{inmueble.tipo_operacion.valor}</p>
          
          <p className="pdn_label">Tipo de bien</p>
          <p className="pdn_data_p">{inmueble.tipo_bien.valor}</p>
          
          
          <p className="pdn_label">Superficie del terreno</p>
          <p className="pdn_data_p">{inmueble.superficie_terreno}</p>
          
          <p className="pdn_label">Superficie de construcción</p>
          <p className="pdn_data_p">{inmueble.superficie_construccion}</p>
          
          <p className="pdn_label">Porcentaje  de propiedad</p>
          <p className="pdn_data_p">{inmueble.porcentaje_propiedad}</p>
          
          <p className="pdn_label">Forma  de adquisición</p>
          <p className="pdn_data_p">{inmueble.forma_adquisicion.valor}</p>
          
          <p className="pdn_label">Relación con la persona que lo adquirió</p>
          <p className="pdn_data_p">{inmueble.relacion_persona_adquirio.valor}</p>
          
          <p className="pdn_label">Sector/Industria</p>
          <p className="pdn_data_p">{inmueble.sector_industria.valor}</p>
          
          <p className="pdn_label">Fecha de adquisición</p>
          <p className="pdn_data_p">{inmueble.fecha_adquisicion}</p>
          
          
          <p className="pdn_label">Precio de adquisición</p>
          <p className="pdn_data_p">${inmueble.precio_adquisicion.valor} {inmueble.precio_adquisicion.moneda.codigo} ({inmueble.precio_adquisicion.moneda.moneda}) </p>
          
          <p className="pdn_label">Valor Catastral</p>
          <p className="pdn_data_p">${inmueble.valor_catastral}</p>
          
          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{inmueble.observaciones}</p>
    
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
    return this.props.profile.activos.bienes_inmuebles;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosBienesInmuebles;