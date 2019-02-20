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
class NivelGobiernoEducacion extends Component{
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
      data : null
    }

    let promises = this.makeData();

    Promise.all(promises.map(d => d.promise)).then(d => {
      console.log(this.buildMatrix(d));

      
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
    let st = this.state.data;

    if(!st) return null;
		return(
      <div>
        <ChartistGraph data={st} type={"Bar"} />
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

  buildMatrix(data){
    let b   = [...data], 
        gl  = ConstClass.GobLevels,
        ne  = ConstClass.NivelEducacion, 
        i, j, res = [];
    for(i =0; i < ne.length; i++ ){
      res.push(b.splice(0, gl.length))
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

    for(i =0; i < ne.length; i++ ){
      for(j =0; j < gl.length; j++){
        console.log(gl[j].key);
        res.push({
          promise : this.getInfo(ne[i], gl[j].key ), 
          label : gl[j].label
        });
      }
    }
      /*
      res.push({
        promise : this.getInfo(gl[i].key), 
        label : gl[i].label
      });
      */

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

    console.log(search);


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
export default NivelGobiernoEducacion;