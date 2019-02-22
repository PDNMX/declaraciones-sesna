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
class ActivosEfectivo extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.activos.efectivo_metales.map(d => {
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
        <h2>Efectivo y metales ({this.items().length})</h2>

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
        <div className="row">
          <div className="col-sm-12">
            { this.items().map( (efectivo, i) =>
            <div className="pdn_d_box" key={"efectivo-" + i} id={"efectivo-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label declarante'}> Declarante</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(efectivo, i, e)} heref="#" className={"pdn_arrow " + (efectivo.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (efectivo.show ? "block" : "none")} }>
                {/* row */}
                <div className="row pdn_border">
                  {/*Tipo de metal*/}
                  <div className="col-sm-8">
                    <p className="pdn_label">Tipo de metal</p>
                    <h3>{efectivo.tipo_metal.valor}</h3>
                  </div>
                  {/* Unidades*/}
                  <div className="col-sm-4">
                    <p className="pdn_label right">Unidades</p>
                    <h3 className="pdn_amount right">{efectivo.unidades}</h3>
                  </div>

                </div>
                {/* row ends*/}

                {/* row */}
                <div className="row pdn_border">
                  {/*Tipo de moneda*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de moneda</p>
                    <p className="pdn_data_p">{efectivo.tipo_moneda.moneda}</p>
                  </div>
                  {/* Forma  de adquisición*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Forma  de adquisición</p>
                    <p className="pdn_data_p">{efectivo.forma_adquisicion.valor}</p>
                  </div>
                  {/* Tipo de operación*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de operación</p>
                    <p className="pdn_data_p">{efectivo.tipo_operacion.valor}</p>
                  </div>

                </div>
                {/* row ends*/}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{efectivo.observaciones_comentarios}</p>
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
    return this.props.profile.activos.efectivo_metales;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosEfectivo;
