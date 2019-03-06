/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component}  from "react";

import {Typography} from '@material-ui/core';

import { withStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class BusquedaTableMaterialUI extends Component{

	render(){
		return(
			<div>
				<h6>test</h6>
				<Table>
          <TableHead>
            <TableRow>
              <TableCell>nombre</TableCell>
              <TableCell>oficina</TableCell>
              <TableCell>cargo</TableCell>
              <TableCell>estado</TableCell>
              <TableCell>municipio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          </TableBody>
				</Table>
			</div>
		);
	}
}

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // REGRESA EL COMPONENTE
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
export default BusquedaTableMaterialUI;