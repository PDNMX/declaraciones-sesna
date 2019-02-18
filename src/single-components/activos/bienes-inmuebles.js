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
                  <div className="col-sm-9">
                    <p className="pdn_label">Tipo de bien</p>
                    <h3>{inmueble.tipo_bien.valor}</h3>
                  </div>
                  <div className="col-sm-3">
                    <p className="pdn_label">Precio de adquisición</p>
                    <p className="pdn_data_p">${inmueble.precio_adquisicion.valor} {inmueble.precio_adquisicion.moneda.codigo} ({inmueble.precio_adquisicion.moneda.moneda}) </p>
                  </div>
                </div>
              </div>
          <p className="pdn_label">Tipo de operación</p>
          <p className="pdn_data_p">{inmueble.tipo_operacion.valor}</p>




          <p className="pdn_label">Superficie del terreno</p>
          <p className="pdn_data_p">{inmueble.superficie_terreno}</p>

          <p className="pdn_label">Superficie de construcción</p>
          <p className="pdn_data_p">{inmueble.superficie_construccion}</p>

          <p className="pdn_label">Porcentaje  de propiedad</p>
          <p className="pdn_data_p">{inmueble.porcentaje_propiedad}</p>

          <p className="pdn_label">Forma  de adquisición</p>
          <p className="pdn_data_p">{inmueble.forma_adquisicion.valor}</p>

          <p className="pdn_label">Relación con la persona que lo adquirió</p>
          <p className="pdn_data_p">{inmueble.relacion_persona_adquirio.valor}</p>

          <p className="pdn_label">Sector/Industria</p>
          <p className="pdn_data_p">{inmueble.sector_industria.valor}</p>

          <p className="pdn_label">Fecha de adquisición</p>
          <p className="pdn_data_p">{inmueble.fecha_adquisicion}</p>



          <p className="pdn_label">Valor Catastral</p>
          <p className="pdn_data_p">${inmueble.valor_catastral}</p>

          <p className="pdn_label">Observaciones</p>
          <p className="pdn_data_p">{inmueble.observaciones}</p>

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
