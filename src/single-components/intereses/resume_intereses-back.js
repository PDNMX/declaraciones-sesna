/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import {Typography, Grid} from '@material-ui/core';

import BaseGraph from "../BaseGraph";
let d3 = Object.assign({}, require("d3-format"));

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class InteresesResume extends Component{
  constructor(props){
    super(props);

    let elems = this.props.profile.intereses.empresas_sociedades_asociaciones.map(d => {
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
    let fakeData = [
      {
        name : "Empresas",
        amount : [5, 0, 0, 0, 0, 0]
      },

      {
        name : "Membresías",
        amount : [1, 2, 1, 1, 0, 0]
      },

      {
        name : "Apoyos",
        amount : [1, 0, 0, 0, 2, 0]
      },

      {
        name : "Representación Activa",
        amount : [1,0, 0, 0, 0, 0]
      },

      {
        name : "Representación Pasiva",
        amount : [0,2, 0, 0, 0, 0]
      },

      {
        name : "Socios",
        amount : [1, 0, 2, 0, 0, 0]
      },

      {
        name : "Clientes",
        amount : [1, 1, 0, 0, 0, 0]
      },

      {
        name : "Otras partes",
        amount : [1, 0, 0, 0, 0, 0]
      },

      {
        name : "Beneficios",
        amount : [1, 0, 2, 0, 0, 0]
      }
    ];

    return(
      <div className="col-sm-9 col-sm-offset-3 sidecontent">
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <div className="pdn_d_box">
            <BaseGraph data={fakeData} format={d3.format(",")} />
            <p className="pdn_graph_label right">
            <b className='pdn_graph_label_item label declarante'></b> Declarante
            <b className='pdn_graph_label_item label conyuge'></b> Conyugé
            <b className='pdn_graph_label_item label hijos'></b> Hijo/Hija
            <b className='pdn_graph_label_item label padres'></b> Padre/Madre
            <b className='pdn_graph_label_item label suegros'></b> Suegro/Suegra
            <b className='pdn_graph_label_item label otro'></b> Otro
            </p>
            </div>
          </Grid>
        </Grid>
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
export default InteresesResume;
