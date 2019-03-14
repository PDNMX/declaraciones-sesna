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

		let fakeData = [
      {
        name : "Deudas",
        amount : [30000, 0, 0, 0, 0, 0]
      },

      {
        name : "Otras obligaciones",
        amount : [10000, 20000, 20000, 20000, 0, 0]
      }
    ];

		return(
			<div className="col-sm-9 col-sm-offset-3 sidecontent">
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <div className="pdn_d_box">
            <BaseGraph data={fakeData} format={d3.format("$,")} />
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
