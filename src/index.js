/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Contenedor from './main-components/Container-back';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

// MATERIAL UI THEME STUFF
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blue, grey} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main : "#34b3eb",
      contrastText: "white"
    },
    secondary : {
      main : grey[500]
    }
  },
});

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // INICIA LA MAROMA ESTA
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
    <Route render={(props) => <Contenedor location={props.location}/> }> </Route>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
