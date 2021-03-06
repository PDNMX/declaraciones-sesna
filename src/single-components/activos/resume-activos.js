/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import {Grid, Paper} from '@material-ui/core';

import BaseGraph from "../BaseGraph";

let d3 = Object.assign({}, require("d3-format"));
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
                  // let item = d;
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

    let fakeData = [
      {
        name : "Bienes inmuebles",
        amount : [5000000, 0, 0, 0, 0, 0]
      },

      {
        name : "Bienes muebles",
        amount : [1000000, 200000, 500000, 520000, 0, 0]
      },

      {
        name : "Bienes no registrables",
        amount : [150000, 0, 0, 0, 0, 0]
      },

      {
        name : "Inversiones",
        amount : [250000,500000, 600000, 0, 0, 0]
      },

      {
        name : "Efectivo y metales",
        amount : [300000, 0, 0, 0, 0, 0]
      },

      {
        name : "Fideicomisos",
        amount : [330000, 0, 200000, 0, 1200000, 0]
      },

      {
        name : "Bienes intangibles",
        amount : [43000, 20000, 0, 0, 0, 0]
      },

      {
        name : "Cuentas por cobrar",
        amount : [130000, 0, 0, 0, 0, 0]
      },

      {
        name : "Beneficios",
        amount : [3000, 0, 90000, 0, 0, 0]
      }
    ];

    return(
      <Grid container spacing={24} direction={'row-reverse'} className="sidecontent">
        <Grid item xs={12} sm={9}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Paper className="pdn_d_box">
              <BaseGraph data={fakeData} format={d3.format("$,")} />
              <p className="pdn_graph_label right">
              <b className='pdn_graph_label_item label declarante'></b> Declarante
              <b className='pdn_graph_label_item label conyuge'></b> Conyugé
              <b className='pdn_graph_label_item label hijos'></b> Hijo/Hija
              <b className='pdn_graph_label_item label padres'></b> Padre/Madre
              <b className='pdn_graph_label_item label suegros'></b> Suegro/Suegra
              <b className='pdn_graph_label_item label otro'></b> Otro
              </p>
              </Paper>
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
           if(item === d){
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
