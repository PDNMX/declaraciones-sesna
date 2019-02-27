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
  constructor(props){
    super(props);

    let elems = this.props.profile.activos.cuentas_por_cobrar.map(d => {
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
        <h2>Cuentas por cobrar ({this.items().length})</h2>

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
            { this.items().map( (cuentas, i) =>
            <div className="pdn_d_box" key={"cuentas-" + i} id={"cuentas-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label declarante'}> Declarante</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(cuentas, i, e)} heref="#" className={"pdn_arrow " + (cuentas.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (cuentas.show ? "block" : "none")} }>
                {/* row */}
                <div className="row pdn_border">
                  {/* Número de registro */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Número de registro</p>
                    <h3>{cuentas.numero_registro}</h3>
                  </div>
                  {/* Fecha de préstamo*/}
                  <div className="col-sm-4">
                    <p className="pdn_label center">Fecha de préstamo</p>
                    <p className="pdn_data_p center">{cuentas.fecha_prestamo}</p>
                  </div>
                  {/* Fecha de vencimiento*/}
                  <div className="col-sm-4">
                    <p className="pdn_label right">Fecha de vencimiento</p>
                    <p className="pdn_data_p right">{cuentas.fecha_vencimiento}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* table */}
                <div className="pdn_mobile_table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tasa de interés</th>
                      <th>Porcentaje de copropiedad</th>
                      <th>Sector/Industria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{cuentas.tasa_interes}</td>
                      <td>{cuentas.porcentaje_copropiedad}%
                        <div className="pdn_bar_container darken">
                          <div className="pdn_bar participacion" style={{ width: cuentas.porcentaje_copropiedad + '%' }}></div>
                        </div>
                      </td>
                      <td>{cuentas.sector_industria.valor}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                {/* table ends */}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{cuentas.observaciones}</p>
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
