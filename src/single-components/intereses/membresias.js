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
          {/* box starts*/}
          { this.items().map( (interes, i) =>
          <div className="pdn_d_box" key={"interes-" + i}>
            <div className="row pdn_border">
              <div className="col-sm-6">
                <p><span className="label declarante"> Declarante</span></p>
              </div>
              <div className="col-sm-6 right">
                <a heref="#" className="pdn_arrow close"></a>
              </div>
            </div>
            {/* row ends*/}
            <div className="row pdn_border">
              <div className="col-sm-9">
                <p className="pdn_label">Nombre de institución</p>
                <h3>{interes.nombre_institucion} </h3>
                <p className="pdn_data_p pnd_box_note pdn_gray">{interes.domicilio.vialidad.tipo_vial+' '+interes.domicilio.vialidad.nom_vial+' No.' +interes.domicilio.numExt+ ' No. Int.'+interes.domicilio.numInt }
              <br/>  { interes.domicilio.localidad.nom_loc+', '+interes.domicilio.municipio.nom_mun+', '+interes.domicilio.entidad_federativa.nom_ent+', '+interes.domicilio.pais.valor+' C.P. '+interes.domicilio.cp } </p>
              </div>
              <div className="col-sm-3">
                <p className="pdn_label">Fecha de inicio</p>
                <p className="pdn_data_p">{interes.fecha_inicio} </p>
              </div>
            </div>
            {/* row ends*/}
            <div className="row pdn_border">
              <div className="col-sm-6">
                <p className="pdn_label">Tipo de institución</p>
                <p className="pdn_data_p">{interes.tipo_institucion.valor} </p>
                </div>
              <div className="col-sm-6">
                <p className="pdn_label">Naturaleza de membresía</p>
                <p className="pdn_data_p">{interes.naturaleza_membresia} </p>
              </div>
            </div>
            {/* row ends*/}
            <table class="table">
              <thead>
                <tr>
                  <th>Puesto o rol</th>
                  <th>Pagado</th>
                  <th>Sector o industria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{interes.puesto_rol}</td>
                  <td><b className= { 'pdn_' + interes.pagado}></b> {interes.pagado ? "Sí": "No"}</td>
                  <td>{interes.sector_industria.valor}</td>
                </tr>
              </tbody>
            </table>



            <p className="pdn_label">Observaciones</p>
            <p className="pdn_data_p">{interes.observaciones} </p>
          </div>
          )}
          {/* box ends*/}
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
