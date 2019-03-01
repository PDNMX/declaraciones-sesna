/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React, {Component}  from "react";

import {Typography, TextField, Grid, RadioGroup, Radio, FormControlLabel, FormGroup, Button} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
/*
  ////////////////////////////////////////////////////////////////////////////////
  //
  // DEFINE LA CLASE PRINCIPAL
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
class BusquedaFromMaterialUI extends Component {
  
  state = {
          names : "",
      surname_a : "",
         office : "", 
          nivel : ""
  };

  render(){
    return(
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

          <Grid container spacing={16}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1"> Nivel de gobierno:</Typography>
                </Grid>
              

                <Grid item xs={12} sm={9}>
                  <Grid container spacing={16}>
                  <Grid item xs={12} sm={3}>
                    <FormControlLabel value="" control={<Radio checked={this.state.nivel === ""} name="nivel" onChange={this.handleInputChange} />} label="Todos" />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControlLabel value="FED" control={<Radio checked={this.state.nivel === "FED"} name="nivel" onChange={this.handleInputChange} />} label="Federal" />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControlLabel value="EST" control={<Radio checked={this.state.nivel === "EST"} name="nivel" onChange={this.handleInputChange} />} label="Estatal" />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControlLabel value="MUN" control={<Radio checked={this.state.nivel === "MUN"} name="nivel" onChange={this.handleInputChange} />} label="Municipal" />
                  </Grid>
                  </Grid>

                </Grid>


              </Grid>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button variant="contained" color="primary">Buscar</Button>
            </Grid>

          </Grid>
        </form>
    );
  }

  /*
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  /
  /  genera una sola "source of truth" para los 
  /  valores del formulario. En vue es lo de 
  /  v-model
  /
  /  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  */
  handleInputChange = event => {
    const target = event.target;
    const value  = target.value;
    const name   = target.name;

    this.setState({
      [name]: value
    });
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