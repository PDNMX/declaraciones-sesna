/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import {Typography, Grid, Button, Paper} from '@material-ui/core';

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
      <Grid container spacing={24} direction={'row-reverse'} className="sidecontent">
  			<Grid item xs={12} sm={9}>
          <h2>Clientes principales ({this.items().length})</h2>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className="pdn_d_box">
                <Paper className="pdn_bar_container">
                  <Paper className="pdn_bar declarante"></Paper>
                </Paper>
                <p className="pdn_graph_label"> <b className={ 'pdn_graph_label_item label declarante' }></b> Declarante</p>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={12}>
            { this.items().map( (interes, i) =>
              <Paper className="pdn_d_box" key={"interes-" + i}>
                <Grid container spacing={24} className="pdn_border">
                  <Grid item xs={6}>
                    <p><span className={ 'label declarante' }> Declarante</span></p>
                  </Grid>
                  <Grid item xs={6} className="right">
                    <a onClick={(e) => this.toggl(interes, i, e)} heref="#" className={"pdn_arrow " + (interes.show ?  "close" : "open")}></a>
                  </Grid>
                </Grid>

                <div style={ {display : (interes.show ? "block" : "none")} }>
                  <Grid container spacing={24} className="pdn_border">
                    <Grid item xs={12} sm={9}>
                      <p className="pdn_label">Nombre del negocio</p>
                      <h3>{interes.nombre_negocio}</h3>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <p className="pdn_label">Número de registro</p>
                      <h3>{interes.numero_registro}</h3>
                    </Grid>
                  </Grid>

                  <Grid container spacing={24} className="pdn_border">
                    <Grid item xs={12}>
                      <p className="pdn_label">Sector o industria</p>
                      <p className="pdn_data_p">{interes.sector_industria.valor}</p>
                    </Grid>
                  </Grid>

                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <p className="pdn_label">Observaciones</p>
                      <p className="pdn_data_p">{interes.observaciones}</p>
                    </Grid>
                  </Grid>
                </div>
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
