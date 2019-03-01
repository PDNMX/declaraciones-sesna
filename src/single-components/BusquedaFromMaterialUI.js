/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component, Fragment}  from "react";

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class BusquedaFromMaterialUI extends Component {
  render(){
    const { classes } = this.props;

    console.log("clasess:", classes);

    return(
      <Fragment>
        <form>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={4}>
              <TextField
                id="mui-name"
                label="Nombres"
                defaultValue=""
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                id="mui-surname_a"
                label="Primer apellido"
                defaultValue=""
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                id="mui-surname_b"
                label="Segundo apellido"
                defaultValue=""
                margin="normal"
              />
            </Grid>
          </Grid>
        </form>
      </Fragment>
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
export default BusquedaFromMaterialUI;