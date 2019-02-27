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
class ActivosBeneficiosEnEspecie extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.activos.uso_especie_propiedad_tercero.map(d => {
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
        <h2>Uso o Beneficios en Especie Propiedad de un Tercero ({this.items().length})</h2>

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
            { this.items().map( (beneficio, i) =>
            <div className="pdn_d_box" key={"beneficio-" + i} id={"beneficio-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label declarante'}> Declarante</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(beneficio, i, e)} heref="#" className={"pdn_arrow " + (beneficio.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (beneficio.show ? "block" : "none")} }>
                {/* row */}
                <div className="row pdn_border">
                  {/* Tipo de bien*/}
                  <div className="col-sm-7">
                    <p className="pdn_label">Tipo de bien</p>
                    <h3>{beneficio.tipo_bien}</h3>
                  </div>
                  {/* Ingreso monetario obtenido*/}
                  <div className="col-sm-5">
                    <p className="pdn_label right">Valor del mercado</p>
                    <h3 className="pdn_amount right">${beneficio.valor_mercado.valor} {beneficio.valor_mercado.moneda.codigo} <span>({beneficio.valor_mercado.moneda.moneda})</span></h3>
                  </div>
                </div>
                {/* row ends*/}

                {/* table */}
                <div className="pdn_mobile_table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Relación con Propietario del Bien</th>
                      <th>Fecha de inicio</th>
                      <th>Sector/Industria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className={ 'label ' + beneficio.relacion_persona.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}> {beneficio.relacion_persona.valor}</span></td>
                      <td>{beneficio.fecha_inicio}</td>
                      <td>{beneficio.sector_industria.valor}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                {/* table ends */}

                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{beneficio.observaciones}</p>
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
    return this.props.profile.activos.uso_especie_propiedad_tercero;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosBeneficiosEnEspecie;
