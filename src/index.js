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



const API_PATH = "https://demospdn.host/demo1/api/v2/s1/declaraciones";


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
    	profile  : null
    }
});