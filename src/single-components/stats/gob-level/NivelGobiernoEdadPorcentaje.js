/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import {Grid, Paper} from '@material-ui/core';

import * as ConstClass from  '../../../ConstValues.js';
import ChartistGraph from 'react-chartist';
import "../../../css/chartist.min.css"

import "../../../css/chartist-plugin-tooltip.css";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

let d3     = Object.assign({}, require("d3-format"));
let format = d3.format(".4n");

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class NivelGobiernoEdadPorcentaje extends Component{

  /*
   * C O N S T R U C T O R
   * ----------------------------------------------------------------------
   */
   constructor(){
    super();

    this.makeData  = this.makeData.bind(this);
    this.getInfo   = this.getInfo.bind(this);
    this.makeQuery = this.makeQuery.bind(this);
    this.buildMatrix = this.buildMatrix.bind();

    this.state = {
      data : null,
      options : ConstClass.StatsChartOptions.donutOptions
    }

    let promises = this.makeData();

    Promise.all(promises.map(d => d.promise)).then(d => {



      let data = {
        labels  : [...new Set(promises.map(d => d.label))],
        _labels : [...new Set(promises.map(d => d._label))],
        series  : this.buildMatrix(d, promises)
      }


      this.setState({data : data});

    });
   }

  /*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
	render(){
    if(!this.state.data) return null;
    let st = this.state;
    let colors = ConstClass.ChartColors;

    let _options = {
      plugins:[ChartistTooltip({
        appendToBody: true,
        transformTooltipTextFnc : value => format(value) + "%"
      })]
    };

    let options = Object.assign(st, _options);
		return(
      <Grid container spacing={24}>
        <Grid item sm={12}>
          <Paper className="pdn_d_box">
            <h2>Funcionarios por nivel de gobierno y rango de edad (porcentaje)</h2>
            <nav className="pdn_viz">
            <ul>
            { this.state.data.series.map( (d,i) =>
              <li key={"ngnepg-" + i}>
                <ChartistGraph data={ {series : d} } type={"Pie"} options={options} />
                <p>{this.state.data.labels[i]}</p>
              </li>
            )}
            </ul>
            </nav>
            <ul className="list_inline">
            {this.state.data._labels.map( (d, i) =>
              <li key={"ngenpl-" + i}>
                <span style={ {display: "inline-block", width: "1em", height: "1em", background: colors[i]} }>
                </span> {d}
              </li>
            )}
            </ul>

        </Paper>
      </Grid>
    </Grid>
		);
	}
  /*
   * M E T H O D S
   * ----------------------------------------------------------------------
   */

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  getInfo(_from, _to, gl){
    let connObj = Object.assign({}, ConstClass.fetchObj);

    connObj.body = this.makeQuery(_from, _to, gl);

    return fetch(ConstClass.endpoint, connObj)
          .then(response => response.json())
          .then(d => {
            return d.total;
            //return d;
          });
  }

   /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  buildMatrix(data, response){

    let b   = [...data],
        gl  = ConstClass.GobLevels,
        ra  = [...new Set(response.map(d => d._label))],
        i, res = [];
    for(i =0; i < gl.length; i++ ){
      let _el   = b.splice(0, ra.length),
          total = _el.reduce(ConstClass.reducer),
          el    = _el.map(d => format((d/total) * 100) );
      res.push(el)
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
  makeData(){
    let res = [],
        gl  = ConstClass.GobLevels,
        currentYear = (new Date()).getFullYear(),
        _from = d => `${d}-01-01`,
        _to   = d => `${d}-07-07`,
        conf = ConstClass.AgeChartsConf,
        year1 = currentYear - conf.from,
        year2 = year1 - conf.step,
        i;

    for(i =0; i < gl.length; i++ ){
      while(year1 > currentYear - conf.to){
        res.push({
          promise : this.getInfo(_from(year2), _to(year1), gl[i].key ),
          label : gl[i].label,
          _label : `${currentYear - year1} - ${currentYear - year2}`
        });

        year1-= conf.step;
        year2-= conf.step;
      }

      year1 = currentYear - conf.from;
      year2 = year1 - conf.step;
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
  makeQuery(_from, _to, gl){
    let str1   = ConstClass.PROP_NAMES.nacimiento,
        str2   = ConstClass.PROP_NAMES.nivelGobierno,
        search = {query : {}, limit : 2};

    search.query[str1] = {"desde" : _from, "hasta" : _to};
    search.query[str2] = gl;

    return JSON.stringify(search);
  }
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default NivelGobiernoEdadPorcentaje;
