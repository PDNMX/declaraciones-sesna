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
class PasivosObligaciones extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.pasivos.otras_obligaciones.map(d => {
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
        <h2>Otras obligaciones ({this.items().length})</h2>
        {/* row */ }
        <div className="row">
          <div className="col-sm-12">
            { this.items().map( (pasivo, i) =>
            <div className="pdn_d_box">
              <div className="pdn_bar_container">
                <div className={ 'pdn_bar ' + pasivo.titularidad_obligacion.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}></div>
              </div>
              <p className="pdn_graph_label">
              <b className={ 'pdn_graph_label_item label ' + pasivo.titularidad_obligacion.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}></b> {pasivo.titularidad_obligacion.valor}</p>
            </div>
            )}
          </div>
        </div>
        {/* row ends*/ }

        {/* row */ }
        <div className="row">
          <div className="col-sm-12">
            { this.items().map( (pasivo, i) =>
            <div className="pdn_d_box" key={"pasivo-" + i} id={"pasivo-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label ' + pasivo.titularidad_obligacion.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}> {pasivo.titularidad_obligacion.valor}</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(pasivo, i, e)} heref="#" className={"pdn_arrow " + (pasivo.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (pasivo.show ? "block" : "none")} }>
                {/* row starts*/}
                <div className="row pdn_border">
                  {/* Tipo de obligación*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de obligación</p>
                    <h3>{pasivo.tipo_obligacion}</h3>
                  </div>
                  {/* Monto original*/}
                  <div className="col-sm-4">
                    <p className="pdn_label center">Monto original</p>
                    <h3 className="pdn_amount center">${pasivo.monto_original} {pasivo.tipo_moneda.codigo} <span>({pasivo.tipo_moneda.moneda})</span> </h3>
                  </div>
                  {/* Saldo pendiente*/}
                  <div className="col-sm-4">
                    <p className="pdn_label right">Saldo pendiente</p>
                    <h3 className="pdn_amount right">${pasivo.saldo_pendiente} {pasivo.tipo_moneda.codigo} <span>({pasivo.tipo_moneda.moneda})</span> </h3>
                  </div>
                </div>
                {/* row ends*/}

                {/* row starts*/}
								<div className="row pdn_border">
									{/* Tipo de acreedor*/}
									<div className="col-sm-4">
										<p className="pdn_label">Tipo de acreedor</p>
										<p className="pdn_data_p">{pasivo.tipo_acreedor.valor}</p>
									</div>
									{/* Tasa de interés*/}
									<div className="col-sm-4">
										<p className="pdn_label">Tasa de interés</p>
										<p className="pdn_data_p">{pasivo.tasa_interes}</p>
									</div>
									{/* Fecha de adeudo*/}
									<div className="col-sm-4">
										<p className="pdn_label">Fecha de obligación</p>
										<p className="pdn_data_p">{pasivo.fecha_obligacion}</p>
									</div>
								</div>
								{/* row ends*/}

                {/* row starts*/}
								<div className="row pdn_border">
									{/* País*/}
									<div className="col-sm-4">
										<p className="pdn_label">País</p>
										<p className="pdn_data_p">{pasivo.nacional_extranjero.valor}</p>
									</div>
									{/* Sector o industria*/}
									<div className="col-sm-4">
										<p className="pdn_label">Sector o industria</p>
										<p className="pdn_data_p">{pasivo.sector_industria.valor}</p>
									</div>
									{/* Tipo de operación*/}
									<div className="col-sm-4">
										<p className="pdn_label">Tipo de operación</p>
										<p className="pdn_data_p">{pasivo.tipo_operacion.valor}</p>
									</div>
								</div>
								{/* row ends*/}

                {/* table */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Garantía </th>
                      <th>Porcentaje de obligación del titular</th>
                      <th>Plazo de obligación</th>
                      <th>Montos abonados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b className= { 'pdn_' + pasivo.garantia}></b> {pasivo.garantia ? "Sí" : "No"}</td>
                      <td>{pasivo.porcentaje_obligacion_titular}%
                        <div className="pdn_bar_container darken">
                          <div className="pdn_bar participacion" style={{ width: pasivo.porcentaje_obligacion_titular + '%' }}></div>
                        </div>
                      </td>
                      <td>{pasivo.plazo_obligacion+' '+pasivo.unidad_medida_plazo.valor}</td>
                      <td>
                      { pasivo.montos_abonados.map( (monto, j) =>
                        <span>${monto} <br/></span>
                     )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* table ends */}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{pasivo.observaciones}</p>
              </div>
              {/* div close/open  ends*/}
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
    return this.props.profile.pasivos.otras_obligaciones;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default PasivosObligaciones;
