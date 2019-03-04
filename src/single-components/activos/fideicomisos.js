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
class ActivosFideicomisos extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.activos.fideicomisos.map(d => {
                  let item = d;
                  d.show = true;

                  return d;
                });

    this.state = {
      items : elems
    }

    this.toggl = this.toggl.bind(this);
  }
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
        <h2>Fideicomisos ({this.items().length})</h2>

        {/* row */ }
        <div className="row">
          <div className="col-sm-12">
            <div className="pdn_d_box">
              <div className="pdn_bar_container">
                <div className={ 'pdn_bar declarante'}></div>
              </div>
              <p className="pdn_graph_label">
              <b className={ 'pdn_graph_label_item label declarante'}></b> Declarante</p>
            </div>
          </div>
        </div>
        {/* row ends*/ }

        {/* row */ }
        <div className="row">
          <div className="col-sm-12">
            { this.items().map( (fideicomiso, i) =>
            <div className="pdn_d_box" key={"fideicomiso-" + i} id={"fideicomiso-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label declarante'}> Declarante</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(fideicomiso, i, e)} heref="#" className={"pdn_arrow " + (fideicomiso.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (fideicomiso.show ? "block" : "none")} }>
                {/* row */}
                <div className="row pdn_border">
                  {/* Tipo de fideicomiso*/}
                  <div className="col-sm-7">
                    <p className="pdn_label">Tipo de fideicomiso</p>
                    <h3>{fideicomiso.tipo_fideicomiso.valor}</h3>
                  </div>
                  {/* Ingreso monetario obtenido*/}
                  <div className="col-sm-5">
                    <p className="pdn_label right">Ingreso monetario obtenido</p>
                    <h3 className="pdn_amount right">${fideicomiso.ingreso_monetario_obtenido} {fideicomiso.moneda.moneda}</h3>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  {/* Identificador del fideicomiso */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Identificador del fideicomiso</p>
                    <p className="pdn_data_p">{fideicomiso.identificador_fideicomiso}</p>
                  </div>
                  {/* Fecha de creación */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Fecha de creación</p>
                      <p className="pdn_data_p">{fideicomiso.fecha_creacion}</p>
                  </div>
                  {/* Vigencia*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Vigencia</p>
                    <p className="pdn_data_p">{fideicomiso.vigencia}</p>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  {/* Objetivo del fideicomiso */}
                  <div className="col-sm-8">
                    <p className="pdn_label">Objetivo del fideicomiso</p>
                    <p className="pdn_data_p">{fideicomiso.objetivo}</p>
                  </div>
                  {/* Tipo de operación*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de operación</p>
                    <p className="pdn_data_p">{fideicomiso.tipo_operacion.valor}</p>
                  </div>
                </div>
                {/* row ends*/}


                {/* table */}
                <div className="pdn_mobile_table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Residencia (México/Extranjero)</th>
                      <th>Porcentaje de la propiedad</th>
                      <th>Institución Fiduciaria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{fideicomiso.residencia.valor}</td>
                      <td>{fideicomiso.porcentaje_propiedad_derechos_fiduciarios}%
                        <div className="pdn_bar_container darken">
                          <div className="pdn_bar participacion" style={{ width: fideicomiso.porcentaje_propiedad_derechos_fiduciarios + '%' }}></div>
                        </div>
                      </td>
                      <td>{fideicomiso.institucion_fiduciaria}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                {/* table ends */}

                {/* fideicomisario */}
                <div className="row pdn_border">
                  {/* fideicomisario nombre */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Fideicomisario</p>
                    <p className="pdn_data_p">{fideicomiso.fideicomisario.nombre}<br/>
                    <span className="pnd_box_note">{ fideicomiso.fideicomisario.domicilio.vialidad.tipo_vial }	{ fideicomiso.fideicomisario.domicilio.vialidad.nom_vial }	#{ fideicomiso.fideicomisario.domicilio.numExt }
      							<span>{ fideicomiso.fideicomisario.domicilio.numInt ? ", int. #" + fideicomiso.fideicomisario.domicilio.numInt : "" }</span><br/>
      							{ fideicomiso.fideicomisario.domicilio.localidad.nom_loc }, { fideicomiso.fideicomisario.domicilio.municipio.nom_mun }<br/>
      							{ fideicomiso.fideicomisario.domicilio.entidad_federativa.nom_ent }. C.P. { fideicomiso.fideicomisario.domicilio.cp }
      							</span>
                    </p>
                  </div>
                  {/* Fideicomisario RFC */}
                  <div className="col-sm-3">
                    <p className="pdn_label">RFC</p>
                      <p className="pdn_data_p">{fideicomiso.fideicomisario.rfc}</p>
                  </div>
                  {/* CURP*/}
                  <div className="col-sm-3">
                    <p className="pdn_label">CURP</p>
                    <p className="pdn_data_p">{fideicomiso.fideicomisario.curp}</p>
                  </div>
                  {/* Contitución */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Constitución</p>
                    <p className="pdn_data_p">{fideicomiso.fideicomisario.fecha_constitucion}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* fideicomitente */}
                <div className="row pdn_border">
                  {/* fideicomitente nombre */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Fideicomitente</p>
                    <p className="pdn_data_p">{fideicomiso.fideicomitente.nombre}<br/>
                    <span className="pnd_box_note">{ fideicomiso.fideicomitente.domicilio.vialidad.tipo_vial }	{ fideicomiso.fideicomitente.domicilio.vialidad.nom_vial }	#{ fideicomiso.fideicomitente.domicilio.numExt }
      							<span>{ fideicomiso.fideicomitente.domicilio.numInt ? ", int. #" + fideicomiso.fideicomitente.domicilio.numInt : "" }</span><br/>
      							{ fideicomiso.fideicomitente.domicilio.localidad.nom_loc }, { fideicomiso.fideicomitente.domicilio.municipio.nom_mun }<br/>
      							{ fideicomiso.fideicomitente.domicilio.entidad_federativa.nom_ent }. C.P. { fideicomiso.fideicomitente.domicilio.cp }
      							</span>
                    </p>
                  </div>
                  {/* Fideicomisario RFC */}
                  <div className="col-sm-3">
                    <p className="pdn_label">RFC</p>
                      <p className="pdn_data_p">{fideicomiso.fideicomitente.rfc}</p>
                  </div>
                  {/* CURP*/}
                  <div className="col-sm-3">
                    <p className="pdn_label">CURP</p>
                    <p className="pdn_data_p">{fideicomiso.fideicomitente.curp}</p>
                  </div>
                  {/* Contitución */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Constitución</p>
                    <p className="pdn_data_p">{fideicomiso.fideicomitente.fecha_constitucion}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* fiduciario */}
                <div className="row pdn_border">
                  {/* fiduciario nombre */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Fiduciario</p>
                    <p className="pdn_data_p">{fideicomiso.fiduciario.nombre}<br/>
                    <span className="pnd_box_note">{ fideicomiso.fiduciario.domicilio.vialidad.tipo_vial }	{ fideicomiso.fiduciario.domicilio.vialidad.nom_vial }	#{ fideicomiso.fiduciario.domicilio.numExt }
      							<span>{ fideicomiso.fiduciario.domicilio.numInt ? ", int. #" + fideicomiso.fiduciario.domicilio.numInt : "" }</span><br/>
      							{ fideicomiso.fiduciario.domicilio.localidad.nom_loc }, { fideicomiso.fiduciario.domicilio.municipio.nom_mun }<br/>
      							{ fideicomiso.fiduciario.domicilio.entidad_federativa.nom_ent }. C.P. { fideicomiso.fiduciario.domicilio.cp }
      							</span>
                    </p>
                  </div>
                  {/* Fideicomisario RFC */}
                  <div className="col-sm-3">
                    <p className="pdn_label">RFC</p>
                      <p className="pdn_data_p">{fideicomiso.fiduciario.rfc}</p>
                  </div>
                  {/* CURP*/}
                  <div className="col-sm-3">
                    <p className="pdn_label">CURP</p>
                    <p className="pdn_data_p">{fideicomiso.fiduciario.curp}</p>
                  </div>
                  {/* Contitución */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Constitución</p>
                    <p className="pdn_data_p">{fideicomiso.fiduciario.fecha_constitucion}</p>
                  </div>
                </div>
                {/* row ends*/}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{fideicomiso.observaciones}</p>

              </div>
              {/* div close/open ends */}
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
   toggl(item, index, e){
     console.log(item, index, e);

     let items    = this.state.items,
         newItems = items.map( d => {
           if(item == d){
             d.show = !item.show;
           }

           return d;
         });

     this.setState({items : newItems});
   }
  items(){
    return this.props.profile.activos.fideicomisos;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosFideicomisos;
