/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import * as ConstClass from  '../../../ConstValues.js';
import ChartistGraph from 'react-chartist';
import "../../../css/chartist.min.css";

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class EdadTotalEducacionPorcentaje extends Component{

	/*
   * C O N S T R U C T O R
   * ----------------------------------------------------------------------
   */
   constructor(){
    super();

    this.makeData    = this.makeData.bind(this);
    this.getInfo     = this.getInfo.bind(this);
    this.makeQuery   = this.makeQuery.bind(this);
    this.buildMatrix = this.buildMatrix.bind();

    this.state = {
      data : null,
      options : ConstClass.StatsChartOptions.donutOptions
    }

    let promises = this.makeData();

    Promise.all(promises.map(d => d.promise)).then(d => {

      let labels = [...new Set(promises.map(d => d.label))],
          data   = {
          	labels,
          	series  : this.buildMatrix(d, labels.length)
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
    let colors = ConstClass.ChartColors;
		return(
      <div>
        <h2>Funcionarios por rango de edad y nivel de gobierno (porcentaje)</h2>
        <ul>
        { this.state.data.series.map( (d,i) => 
          <li key={"ngnepgxs-" + i}>
            <ChartistGraph data={ {series : d} } type={"Pie"} options={this.state.options} />
            <p>{this.state.data.labels[i]}</p>
            <div className="pdn_divider"></div>
          </li>
        )}
        </ul>

        <ul className="list_inline">
        {ConstClass.GobLevels.map( (d, i) =>
          <li key={"ngenplxs-" + i}>
            <span style={ {display: "inline-block", width: "1em", height: "1em", background: colors[i]} }>
            </span> {d.label}
          </li>
        )}
        </ul>
        
      </div>
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
  getInfo(_from, _to, lg){
    let connObj = Object.assign({}, ConstClass.fetchObj);

    connObj.body = this.makeQuery(_from, _to, lg);

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
  buildMatrix(data, length){
    let b   = [...data], 
        lg  = ConstClass.GobLevels, 
        i, j, res = [];

    for(i =0; i < length; i++ ){
      res.push(b.splice(0, lg.length))
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
         currentYear = (new Date()).getFullYear(),
        _from = d => `${d}-01-01`,
        _to   = d => `${d}-07-07`,
        conf = ConstClass.AgeChartsConf,
        year1 = currentYear - conf.from,
        year2 = year1 - conf.step,
        lg  = ConstClass.GobLevels, 
        i, j;

      while(year1 > currentYear - conf.to){
      	for(i = 0; i < lg.length; i++ ){
          res.push({
            promise : this.getInfo(_from(year2), _to(year1), lg[i].key ), 
            label   : `${currentYear - year1} - ${currentYear - year2}`
          });
        }

        year1-= conf.step;
        year2-= conf.step;
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
  makeQuery(_from, _to, lg){
    let str1   = ConstClass.PROP_NAMES.nacimiento,
        str2   = ConstClass.PROP_NAMES.nivelGobierno,
        search = {query : {}, limit : 2};

    search.query[str1] = {"desde" : _from, "hasta" : _to};;
    search.query[str2] = lg;


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
export default EdadTotalEducacionPorcentaje;