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
class InteresesApoyos extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.intereses.apoyos_beneficios_publicos.map(d => {
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
        <h2>Apoyos ({this.items().length})</h2>
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
                  <a onClick={(e) => this.toggl(interes, i, e)} heref="#" className={"pdn_arrow " + (interes.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}
              {/* div close/open */}
              <div style={ {display : (interes.show ? "block" : "none")} }>
                <div className="row pdn_border">
                  {/*programa*/}
                  <div className="col-sm-9">
                    <p className="pdn_label">Programa</p>
                    <h3>{interes.programa}</h3>
                  </div>
                  {/* valor anual*/}
                  <div className="col-sm-3">
                    <p className="pdn_label">Valor anual del apoyo</p>
                    <h3 className="pdn_amount right">${interes.valor_anual_apoyo} </h3>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  <div class="col-sm-4">
                    <p className="pdn_label">Institución otorgante</p>
                    <p className="pdn_data_p" >{interes.institucion_otorgante}</p>
                  </div>
                  <div class="col-sm-4">
                    <p className="pdn_label">Nivel de Gobierno</p>
                    <p className="pdn_data_p" >{interes.nivel_orden_gobierno.valor}</p>
                  </div>
                  <div class="col-sm-4">
                    <p className="pdn_label">Tipo de Apoyo</p>
                    <p className="pdn_data_p" >{interes.tipo_apoyo.valor}</p>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  <div class="col-sm-3">
                    <p className="pdn_label">Es beneficiario</p>
                    <p className="pdn_data_p"><b className= { 'pdn_' + interes.es_beneficiario}></b> {interes.es_beneficiario ? "Sí" : "No"}</p>
                  </div>
                  <div class="col-sm-9">
                    <p className="pdn_label">Explicación</p>
                    <p className="pdn_data_p">{interes.observaciones}</p>
                  </div>
                </div>
                {/* row ends*/}

              </div>
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
    return this.props.profile.intereses.apoyos_beneficios_publicos;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesApoyos;
