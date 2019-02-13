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
class ActivosBienesIntangibles extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Bienes intangibles</h2>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (bienes, i) =>
        <div className="pdn_d_box" v-for="bienes in items">
          <p className="pdn_label">Tipo de operación</p>
          <p className="pdn_data_p">{bienes.tipo_operacion.valor}</p>
          
          <p className="pdn_label">Propietario registrado</p>
          <p className="pdn_data_p">{bienes.propietario_registrado}</p>
          
          
          <p className="pdn_label">Descripción</p>
          <p className="pdn_data_p">{bienes.descripcion}</p>
          
          
          <p className="pdn_label">Número de registro</p>
          <p className="pdn_data_p">{bienes.numero_registro}</p>
          
          
          <p className="pdn_label">Fecha de registro</p>
          <p className="pdn_data_p">{bienes.fecha_registro}</p>
          
          <p className="pdn_label">Sector/Industria</p>
          <p className="pdn_data_p">{bienes.sector_industria.valor}</p>
          
          <p className="pdn_label">Precio de adquisición</p>
          <p className="pdn_data_p">${bienes.precio_adquisicion.valor} {bienes.precio_adquisicion.moneda.codigo} ({bienes.precio_adquisicion.moneda.moneda})</p>
          
          <p className="pdn_label">Forma  de adquisición</p>
          <p className="pdn_data_p">{bienes.forma_adquisicion.valor}</p>
          
          <p className="pdn_label">Fecha de vencimiento</p>
          <p className="pdn_data_p">{bienes.fecha_vencimiento}</p>
          
          <p className="pdn_label">Porcentaje de Propiedad en Caso de Copropiedad</p>
          <p className="pdn_data_p">{bienes.porcentaje_copropiedad}%</p>
          
          
          <p className="pdn_label">Precio total de adquisición si es copropiedad</p>
          <p className="pdn_data_p">${bienes.precio_total_copropiedad.valor} {bienes.precio_total_copropiedad.moneda.codigo} ({bienes.precio_total_copropiedad.moneda.moneda})</p>
          
                  

          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{bienes.observaciones}</p>
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
    return this.props.profile.activos.bienes_intangibles;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosBienesIntangibles;