////////////////////////////////////////////////////////////////////////////////
// 
// DEFINE LAS DEPENDENCIAS
//
////////////////////////////////////////////////////////////////////////////////

// libraries
import * as d3 from "d3";

// endpoint
const ENDPOINT = "https://demospdn.host/demo1/api/s1/declaraciones",
      EXAMPLE  = "https://demospdn.host/demo1/api/s1/declaraciones?id=5bd8ec5180f35b060acf7033&perfil=perfil_3";


// sample code
let response = d3.json(EXAMPLE).then(d => {
  console.log(d);
} );