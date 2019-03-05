/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, { Component } from 'react';
import * as ConstClass from  '../ConstValues.js';


let d3     = Object.assign({}, require("d3-format"), require("d3-scale"), require("d3-array")),
    uniqid = require('uniqid');

class BaseGraph extends Component{

	makeScale(data, barsMaxWidth){
		let values = data.map(d => d.amount).flat();

		return d3.scaleLinear().domain([0, d3.max(values)]).range([0, barsMaxWidth]);
	}

	render(){
		console.log(ConstClass.BarChartConf, this.props);

		let conf  = ConstClass.BarChartConf,
		    data  = this.props.data,
		   width  = conf.width,
		   heigth = conf.margin.top + conf.margin.bottom + (data.length * (conf.bars.heigth + conf.bars.margin ) ),
		   gutter = conf.bars.heigth + conf.bars.margin,
		   hfunc  = index => (gutter * index) + conf.margin.top,
		   realWidth = (width - conf.margin.left - conf.margin.right),
		   labelRightMargin = realWidth * conf.labelsWidthPercent,
		   barsLeftMargin   = ( realWidth * conf.dividerWidthPerecent) + labelRightMargin,
		   barsMaxWidth = realWidth * conf.barsWidthPercent,
		   scale = this.makeScale(this.props.data, barsMaxWidth),
		   _ticks  = scale.ticks(5),
		   format  = d3.format("$,"),
		   ticks   = _ticks.map(d => format(d));

		   console.log("lines", ticks);
		return(
			<svg id="resume-graph" viewBox={`0 0 ${width} ${heigth}`} width="100%" heigth="auto">

			  {data.map( (d,i) =>
			  	<g key={uniqid()}>
			  		<text textAnchor="end" 
			  		      x={labelRightMargin} 
			  		      y={ hfunc(i) }>{d.name}</text>
			  		
			  		<rect style={ {fill : "black"}  } 
			  		      x={barsLeftMargin} 
			  		      y={ hfunc(i) - conf.bars.heigth/2 } 
			  		      width={100} 
			  		      height={conf.bars.heigth} />
			  	</g>
			  )}
			</svg>
		);
	}
}

export default BaseGraph;