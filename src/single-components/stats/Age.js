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
			},

			fake3    : {
				labels : ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90"],
				series : [ [10000, 20000, 20000, 15000, 15000, 15000, 5000],
				           [8000, 15000, 12000, 11000, 10000, 7000, 7000],
				           [12000, 22000, 18000, 12000, 11000, 10000, 4000]
				         ]
			},

			fake4 : {
				series : [30, 50, 20]
			},

			fake5    : {
				labels : ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90"],
				series : [ [10000, 20000, 20000, 15000, 15000, 15000, 5000],
				           [8000, 15000, 12000, 11000, 10000, 7000, 7000],
				           [12000, 22000, 18000, 12000, 11000, 10000, 4000],
				           [2000, 32000, 10000, 11000, 10000, 1000, 23000],
				           [10000, 20000, 10000, 11000, 1000, 14000, 12000],
				           [9000, 11000, 2000, 10000, 6000, 5000, 9000],
				           [2000, 20000, 11000, 5000, 17000, 12000, 14000]
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
		let st = this.state;
		return(
			<div className="row">
				<div className="col-sm-12">
				<h1>Por edad</h1>
				<div className="pdn_divider"></div>
				<h2>Funcionarios por rango de edad (total)</h2>
				<ChartistGraph data={st.fake} type={"Bar"} />
				<div className="pdn_divider"></div>

				<h2>Funcionarios por rango de edad (porcentaje)</h2>
				<ChartistGraph data={ { series : st.fake2.series} } type={"Pie"} options={st.donutOptions} />
				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> {st.fake.labels[0]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> {st.fake.labels[1]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> {st.fake.labels[2]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#ca7c24"} }>
				    </span> {st.fake.labels[3]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#453d3f"} }>
				    </span> {st.fake.labels[4]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#589634"} }>
				    </span> {st.fake.labels[5]}
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#2d1a9c"} }>
				    </span> {st.fake.labels[6]}
				  </li>

				</ul>
				<div className="pdn_divider"></div>
				<h2>Funcionarios por rango de edad y nivel de gobierno (total)</h2>
				<ChartistGraph data={st.fake3} type={"Bar"} />
				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> Federal
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> Estatal
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> Municipal
				  </li>
				</ul>
				<div className="pdn_divider"></div>
				<h2>Funcionarios por rango de edad y nivel de gobierno (porcentaje)</h2>
				<ul>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake4.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[0]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake4.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[1]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake4.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[2]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake4.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[3]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake4.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[4]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake4.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[5]}</p>
				  </li>
				  <li>
				    <ChartistGraph data={ { series : st.fake4.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[6]}</p>
				  </li>
				</ul>

				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> Federal
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> Estatal
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> Municipal
				  </li>
				</ul>
				<div className="pdn_divider"></div>

				<h2>Funcionarios por rango de edad y estado seleccionado </h2>
				<ChartistGraph data={st.fake5} type={"Line"} />

				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> Ciudad de México
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> Puebla
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> Zacatecas
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#ca7c24"} }>
				    </span> Querétaro
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#453d3f"} }>
				    </span> Durango
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#589634"} }>
				    </span> Veracruz
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#2d1a9c"} }>
				    </span> Tlaxcala
				  </li>

				</ul>

				<div className="pdn_divider"></div>
				<h2>Funcionarios por rango de edad y nivel educativo (total) </h2>
				<ChartistGraph data={st.fake5} type={"Line"} />
				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> Primaria
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> Secundaria
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> Preparatoria
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#ca7c24"} }>
				    </span> Licenciatura
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#453d3f"} }>
				    </span> Maestría
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#589634"} }>
				    </span> Doctorado
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#2d1a9c"} }>
				    </span> post-doc
				  </li>
				</ul>
				<div className="pdn_divider"></div>

				<h2>Funcionarios por rango de edad y nivel educativo (porcentaje)</h2>
				<ul>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[0]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[1]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[2]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[3]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[4]}</p>
				  </li>
				  <li style={ {float: "left"} }>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[5]}</p>
				  </li>
				  <li>
				    <ChartistGraph data={ { series : st.fake6.series} } type={"Pie"} options={st.donutOptions} />
				    <p>{st.fake.labels[6]}</p>
				  </li>
				</ul>

				<ul className="list_inline">
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#d0001c"} }>
				    </span> Primaria
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#e95a55"} }>
				    </span> Secundaria
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#edcb4f"} }>
				    </span> Preparatoria
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#ca7c24"} }>
				    </span> Licenciatura
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#453d3f"} }>
				    </span> Maestría
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#589634"} }>
				    </span> Doctorado
				  </li>
				  <li>
				    <span style={ {display: "inline-block", width: "1em", height: "1em", background: "#2d1a9c"} }>
				    </span> post-doc
				  </li>
				</ul>

				</div>
			</div>
		);
	}

	getInfo(_from, _to){
	  let connObj = Object.assign({}, ConstClass.fetchObj);

	  connObj.body = this.makeQuery(_from, _to);

	  return fetch(ConstClass.endpoint, connObj)
          .then(response => response.json())
          .then(d => {
            return d;
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

	  search.query[str] = {"desde" : _from, "hasta" : _to};
	  return JSON.stringify(search);
  }
}

export default Age;
