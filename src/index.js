////////////////////////////////////////////////////////////////////////////////
// 
// DEFINE LAS DEPENDENCIAS
//
////////////////////////////////////////////////////////////////////////////////

// libraries
import * as d3 from "d3";

console.log("me");

// endpoint
const ENDPOINT = "https://demospdn.host/demo1/api/s1/declaraciones",
      EXAMPLE  = "https://demospdn.host/demo1/api/s1/declaraciones?id=5bd8ec5680f35b060acf70da",
      NAME     = "https://demospdn.host/demo1/api/s1/declaraciones?nombres=pedro&apellidos=MELIANI";


// sample code
let response = d3.json(EXAMPLE).then(d => {
  console.log("x: ", d);
} );