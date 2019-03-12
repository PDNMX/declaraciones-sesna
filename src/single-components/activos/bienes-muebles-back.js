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
class ActivosBienesMuebles extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.activos.bienes_muebles_registrables.map(d => {
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
        <h2>Bienes muebles registrables ({this.items().length})</h2>

        {/* row */ }
        <div className="row">
          <div className="col-sm-12">
            { this.items().map( (mueble, i) =>
            <div className="pdn_d_box">
              <div className="pdn_bar_container">
                <div className="pdn_bar declarante"></div>
              </div>
              <p className="pdn_graph_label">
              <b className={ 'pdn_graph_label_item label ' + mueble.titular_bien.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}></b> {mueble.titular_bien.valor}</p>
            </div>
            )}
          </div>
        </div>
        {/* row ends*/ }

        <div className="row">
          <div className="col-sm-12">
            { this.items().map( (mueble, i) =>
            <div className="pdn_d_box" key={"mueble-" + i} id={"mueble-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className={ 'label ' + mueble.titular_bien.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}> {mueble.titular_bien.valor}</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(mueble, i, e)} heref="#" className={"pdn_arrow " + (mueble.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}

              {/* div close/open */}
              <div style={ {display : (mueble.show ? "block" : "none")} }>
                <div className="row pdn_border">
                  {/* Tipo de operación*/}
                  <div className="col-sm-7">
                    <p className="pdn_label">Tipo de bien</p>
                    <h3>{mueble.tipo_bien_mueble.valor}</h3>
                  </div>
                  {/* Precio de adquisición*/}
                  <div className="col-sm-5">
                    <p className="pdn_label right">Precio de adquisición</p>
                    <h3 className="pdn_amount right">${mueble.precio_adquisicion.valor} {mueble.precio_adquisicion.moneda.codigo} <span>({mueble.precio_adquisicion.moneda.moneda})</span> </h3>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  {/* Marca*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Marca</p>
                    <p className="pdn_data_p">{mueble.marca}</p>
                  </div>
                  {/* subMarca*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Submarca</p>
                    <p className="pdn_data_p">{mueble.submarca}</p>
                  </div>
                  {/* Modelo*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Modelo</p>
                    <p className="pdn_data_p">{mueble.modelo}</p>
                  </div>
                </div>
                {/* row ends*/}


                <div className="row pdn_border">
                  {/* Fecha de adquisición */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Fecha de adquisición</p>
                    <p className="pdn_data_p">{mueble.fecha_adquisicion}</p>
                  </div>
                  {/* Forma  de adquisición */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Forma  de adquisición</p>
                    <p className="pdn_data_p">{mueble.forma_adquisicion.valor}</p>
                  </div>
                  {/* Tipo de operación*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de operación</p>
                    <p className="pdn_data_p">{mueble.tipo_operacion.valor}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* table */}
                <div className="pdn_mobile_table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Relación con la persona que lo adquirio </th>
                      <th>Porcentaje de la propiedad</th>
                      <th>Sector o industria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{mueble.relacion_persona_quien_adquirio.valor}</td>
                      <td>{mueble.porcentaje_propiedad}%
                        <div className="pdn_bar_container darken">
                          <div className="pdn_bar participacion" style={{ width: mueble.porcentaje_propiedad + '%' }}></div>
                        </div>
                      </td>
                      <td>{mueble.sector_industria.valor}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                {/* table ends */}

                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{mueble.observaciones}</p>
              </div>
              {/* div close/open  ends*/}
            </div>
            )}
          </div>
        </div>
        {/* row ends*/ }
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
    return this.props.profile.activos.bienes_muebles_registrables;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosBienesMuebles;
