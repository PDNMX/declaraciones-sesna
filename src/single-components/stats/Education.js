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


import EducacionTotal from './education/EducacionTotal';
import EducacionPorcentaje from './education/EducacionPorcentaje';

import EducacionEdad from './education/EducacionEdad';
import EducacionEdadPorcentaje from './education/EducacionEdadPorcentaje';

import EducacionNivelGobierno from './education/EducacionNivelGobierno';
import EducacionNivelGobiernoPorcentaje from './education/EducacionNivelGobiernoPorcentaje';
/*
import EducacionEdad from './education/EducacionEdad';
import EducacionEdadPorcentaje from './education/EducacionEdadPorcentaje';
import EducacionNivelGobierno from './education/EducacionNivelGobierno';
import EducacionNivelGobiernoPorcentaje from './education/EducacionNivelGobiernoPorcentaje';
import EducacionPorcentaje from './education/EducacionPorcentaje';
import EducacionTotal from './education/EducacionTotal';
*/

class Education extends Component{
	constructor(){
		super();

		this.state = {
			ageFrom : 18,
			ageTo   : 98,
			step    : 10,
			data    : null,
			fake    : {
				labels : ["Primaria", "Secundaria", "Preparatoria", "Licenciatura", "Maestría", "Doctorado", "post-doc"],
				series : [ [200, 100, 400, 123, 500, 200, 300] ]
			},
			fake5    : {
				labels : ["Puebla", "Ciudad de México", "Guanajuato", "Nuevo León", "Zacatecas", "Queretaro", "Tlaxcala"],
				series : [ [10000, 20000, 20000, 15000, 15000, 15000, 5000],
				           [8000, 15000, 12000, 11000, 10000, 7000, 7000],
				           [12000, 22000, 18000, 12000, 11000, 10000, 4000],
				           [2000, 32000, 10000, 11000, 10000, 1000, 23000],
				           [10000, 20000, 10000, 11000, 1000, 14000, 12000],
				           [9000, 11000, 2000, 10000, 6000, 5000, 9000],
				           [2000, 20000, 11000, 5000, 17000, 12000, 14000]
				         ]
			},
			fake4 : {
				series : [30, 50, 20]
			},
			fake6 : {
				series : [12, 15, 13, 20, 10, 20, 10],
				_series : [ [10000, 20000, 20000],
				           [8000, 15000, 12000],
				           [12000, 22000, 18000],
				           [2000, 32000, 10000],
				           [10000, 20000, 10000],
				           [9000, 11000, 2000],
				           [2000, 20000, 11000]
				         ]
			},
			fake7 : {
				labels : ["Primaria", "Secundaria", "Preparatoria", "Licenciatura", "Maestría", "Doctorado", "post-doc"],
				series : [ [10000, 20000, 20000, 15000, 15000, 15000, 5000],
				           [8000, 15000, 12000, 11000, 10000, 7000, 7000],
				           [12000, 22000, 18000, 12000, 11000, 10000, 4000]
				         ]
			},
			labels    : {
				_labels  : ["20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90"],
				__labels : ["Primaria", "Secundaria", "Preparatoria", "Licenciatura", "Maestría", "Doctorado", "post-doc"],
				___labels : ["Puebla", "Ciudad de México", "Guanajuato", "Nuevo León", "Zacatecas", "Queretaro", "Tlaxcala"],
				labels : ["Federal", "Estatal", "Municipal"],
			},

			donutOptions : {donut: true, donutWidth: 30}
		}

	};

	render(){
		let st = this.state;
		return(

			<div>
			<div className="col-sm-3 sidebar">
				<h2>Nivel Educativo</h2>
			</div>
			<div className="col-sm-9 col-sm-offset-3 sidecontent">

				<EducacionTotal />
				<EducacionPorcentaje />

				<EducacionEdad />
				<EducacionEdadPorcentaje />

				<EducacionNivelGobierno />
				<EducacionNivelGobiernoPorcentaje />

			</div>
			</div>
		);
	}
}

export default Education;
