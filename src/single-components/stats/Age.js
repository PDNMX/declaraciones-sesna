/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import * as ConstClass from  '../../ConstValues.js';
import ChartistGraph from 'react-chartist';
import "../../css/chartist.min.css"

class Age extends Component{
	constructor(){
		super();

		this.state = {
			ageFrom : 18,
			ageTo   : 98,
			step    : 10,
			data    : null,
			fake    : {
				labels : ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90"],
				series : [ [10000, 20000, 20000, 15000, 15000, 15000, 5000] ]
			},
			fake2    : {
				labels : ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90"],
				series : [ 10, 20, 20, 15, 15, 15, 5 ]
			}
		}

		this.getInfo  = this.getInfo.bind(this);
		this.makeData = this.makeData.bind(this);

		let promises = this.makeData();

		Promise.all(promises.map(d => d.promise)).then(d => {
			console.log("res:", d);
		});

	};

	render(){
		return(
			<div>
				<h1>Por edad</h1>

				<h2>Funcionarios por rango de edad (total)</h2>
				<ChartistGraph data={this.state.fake} type={"Bar"} />

				<h2>Funcionarios por rango de edad (porcentaje)</h2>
				<ChartistGraph data={ { series : this.state.fake2.series} } type={"Pie"} />
			</div>
		);
	}

	getInfo(_from, _to){
	  let connObj = Object.assign({}, ConstClass.fetchObj);

	  connObj.body = this.makeQuery(_from, _to);
	      
	  return fetch(ConstClass.endpoint, connObj)
          .then(response => response.json())
          .then(d => { 
            return d.total;
          });
  }

  makeData(){
  	let currentYear = (new Date()).getFullYear(),
  	    _from = d => `${d}-01-01`,
  	    _to   = d => `${d}-12-31`,
  	    st    = this.state,
  	    i     = currentYear - st.ageFrom,
  	    res   = [],
  	    _f, _t;

  	while(i > currentYear - st.ageTo){
  		res.push({
  			label   : (currentYear - i) + " - " + (currentYear - i+st.step),
  			promise : this.getInfo(_from(i-10),  _to(i)).catch(error => { return error }),
  			from    : _from(i-10), 
  			to      :  _to(i)
  		});
  		i-= st.step;
  	}

  	return res;
  }

  makeQuery(_from, _to){
  	let str     = ConstClass.PROP_NAMES.nacimiento,
  	    search  = {query : {}, limit : 2};
	  
	  search.query[str] = {desde : _from, hasta : _to};
	  return JSON.stringify(search);
  }
}

export default Age;