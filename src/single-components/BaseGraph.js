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

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class BaseGraph extends Component{

	/*
   * R E N D E R
   * ----------------------------------------------------------------------
   */
	render(){
		let      conf = ConstClass.BarChartConf,
		         data = this.props.data,
		        width = conf.width,
		       gutter = conf.bars.height + conf.bars.margin,
		       height = conf.margin.top + conf.margin.bottom + (data.length * gutter ),
		        hfunc = index => (gutter * index) + conf.margin.top,
		    realWidth = (width - conf.margin.left - conf.margin.right),
		   realHeight = data.length * gutter,
		   labelRightMargin = realWidth * conf.labelsWidthPercent,
		     barsLeftMargin = ( realWidth * conf.dividerWidthPerecent) + labelRightMargin,
		       barsMaxWidth = realWidth * conf.barsWidthPercent,
		              scale = this.makeScale(data, barsMaxWidth),
		             _ticks = scale.ticks(5);

		return(
			<svg id="resume-graph" viewBox={`0 0 ${width} ${height}`} width="100%" height="auto">

			  {/* las etiquetas y las barras */}
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

			  {/* las líneas guías */}
			  {this.drawLines(realWidth * conf.barsWidthPercent, 
			  	              8, 
			  	              conf.margin.top/ 1.5, 
			  	              realHeight,
			  	              barsLeftMargin)}

			  {/* las guías numéricas (top) */}
			  {this.makeNumGuides(_ticks, barsLeftMargin, conf.margin.top/ 2, scale)}

			{/* las guías numéricas (bottom) */}
			  {this.makeNumGuides(_ticks, barsLeftMargin, realHeight + conf.margin.top, scale)}
			</svg>
		);
	}

	/*
   * T E M P L A T E S
   * ----------------------------------------------------------------------
   */

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  / 
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  makeNumGuides(ticks, _x, y, scale){
		let format = d3.format("$,"),
		    guides, i;

		guides = ticks.map( d=>
			<text x={scale(d) + _x} y={y} key={uniqid()}> {format(d)} </text>
		);

		return guides;
	}

	/*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  / 
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
	drawLines(width, total, y0, y1, _x){
		let spacing = width/total,
		    lines = [], i;

		for(i=0; i<= total; i++){
			let x = (spacing * i) + _x;

			lines.push(<line x1={x} 
				               x2={x} 
				               y1={y0}
				               y2={y0 + y1}
				               style={ {stroke:"black"} }
				               key={uniqid()} />);
		}

		return lines;
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
  makeScale(data, barsMaxWidth){
		let values = data.map(d => d.amount).flat();

		return d3.scaleLinear().domain([0, d3.max(values)]).range([0, barsMaxWidth]);
	}
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default BaseGraph;