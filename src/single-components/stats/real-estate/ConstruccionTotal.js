/*
	/////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  /////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import {Grid, Paper} from '@material-ui/core';
import * as ConstClass from  '../../../ConstValues.js';
import ChartistGraph from 'react-chartist';
import "../../../css/chartist.min.css"

import "../../../css/chartist-plugin-tooltip.css";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

let d3     = Object.assign({}, require("d3-format"));
let format = d3.format(",");

/*
  /////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  /////////////////////////////////////////////////////////////////
*/
class ConstruccionTotal extends Component{

  /*
   * C O N S T R U C T O R
   * ------------------------------------------------------------
   */
   constructor(){
    super();

    this.makeData  = this.makeData.bind(this);
    this.getInfo   = this.getInfo.bind(this);
    this.makeQuery = this.makeQuery.bind(this);

    this.state = {
      data : null
    }

    let promises = this.makeData();

    Promise.all(promises.map(d => d.promise)).then(d => {

      let data = {
        labels : promises.map(d => d.label),
        series : [d]
      }

      this.setState({data : data});
    });
   }

  /*
   * R E N D E R
   * ------------------------------------------------------------
   */
  render(){
    if(!this.state.data) return null;

    let options = {
      plugins:[ChartistTooltip({
        appendToBody: true,
        transformTooltipTextFnc : value => format(value)
      })]
    };

    return(
      <Grid container spacing={24}>
        <Grid item sm={12}>
          <Paper className="pdn_d_box">
            <h2>Funcionarios por propiedad (área de construcción total)</h2>

            <ChartistGraph data={this.state.data} type={"Bar"} options={options} />
            <div className="pdn_divider"></div>
        </Paper>
      </Grid>
    </Grid>
    );
  }

  /*
   * M E T H O D S
   * ------------------------------------------------------------
   */

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  getInfo(range){
    let connObj = Object.assign({}, ConstClass.fetchObj);

    connObj.body = this.makeQuery(range);

    return fetch(ConstClass.endpoint, connObj)
          .then(response => response.json())
          .then(d => {
            return d.total;
          });
  }

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  makeData(){
    let res = [],
        gl  = ConstClass.propertyChartConf,
        i;

    for(i =0; i < gl.length; i++ ){
      res.push({
        promise : this.getInfo(gl[i]),
        label : this.makeLabel(gl[i])
      });
    }

    return res;
  }

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  makeLabel(range){
    let r1 = range[0] ?  range[0] : 0,
        r2 = range[1] ? range[1] : "o más";

    return `${r1} - ${r2}`;
  }

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  makeQuery(range){
    let str     = ConstClass.PROP_NAMES.superficieConstruccion,
        search  = {query : {}, limit : 2};

    search.query[str] = {
      "desde" : (range[0]? range[0] : 0), 
      "hasta" : (range[1]? range[1] : 999999999) 
    };

    return JSON.stringify(search);
  }

}

export default ConstruccionTotal;