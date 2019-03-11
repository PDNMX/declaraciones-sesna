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
class InteresesClientes extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.intereses.clientes_principales.map(d => {
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
      <div  className="col-sm-9 col-sm-offset-3 sidecontent">
        <h2>Clientes principales ({this.items().length})</h2>

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
            { this.items().map( (interes, i) =>
            <div className="pdn_d_box" key={"interes-" + i} id={"interes-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label declarante' }> Declarante</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(interes, i, e)} heref="#" className={"pdn_arrow " + (interes.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (interes.show ? "block" : "none")} }>
                {/* row */}
                <div className="row pdn_border">
                  {/* Nombre del negocio */}
                  <div className="col-sm-9">
                    <p className="pdn_label">Nombre del negocio</p>
                    <h3>{interes.nombre_negocio}</h3>
                  </div>
                  {/*Número de registro */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Número de registro</p>
                    <h3>{interes.numero_registro}</h3>
                  </div>
                </div>
                {/* row ends*/}

                {/* row */}
                <div className="row pdn_border">
                  {/* Sector o industria */}
                  <div className="col-sm-12">
                    <p className="pdn_label">Sector o industria</p>
                    <p className="pdn_data_p">{interes.sector_industria.valor}</p>
                  </div>
                </div>
                {/* row ends*/}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{interes.observaciones}</p>
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
    return this.props.profile.intereses.clientes_principales;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesClientes;
