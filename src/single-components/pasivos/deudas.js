/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import {Grid, Paper} from '@material-ui/core';

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class Deudas extends Component{
	constructor(props){
    super(props);

    let elems = this.props.profile.pasivos.deudas.map(d => {
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
			<Grid container spacing={24} direction={'row-reverse'} className="col-sm-offset-3 sidecontent">
        <Grid item sm={9}>
				<h2>Deudas ({this.items().length})</h2>
          <Grid container spacing={24}>
            <Grid item sm={12}>
						{ this.items().map( (pasivo, i) =>
              <Paper className="pdn_d_box">
                <Paper className="pdn_bar_container">
                  <Paper className={ 'pdn_bar ' + pasivo.titularidad_deuda.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}></Paper>
                </Paper>
								<p className="pdn_graph_label"><b className={ 'pdn_graph_label_item label ' + pasivo.titularidad_deuda.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}></b> {pasivo.titularidad_deuda.valor}</p>
              </Paper>
							)}
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item sm={12}>
              {/* box starts*/}
              { this.items().map( (pasivo, i) =>
              <Paper className="pdn_d_box" key={"interes-" + i}>
                <Grid container spacing={24} className="row pdn_border">
                  <Grid item sm={6}>
										<p><span className={ 'label ' + pasivo.titularidad_deuda.valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}> {pasivo.titularidad_deuda.valor}</span></p>
                  </Grid>
                  <Grid item sm={6} className="right">
                    <a onClick={(e) => this.toggl(pasivo, i, e)} heref="#" className={"pdn_arrow " + (pasivo.show ?  "close" : "open")}></a>
                  </Grid>
                </Grid>
                {/* row ends*/}
                {/* div close/open */}
                <div style={ {display : (pasivo.show ? "block" : "none")} }>
                  <Grid container spacing={24} className="pdn_border">
                  {/* Tipo de adeudo */}
                    <Grid item sm={4}>
                      <p className="pdn_label">Tipo de adeudo</p>
											<h3>{pasivo.tipo_adeudo.valor}</h3>
                    </Grid>
										{/* Monto original*/}
                    <Grid item sm={4}>
											<p className="pdn_label center">Monto original</p>
											<h3 className="pdn_amount center">${pasivo.monto_original} {pasivo.tipo_moneda.codigo} <span>({pasivo.tipo_moneda.moneda})</span> </h3>
                    </Grid>
										{/* Saldo pendiente*/}
                    <Grid item sm={4}>
											<p className="pdn_label right">Saldo pendiente</p>
											<h3 className="pdn_amount right">${pasivo.saldo_pendiente} {pasivo.tipo_moneda.codigo} <span>({pasivo.tipo_moneda.moneda})</span> </h3>
                    </Grid>
                  </Grid>
                  {/* row ends*/}

                  <Grid container spacing={24} className="pdn_border">
										{/* Tipo de acreedor*/}
                    <Grid item sm={4}>
											<p className="pdn_label">Tipo de acreedor</p>
											<p className="pdn_data_p">{pasivo.tipo_acreedor.valor}</p>
                    </Grid>
										{/* Tasa de interés*/}
                    <Grid item sm={4}>
											<p className="pdn_label">Tasa de interés</p>
											<p className="pdn_data_p">{pasivo.tasa_interes}</p>
                    </Grid>
										{/* Fecha de adeudo*/}
                    <Grid item sm={4}>
											<p className="pdn_label">Fecha de adeudo</p>
											<p className="pdn_data_p">{pasivo.fecha_adeudo}</p>
                    </Grid>
                  </Grid>
                  {/* row ends*/}

                  <Grid container spacing={24} className="pdn_border">
                    {/* País */}
                    <Grid item sm={4}>
                      <p className="pdn_label">País</p>
											<p className="pdn_data_p">{pasivo.nacional_extranjero.valor}</p>
                    </Grid>
										{/* Sector o industria*/}
                    <Grid item sm={4}>
											<p className="pdn_label">Sector o industria</p>
											<p className="pdn_data_p">{pasivo.sector_industria.valor}</p>
                    </Grid>
										{/* Tipo de operación*/}
                    <Grid item sm={4}>
											<p className="pdn_label">Tipo de operación</p>
											<p className="pdn_data_p">{pasivo.tipo_operacion.valor}</p>
                    </Grid>
                  </Grid>
                  {/* row ends*/}

									{/* table */}
									<Grid container spacing={24} className="pdn_mobile_table">
                    <Grid item sm={12}>
										<table className="table">
											<thead>
												<tr>
													<th>Garantía </th>
													<th>Porcentaje de adeudo del titular</th>
													<th>Plazo del adeudo</th>
													<th>Montos abonados</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><b className= { 'pdn_' + pasivo.garantia}></b> {pasivo.garantia ? "Sí" : "No"}</td>
													<td>{pasivo.porcentaje_adeudo_titular}%
														<div className="pdn_bar_container darken">
															<div className="pdn_bar participacion" style={{ width: pasivo.porcentaje_adeudo_titular + '%' }}></div>
														</div>
													</td>
													<td>{pasivo.plazo_adeudo+' '+pasivo.unidad_medida_adeudo.valor}</td>
													<td>
													{ pasivo.montos_abonados.map( (monto, j) =>
														<span>${monto} <br/></span>
												 )}
													</td>
												</tr>
											</tbody>
										</table>
                    </Grid>
                  </Grid>
									{/* table ends */}

                  <Grid container spacing={24}>
                    <Grid item sm={12}>
										<p className="pdn_label">Observaciones</p>
										<p className="pdn_data_p">{pasivo.observaciones}</p>
                    </Grid>
                  </Grid>
                  {/* row ends*/}
                </div>
                {/* div close/open ends */}
              </Paper>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
		return this.props.profile.pasivos.deudas;
	}
}


/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default Deudas;
