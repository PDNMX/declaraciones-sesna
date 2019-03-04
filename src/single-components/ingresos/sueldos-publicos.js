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
class IngresosSueldosPublicos extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.ingresos.sueldos_salarios_publicos.map(d => {
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
    console.log("some stuff",  this.items() );
    //return null;
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
        <h2>Sueldos y Salarios por el Encargo Público ({this.items().length})</h2>

        {/* row */ }
        <div className="row">
          <div className="col-sm-12">
            <div className="pdn_d_box">
              <div className="pdn_bar_container">
                <div className="pdn_bar declarante"></div>
              </div>
              <p className="pdn_graph_label">
              <b className={ 'pdn_graph_label_item label declarante' }></b> Declarante</p>
            </div>
          </div>
        </div>
        {/* row ends*/ }

        <div className="row">
          <div className="col-sm-12">
            {this.items().map( (sueldo, i) =>
            <div className="pdn_d_box" key={"sueldo-" + i} id={"sueldo-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label declarante' }> Declarante</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(sueldo, i, e)} heref="#" className={"pdn_arrow " + (sueldo.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (sueldo.show ? "block" : "none")} }>
                {/* row */}
                <div className="row pdn_border">
                  {/* Ente público */}
                  <div className="col-sm-7">
                    <p className="pdn_label">Ente público</p>
                    <h3>{sueldo.ente_publico.valor}</h3>
                  </div>
                  {/* Ingreso bruto anual*/}
                  <div className="col-sm-5">
                    <p className="pdn_label right">Ingreso bruto anual</p>
                    <h3 className="pdn_amount right">${sueldo.ingreso_bruto_anual.valor} {sueldo.ingreso_bruto_anual.moneda.codigo} <span>({sueldo.ingreso_bruto_anual.moneda.moneda})</span> </h3>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  {/* R.F.C*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">R.F.C</p>
                    <p className="pdn_data_p">{sueldo.rfc}</p>
                  </div>
                  {/* Duración frecuencia */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Duración / frecuencia</p>
                    <p className="pdn_data_p">{sueldo.ingreso_bruto_anual.duracion_frecuencia} {sueldo.ingreso_bruto_anual.unidad_temporal.valor}</p>
                  </div>
                  {/* Fecha de transacción */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Fecha de transacción</p>
                    <p className="pdn_data_p">{sueldo.ingreso_bruto_anual.fecha_transaccion}</p>
                  </div>
                </div>
                {/* row ends*/}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{sueldo.observaciones}</p>
              </div>
              {/* div close/open  ends*/}
            </div>
            )}
          </div>
          {/* pdn_d_box ends*/}
        </div>
        {/* row ends*/}
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
    return this.props.profile.ingresos.sueldos_salarios_publicos;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default IngresosSueldosPublicos;
