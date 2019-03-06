/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component}  from "react";

import {Typography} from '@material-ui/core';

import { withStyles, Table, TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination } from '@material-ui/core';

import pink from '@material-ui/core/colors/pink';

let uniqid = require('uniqid');



/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class BusquedaTableMaterialUI extends Component{

  constructor(){
    super();

    this.changePage = this.changePage.bind(this);
  }

	render(){
		return(
			<div>
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
            {this.props.results.map( compa => 
              <TableRow key={uniqid()}>
                <TableCell>
                  <a href={`/perfil/${compa._id}/informacion`}>
                    {compa.informacion_personal.informacion_general.nombres} {compa.informacion_personal.informacion_general.primer_apellido}  {compa.informacion_personal.informacion_general.segundo_apellido}
                  </a>
                </TableCell>

                <TableCell>
                  {compa.informacion_personal.datos_encargo_actual.ente_publico}
                </TableCell>

                <TableCell>
                  {compa.informacion_personal.datos_encargo_actual.empleo_cargo_comision}
                </TableCell>

                <TableCell>
                  {compa.informacion_personal.datos_encargo_actual.direccion_encargo.entidad_federativa.nom_ent}
                </TableCell>

                <TableCell>
                  {compa.informacion_personal.datos_encargo_actual.direccion_encargo.municipio.nom_mun}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={3}
                count={this.props.total}
                rowsPerPage={this.props.pageSize}
                page={this.props.page}
                rowsPerPageOptions={[]}
                onChangePage={this.changePage}
               />
            </TableRow>
          </TableFooter>
				</Table>
			</div>
		);
	}

  changePage(e, page){
    this.props.search(page);
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