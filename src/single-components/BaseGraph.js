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

	drawLines(width, total, y0, y1, _x){
		let spacing = width/total,
		    lines = [], i;

		for(i=0; i< total; i++){
			let x = (spacing * i) + _x;

			lines.push(<line x1={x} 
				               x2={x} 
				               y1={y0}
				               y2={y1}
				               style={ {stroke:"black"} }
				               key={uniqid()} />);
		}

		return lines;
	}

	render(){
		console.log(ConstClass.BarChartConf, this.props);

		let conf  = ConstClass.BarChartConf,
		    data  = this.props.data,
		   width  = conf.width,
		   height = conf.margin.top + conf.margin.bottom + (data.length * (conf.bars.height + conf.bars.margin ) ),
		   gutter = conf.bars.height + conf.bars.margin,
		   hfunc  = index => (gutter * index) + conf.margin.top,
		   realWidth = (width - conf.margin.left - conf.margin.right),
		   realHeight = height - (conf.margin.top + conf.margin.bottom),
		   labelRightMargin = realWidth * conf.labelsWidthPercent,
		   barsLeftMargin   = ( realWidth * conf.dividerWidthPerecent) + labelRightMargin,
		   barsMaxWidth = realWidth * conf.barsWidthPercent,
		   scale = this.makeScale(this.props.data, barsMaxWidth),
		   _ticks  = scale.ticks(5),
		   format  = d3.format("$,"),
		   ticks   = _ticks.map(d => format(d));

		   console.log("thicks", ticks);
		return(
			<svg id="resume-graph" viewBox={`0 0 ${width} ${height}`} width="100%" height="auto">

			  {data.map( (d,i) =>
			  	<g key={uniqid()}>
			  		<text textAnchor="end" 
			  		      x={labelRightMargin} 
			  		      y={ hfunc(i) }>{d.name}</text>
			  		
			  		<rect style={ {fill : "black"}  } 
			  		      x={barsLeftMargin} 
			  		      y={ hfunc(i) - conf.bars.height/2 } 
			  		      width={ scale(d.amount[0]) } 
			  		      height={conf.bars.height} />
			  	</g>
			  )}

			  {this.drawLines(realWidth * conf.barsWidthPercent, 10, conf.margin.top, realHeight,  barsLeftMargin)}
			</svg>
		);
	}
}

export default BaseGraph;