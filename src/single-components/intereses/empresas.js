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
class InteresesEmpresas extends Component{
  constructor(){
    super();

    console.log("yooo");
  }
  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
  render(){
    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
      <h2>Empresas, sociedades o asociaciones ({this.items().length})</h2>
      <div className="row">
				<div className="col-sm-12">
					<div className="pdn_d_box">
						<div className="pdn_bar_container">
							<div className="pdn_bar conyuge"></div>
						</div>
						<p className="pdn_graph_label"><b className="pdn_graph_label_item label conyuge"></b> Cónyugue</p>
					</div>
				</div>
			</div>
    <div className="row">
      <div className="col-sm-12">
        { this.items().map( (interes, i) =>
        <div className="pdn_d_box" v-for="interes in items">
            <div class="row pdn_border">
              {/* empresa, sociedad o asociación */}
              <div className="col-sm-9">
                <p className="pdn_label">Nombre de la empresa, sociedad o asociación</p>
                <h3>{interes.nombre_empresa_sociedad_asociacion}</h3>
                <p className="pdn_data_p pnd_box_note pdn_gray">{interes.domicilio.vialidad.tipo_vial+' '+interes.domicilio.vialidad.nom_vial+' No.' +interes.domicilio.numExt+ ' No. Int.'+interes.domicilio.numInt}
                 <br/> {interes.domicilio.localidad.nom_loc+', '+interes.domicilio.municipio.nom_mun+', '+interes.domicilio.entidad_federativa.nom_ent+', '+interes.domicilio.pais.valor+' C.P. '+interes.domicilio.cp }</p>
              </div>
              {/* constitución */}
              <div className="col-sm-3">
                <p className="pdn_label">Fecha de constitución</p>
                <p className="pdn_data_p">{interes.fecha_constitucion}</p>
              </div>
            </div>
            {/* row ends*/}
            <div className="row pdn_border">
              {/* país*/}
              <div className="col-sm-4">
                <p className="pdn_label">País</p>
                <p className="pdn_data_p">{interes.pais_registro.valor}</p>
              </div>
              {/* RFC*/}
              <div className="col-sm-4">
                <p className="pdn_label">R.F.C</p>
                <p className="pdn_data_p">{interes.rfc}</p>
              </div>
              {/* # registro */}
              <div className="col-sm-4">
                <p className="pdn_label">Número de registro</p>
                <p className="pdn_data_p">{interes.numero_registro}</p>
              </div>
            </div>




        <p className="pdn_label">Domicilio</p>
        <p className="pdn_label">Rol</p>
        <p className="pdn_data_p">{interes.rol}</p>
        <p className="pdn_label">Actividad económica</p>
        <p className="pdn_data_p">{interes.actividad_economica ? "Sí" : "No"}</p>
        <p className="pdn_label">Sector o industria</p>
        <p className="pdn_data_p">{interes.sector_industria.valor}</p>
        <p className="pdn_label">Porcentaje de participación</p>
        <p className="pdn_data_p">{interes.porcentaje_participacion}%</p>
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
  items(){
    return this.props.profile.intereses.empresas_sociedades_asociaciones;
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default InteresesEmpresas;
