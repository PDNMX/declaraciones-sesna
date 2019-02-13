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
class InteresesMembresias extends Component{
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
    <h2>Membresías</h2>
    <div className="row">
      <div className="col-sm-12"> 
        { this.items().map( (interes, i) => 
        <div className="pdn_d_box" v-for="interes in items">
        <p className="pdn_label">Tipo de institución</p>
        <p className="pdn_data_p">{interes.tipo_institucion.valor}</p>
        <p className="pdn_label">Nombre de institución</p>
        <p className="pdn_data_p">{interes.nombre_institucion}</p>
        <p className="pdn_label">Naturaleza de membresía</p>
        <p className="pdn_data_p">{interes.naturaleza_membresia}</p>
        <p className="pdn_label">Domicilio</p>
        <p className="pdn_data_p">{interes.domicilio.vialidad.tipo_vial+' '+interes.domicilio.vialidad.nom_vial+' No.' +interes.domicilio.numExt+ ' No. Int.'+interes.domicilio.numInt
        + ' '+interes.domicilio.localidad.nom_loc+', '+interes.domicilio.municipio.nom_mun+', '+interes.domicilio.entidad_federativa.nom_ent+', '+interes.domicilio.pais.valor+' C.P. '+interes.domicilio.cp }</p>
        <p className="pdn_label">Sector o industria</p>
        <p className="pdn_data_p">{interes.sector_industria.valor}</p>
        <p className="pdn_label">Puesto o rol</p>
        <p className="pdn_data_p">{interes.puesto_rol}</p>
        <p className="pdn_label">Fecha de inicio</p>
        <p className="pdn_data_p">{interes.fecha_inicio}</p>
        <p className="pdn_label">Pagado</p>
        <p className="pdn_data_p">{interes.pagado ? "Sí": "No"}</p>
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
    return this.props.profile.intereses.membresias;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesMembresias;