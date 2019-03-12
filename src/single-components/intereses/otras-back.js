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
class InteresesOtras extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.intereses.otras_partes.map(d => {
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
        <h2>Otras partes relacionadas ({this.items().length})</h2>

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
                  {/* Tipo de relación */}
                  <div className="col-sm-9">
                    <p className="pdn_label">Tipo de relación</p>
                    <h3>{interes.tipo_relacion.valor}</h3>
                  </div>
                  {/*Tiene interés */}
                  <div className="col-sm-3">
                    <p className="pdn_label">Tiene interés</p>
                    <p className="pdn_data_p"><b className= { 'pdn_' + interes.tiene_interes}></b> {interes.tiene_interes ? "Sí" : "No"}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* row */}
                <div className="row pdn_border">
                  {/*Fecha de inicio */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Ocupación</p>
                    <p className="pdn_data_p">{interes.ocupacion}</p>
                  </div>
                  {/* Sector o industria */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Sector o industria</p>
                    <p className="pdn_data_p">{interes.sector_industria.valor}</p>
                  </div>

                  {/*Fecha de inicio */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Fecha de inicio de relación</p>
                    <p className="pdn_data_p">{interes.fecha_inicio_relacion}</p>
                  </div>
                </div>
                {/* row ends*/}
                <p className="pdn_label">Explicación</p>
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
    return this.props.profile.intereses.otras_partes;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesOtras;
