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
class ActivosBienesInmuebles extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.activos.bienes_inmuebles.map(d => {
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
        <h2>Bienes inmuebles ({this.items().length})</h2>

        <div className="row">
          <div className="col-sm-12">
            <div className="pdn_d_box">
              <div className="pdn_bar_container">
                <div className="pdn_bar declarante"></div>
              </div>
              <p className="pdn_graph_label"><b className="pdn_graph_label_item label declarante"></b> Declarante</p>
            </div>
          </div>
        </div>
        {/* row ends*/ }

        <div className="row">
          <div className="col-sm-12">
            {/* box starts*/}
            { this.items().map( (inmueble, i) =>
            <div className="pdn_d_box" key={"inmueble-" + i} id={"inmueble-" + i}>
              {/* row starts*/}
              <div className="row pdn_border">
                <div className="col-sm-6">
                  <p><span className="label declarante"> Declarante</span></p>
                </div>
                <div className="col-sm-6 right">
                  <a onClick={(e) => this.toggl(inmueble, i, e)} heref="#" className={"pdn_arrow " + (inmueble.show ?  "close" : "open")}></a>
                </div>
              </div>
              {/* row ends*/}
              {/* div close/open */}
              <div style={ {display : (inmueble.show ? "block" : "none")} }>
                <div className="row pdn_border">
                  {/* Tipo de bien*/}
                  <div className="col-sm-7">
                    <p className="pdn_label">Tipo de bien</p>
                    <h3>{inmueble.tipo_bien.valor}</h3>
                  </div>
                  {/* Precio de adquisición*/}
                  <div className="col-sm-5">
                    <p className="pdn_label right">Precio de adquisición</p>
                    <h3 className="pdn_amount right">${inmueble.precio_adquisicion.valor} {inmueble.precio_adquisicion.moneda.codigo} <span>({inmueble.precio_adquisicion.moneda.moneda})</span> </h3>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  {/* Superficie del terreno*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Superficie del terreno</p>
                    <p className="pdn_data_p">{inmueble.superficie_terreno}</p>
                  </div>
                  {/* Superficie de construcción */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Superficie de construcción</p>
                    <p className="pdn_data_p">{inmueble.superficie_construccion}</p>
                  </div>
                  {/* Valor Catastral*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Valor Catastral</p>
                    <p className="pdn_data_p">${inmueble.valor_catastral}</p>
                  </div>
                </div>
                {/* row ends*/}

                <div className="row pdn_border">
                  {/* Fecha de adquisición */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Fecha de adquisición</p>
                    <p className="pdn_data_p">{inmueble.fecha_adquisicion}</p>
                  </div>
                  {/* Forma  de adquisición */}
                  <div className="col-sm-4">
                    <p className="pdn_label">Forma  de adquisición</p>
                    <p className="pdn_data_p">{inmueble.forma_adquisicion.valor}</p>
                  </div>
                  {/* Tipo de operación*/}
                  <div className="col-sm-4">
                    <p className="pdn_label">Tipo de operación</p>
                    <p className="pdn_data_p">{inmueble.tipo_operacion.valor}</p>
                  </div>
                </div>
                {/* row ends*/}

                {/* table */}
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
                      <td>{inmueble.relacion_persona_adquirio.valor}</td>
                      <td>{inmueble.porcentaje_propiedad}%
                        <div className="pdn_bar_container darken">
                          <div className="pdn_bar participacion" style={{ width: inmueble.porcentaje_propiedad + '%' }}></div>
                        </div>
                      </td>
                      <td>{inmueble.sector_industria.valor}</td>
                    </tr>
                  </tbody>
                </table>
                {/* table ends */}
                <p className="pdn_label">Observaciones</p>
                <p className="pdn_data_p">{inmueble.observaciones}</p>

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
    return this.props.profile.activos.bienes_inmuebles;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default ActivosBienesInmuebles;
