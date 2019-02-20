/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component} from "react";
import ChartistGraph from 'react-chartist';
import "../../css/chartist.min.css";

import * as ConstClass from  '../../ConstValues.js';

import NivelGobiernoTotal from './gob-level/NivelGobiernoTotal';
import NivelGobiernoPorcentaje from './gob-level/NivelGobiernoPorcentaje';

import NivelGobiernoEducacion from './gob-level/NivelGobiernoEducacion';

class GobLevel extends Component{
	constructor(props){
		super(props);

		this.nivelGobierno = this.nivelGobierno.bind(this);

		console.log("las props!", this.props);
		this.state = {
			cat : this.props.match.params.categoria,
			ageFrom : 18,
			ageTo   : 98,
			step    : 10,
			data    : null,
			fake    : {
				labels : ["Federal", "Estatal", "Municipal"],
				series : [ [50000, 30000, 20000] ]
			},
			fake2    : {
				labels : ["Federal", "Estatal", "Municipal"],
				series : [ 50, 30, 20 ]
			},

			fake5    : {
				_labels  : ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90"],
				__labels : ["Primaria", "Secundaria", "Preparatoria", "Licenciatura", "Maestría", "Doctorado", "post-doc"],
				___labels : ["Puebla", "Ciudad de México", "Guanajuato", "Nuevo León", "Zacatecas", "Queretaro", "Tlaxcala"],
				labels : ["Federal", "Estatal", "Municipal"],
				series : [ [10000, 20000, 20000],
				           [8000, 15000, 12000],
				           [12000, 22000, 18000],
				           [2000, 32000, 10000],
				           [10000, 20000, 10000],
				           [9000, 11000, 2000],
				           [2000, 20000, 11000]
				         ]
			},
			fake6 : {
				series : [12, 15, 13, 20, 10, 20, 10]
			},

			donutOptions : {donut: true, donutWidth: 30}
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
			  <ul>
			  	<li><a href="#">nivel de gobierno</a></li>
			  	<li><a href="#">nivel de gobierno y edad</a></li>
			  	<li><a href="#">nivel de gobierno y educación</a></li>
			  </ul>
			  { this.nivelGobierno() }
			</div>
		);

			  /*
				<h1>Por Nivel de Gobierno</h1>
				<div className="pdn_divider"></div>

				<h2>Funcionarios por nivel de gobierno (total)</h2>
				<ChartistGraph data={this.state.fake} type={"Bar"} />
				<div className="pdn_divider"></div>
				<h2>Funcionarios por Nivel de gobierno (porcentaje)</h2>
				<ChartistGraph data={ { series : this.state.fake2.series} } type={"Pie"} options={st.donutOptions} />
				<div className="pdn_divider"></div>

				<h2>Funcionarios por nivel de gobierno y edad (total)</h2>
				<ChartistGraph data={st.fake5} type={"Bar"} />

				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> {this.state.fake5._labels[0]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> {this.state.fake5._labels[1]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> {this.state.fake5._labels[2]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#ca7c24"} }>
				    </span> {this.state.fake5._labels[3]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#453d3f"} }>
				    </span> {this.state.fake5._labels[4]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#589634"} }>
				    </span> {this.state.fake5._labels[5]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#2d1a9c"} }>
				    </span> {this.state.fake5._labels[6]}
				  </li>
				</ul>
				<div className="pdn_divider"></div>

				<h2>Funcionarios por nivel de gobierno y edad (porcentaje)</h2>
				<ul>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[0]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[1]}</p>
				  </li>
				  <li>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[2]}</p>
				  </li>
				</ul>

				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> {this.state.fake5._labels[0]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> {this.state.fake5._labels[1]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> {this.state.fake5._labels[2]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#ca7c24"} }>
				    </span> {this.state.fake5._labels[3]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#453d3f"} }>
				    </span> {this.state.fake5._labels[4]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#589634"} }>
				    </span> {this.state.fake5._labels[5]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#2d1a9c"} }>
				    </span> {this.state.fake5._labels[6]}
				  </li>
				</ul>

				<div className="pdn_divider"></div>
				<h2>Funcionarios por nivel de gobierno y nivel educativo (total)</h2>
				<ChartistGraph data={st.fake5} type={"Bar"} />
				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> {this.state.fake5.__labels[0]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> {this.state.fake5.__labels[1]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> {this.state.fake5.__labels[2]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#ca7c24"} }>
				    </span> {this.state.fake5.__labels[3]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#453d3f"} }>
				    </span> {this.state.fake5.__labels[4]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#589634"} }>
				    </span> {this.state.fake5.__labels[5]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#2d1a9c"} }>
				    </span> {this.state.fake5.__labels[6]}
				  </li>
				</ul>
				<div className="pdn_divider"></div>
				<h2>Funcionarios por nivel de gobierno y nivel educativo (porcentaje)</h2>
				<ul>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[0]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[1]}</p>
				  </li>
				  <li>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[2]}</p>
				  </li>
				</ul>

				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> {this.state.fake5.__labels[0]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> {this.state.fake5.__labels[1]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> {this.state.fake5.__labels[2]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#ca7c24"} }>
				    </span> {this.state.fake5.__labels[3]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#453d3f"} }>
				    </span> {this.state.fake5.__labels[4]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#589634"} }>
				    </span> {this.state.fake5.__labels[5]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#2d1a9c"} }>
				    </span> {this.state.fake5.__labels[6]}
				  </li>
				</ul>
			*/
	}

	nivelGobierno(){
		if(!this.state.cat){
			return(
			  <div>
			    <NivelGobiernoTotal />
			    <NivelGobiernoPorcentaje />
			  </div>
			);
	  }
	  else if(this.state.cat == "gobierno-y-edad"){

	  }
	  else{
	  	return(
	  		<NivelGobiernoEducacion />
	  	);
	  }
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
  	    _to   = d => `${d}-07-07`,
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

export default GobLevel;
