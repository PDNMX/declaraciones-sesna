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
  constructor(props){
    super(props);

    let elems = this.props.profile.activos.bienes_intangibles.map(d => {
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
        <h2>Bienes intangibles ({this.items().length})</h2>

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
            { this.items().map( (bienes, i) =>
            <div className="pdn_d_box" key={"bienes-" + i} id={"bienes-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label declarante'}> Declarante</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(bienes, i, e)} heref="#" className={"pdn_arrow " + (bienes.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (bienes.show ? "block" : "none")} }>
                {/* row */}
                <div className="row pdn_border">
                  {/* ente_publico_encargado*/}
                  <div className="col-sm-5">
                    <p className="pdn_label">Ente público encargado</p>
                    <h3>{bienes.ente_publico_encargado}</h3>
                  </div>
                  {/* Número de registro */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Número de registro</p>
                      <p className="pdn_data_p">{bienes.numero_registro}</p>
                  </div>
                  {/* Ingreso monetario obtenido*/}
                  <div className="col-sm-4">
                    <p className="pdn_label right">Precio de adquisición</p>
                    <h3 className="pdn_amount right">${bienes.precio_adquisicion.valor} {bienes.precio_adquisicion.moneda.codigo} <span>({bienes.precio_adquisicion.moneda.moneda})</span></h3>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  {/* Propietario registrado */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Propietario registrado</p>
                    <p className="pdn_data_p">{bienes.propietario_registrado}</p>
                  </div>

                  {/* Fecha de registro*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Fecha de registro</p>
                    <p className="pdn_data_p">{bienes.fecha_registro}</p>
                  </div>

                  {/* Fecha de vencimiento*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Fecha de vencimiento</p>
                    <p className="pdn_data_p">{bienes.fecha_vencimiento}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* row */}
                <div className="row pdn_border">
                  {/* Descripción*/}
                  <div className="col-sm-12">
                    <p className="pdn_label">Descripción</p>
                    <p className="pdn_data_p">{bienes.descripcion}</p>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  {/* Sector/Industria */}
                  <div className="col-sm-6">
                    <p className="pdn_label">Sector/Industria</p>
                    <p className="pdn_data_p">{bienes.sector_industria.valor}</p>
                  </div>

                  {/* Tipo de operación*/}
                  <div className="col-sm-6">
                    <p className="pdn_label">Tipo de operación</p>
                    <p className="pdn_data_p">{bienes.tipo_operacion.valor}</p>
                  </div>

                </div>
                {/* row ends*/}

                {/* table */}
                <div className="pdn_mobile_table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Forma  de adquisición</th>
                      <th>Porcentaje de Propiedad en Caso de Copropiedad</th>
                      <th>Precio total de adquisición si es copropiedad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{bienes.forma_adquisicion.valor}</td>
                      <td>{bienes.porcentaje_copropiedad}%
                        <div className="pdn_bar_container darken">
                          <div className="pdn_bar participacion" style={{ width: bienes.porcentaje_copropiedad + '%' }}></div>
                        </div>
                      </td>
                      <td>${bienes.precio_total_copropiedad.valor} {bienes.precio_total_copropiedad.moneda.codigo} <span>({bienes.precio_total_copropiedad.moneda.moneda})</span></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                {/* table ends */}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{bienes.observaciones}</p>
              </div>
              {/* div close/open closes*/}
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
