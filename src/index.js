/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // CARGA LAS DEPENDENCIAS
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Contenedor from './main-components/Container';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

/*
	////////////////////////////////////////////////////////////////////////////////
  //
  // INICIA LA MAROMA ESTA
  //
  ////////////////////////////////////////////////////////////////////////////////
*/
ReactDOM.render(
  <BrowserRouter>
    
    <Route render={(props) => <Contenedor location={props.location}/> }> </Route>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
