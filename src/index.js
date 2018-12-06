////////////////////////////////////////////////////////////////////////////////
// 
// DEFINE LAS DEPENDENCIAS
//
////////////////////////////////////////////////////////////////////////////////

// libraries
import Vue from "vue";
import VueRouter from 'vue-router';

// Components LV1
import Busqueda from './main-components/busqueda.vue';
import Perfil from './main-components/perfil.vue';

// Components LV2
import Activos from './main-components/activos.vue';
import Informacion from './main-components/informacion.vue';
import Ingresos from './main-components/ingresos.vue';
import Intereses from './main-components/intereses.vue';
import Pasivos from './main-components/pasivos.vue';

// Components LV3


// constantes
const API_PATH = "https://demospdn.host/demo1/api/v2/s1/declaraciones";

const PROP_NAMES = {
  institucionResponsable : "metadatos.institucion_responsable",
  ente : "informacion_personal.datos_encargo_actual.ente_publico",
  nombres : "informacion_personal.informacion_general.nombres",
  apellido1 : "informacion_personal.informacion_general.primer_apellido",
  apellido2 : "informacion_personal.informacion_general.segundo_apellido",
  entidadID : "informacion_personal.datos_encargo_actual.direccion_encargo.entidad_federativa.cve_ent",
  municipioID : "informacion_personal.datos_encargo_actual.direccion_encargo.municipio.cve_mun",
  cargo : "informacion_personal.datos_encargo_actual.empleo_cargo_comision",
  nivelGobierno : "informacion_personal.datos_encargo_actual.nivel_gobierno.codigo",
  superficieConstruccion : "activos.bienes_inmuebles.superficie_construccion",
  superficieTerreno : "activos.bienes_inmuebles.superficie_terreno",
  adquisicionMetodo : "activos.bienes_inmuebles.forma_adquisicion.codigo",
  adquisicionPrecio : "activos.bienes_inmuebles.precio_adquisicion.valor",
  valorCatastral : "activos.bienes_inmuebles.valor_catastral",
  nivelEncargo : "informacion_personal.datos_encargo_actual.nivel_encargo",
  escolaridad : "informacion_personal.datos_curriculares.grado_maximo_escolaridad",
  ingresoAnual : "ingresos.sueldos_salarios_publicos.ingreso_bruto_anual.valor",
  ingresoMoneda : "ingresos.sueldos_salarios_publicos.ingreso_bruto_anual.moneda.codigo",
  nacimiento : "informacion_personal.informacion_general.fecha_nacimiento"
}


////////////////////////////////////////////////////////////////////////////////
// 
// INICIA EL ROUTER DE VUE
//
////////////////////////////////////////////////////////////////////////////////

// configura el router de Vue
Vue.use(VueRouter);

// define las rutas
const routes = [
  { path : '/', component : Busqueda},
  { path : '/busqueda', component : Busqueda},
  { path : '/perfil/:id', component : Perfil}
];

// crea el ruoter
const router = new VueRouter({ mode: 'history', routes });

////////////////////////////////////////////////////////////////////////////////
// 
// INICIA EL APP DE VUE
//
////////////////////////////////////////////////////////////////////////////////
const vueController = new Vue({

    /*
     * E L
     * ----------------------------------------------------------------------
     */ 
    el : "#vue-app",

    /*
     * R O U T E R
     * ----------------------------------------------------------------------
     */ 
    router,

    /*
     * D A T A
     * ----------------------------------------------------------------------
     */ 
    data : {
    	endpoint : API_PATH,
    	names : PROP_NAMES,
    	profile  : null,
    	fetchObj : {
    		method : "POST",
    		headers : {
    			"Content-Type": "application/json; charset=utf-8"
    		},
    		body : null
    	}
    }
});