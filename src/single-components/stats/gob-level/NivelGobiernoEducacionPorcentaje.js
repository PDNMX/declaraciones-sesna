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
import "../../../css/chartist.min.css"

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class NivelGobiernoEducacionPorcentaje extends Component{

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
      data    : null,
      options : ConstClass.StatsChartOptions.donutOptions
    }

    let promises = this.makeData();

    Promise.all(promises.map(d => d.promise)).then(d => {

      let data = {
        labels : [...new Set(promises.map(d => d.label))],
        series : this.buildMatrix(d)
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
      <div className="row">
				<div className="col-sm-12">
					<div className="pdn_d_box">
            <h2>Funcionarios por nivel de gobierno y nivel educativo (porcentaje)</h2>
            <nav class="pdn_viz">
              <ul>
              { this.state.data.series.map( (d,i) =>
                <li key={"ngepg-" + i}>
                  <ChartistGraph data={ {series : d} } type={"Pie"} options={this.state.options} />
                  <p>{this.state.data.labels[i]}</p>
                </li>
              )}
              </ul>
            </nav>
            <ul className="list_inline">
            {ConstClass.NivelEducacion.map( (d, i) =>
              <li key={"ngepl-" + i}>
                <span style={ {display: "inline-block", width: "1em", height: "1em", background: colors[i]} }>
                </span> {d}
              </li>
            )}
            </ul>

        </div>
      </div>
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
  getInfo(ne, gl){
    let connObj = Object.assign({}, ConstClass.fetchObj);

    connObj.body = this.makeQuery(ne, gl);

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
  buildMatrix(data){
    let b   = [...data],
        gl  = ConstClass.GobLevels,
        ne  = ConstClass.NivelEducacion,
        i, j, res = [];
    for(i =0; i < gl.length; i++ ){
      res.push(b.splice(0, ne.length))
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
        ne  = ConstClass.NivelEducacion,
        i, j;

    for(i =0; i < gl.length; i++ ){
      for(j =0; j < ne.length; j++){
        res.push({
          promise : this.getInfo(ne[j], gl[i].key ),
          label   : gl[i].label
        });
      }
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
  makeQuery(ne, gl){
    let str1   = ConstClass.PROP_NAMES.nivelGobierno,
        str2   = ConstClass.PROP_NAMES.escolaridad,
        search = {query : {}, limit : 2};

    search.query[str1] = gl;
    search.query[str2] = ne;


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
export default NivelGobiernoEducacionPorcentaje;
