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
class ActivosInversiones extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.activos.inversiones_cuentas_valores.map(d => {
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
        <h2>Inversiones, cuentas y valores ({this.items().length})</h2>

        {/* row */ }
        <div className="row">
          <div className="col-sm-12">
            { this.items().map( (inversion, i) =>
            <div className="pdn_d_box">
              <div className="pdn_bar_container">
                <div className={ 'pdn_bar ' + inversion.titular_bien.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}></div>
              </div>
              <p className="pdn_graph_label">
              <b className={ 'pdn_graph_label_item label ' + inversion.titular_bien.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}></b> {inversion.titular_bien.valor}</p>
            </div>
            )}
          </div>
        </div>
        {/* row ends*/ }


        <div className="row">
          <div className="col-sm-12">
            { this.items().map( (inversion, i) =>
            <div className="pdn_d_box" key={"inversion-" + i} id={"inversion-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label ' + inversion.titular_bien.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}> {inversion.titular_bien.valor}</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(inversion, i, e)} heref="#" className={"pdn_arrow " + (inversion.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (inversion.show ? "block" : "none")} }>
                {/* row */}
                <div className="row pdn_border">
                  {/*Tipo de bien*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de bien</p>
                    <h3>{inversion.tipo_inversion.valor}</h3>
                  </div>
                  {/* Tipo especifico de inversión*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo especifico de inversión</p>
                    <p className="pdn_data_p">{inversion.tipo_especifico_inversion.valor}</p>
                  </div>
                  {/* Nombre de la Institución */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Nombre de la Institución</p>
                    <p className="pdn_data_p">{inversion.nombre_institucion}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* row */}
                <div className="row pdn_border">
                  {/* Inversión Nacional o Extranjera */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Inversión Nacional o Extranjera</p>
                    <p className="pdn_data_p">{inversion.nacional_extranjero.valor}</p>
                  </div>

                  {/* Tipo de moneda */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de moneda</p>
                    <p className="pdn_data_p">{inversion.tipo_moneda.moneda}</p>
                  </div>

                  {/* Tipo de operación */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de operación</p>
                    <p className="pdn_data_p">{inversion.tipo_operacion.valor}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* table */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Forma  de adquisición</th>
                      <th>Porcentaje  de inversión del funcionario</th>
                      <th>Sector</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{inversion.forma_adquisicion.valor}</td>
                      <td>{inversion.porcentaje_inversion}%
                        <div className="pdn_bar_container darken">
                          <div className="pdn_bar participacion" style={{ width: inversion.porcentaje_inversion + '%' }}></div>
                        </div>
                      </td>
                      <td>{inversion.sector_industria.valor}</td>
                    </tr>
                  </tbody>
                </table>
                {/* table ends */}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{inversion.observaciones}</p>
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
    return this.props.profile.activos.inversiones_cuentas_valores;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosInversiones;
