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
// INFORMACIÓN
import InfoGeneral from './single-components/informacion/informacion-general.vue';
import InfoPuesto from './single-components/informacion/puesto-actual.vue';
import InfoCurriculum from './single-components/informacion/datos-curriculares.vue';
import InfoExperiencia from './single-components/informacion/experiencia-laboral.vue';
import InfoDependientes from './single-components/informacion/dependientes-economicos.vue';

// INTERESES
import InteresesEmpresas from './single-components/intereses/empresas.vue';
import InteresesMembresias from './single-components/intereses/membresias.vue';
import InteresesApoyos from './single-components/intereses/apoyos.vue';
import InteresesRepActiva from './single-components/intereses/representacion-activa.vue';
import InteresesRepPasiva from './single-components/intereses/representacion-pasiva.vue';
import InteresesSocios from './single-components/intereses/socios.vue';
import InteresesClientes from './single-components/intereses/clientes.vue';
import InteresesOtras from './single-components/intereses/otras.vue';
import InteresesBeneficios from './single-components/intereses/beneficios.vue';

// INGRESOS
import IngresosSueldosPublicos from './single-components/ingresos/sueldos-publicos.vue';
import IngresosSueldosOtros from './single-components/ingresos/sueldos-otros.vue';
import IngresosActividadProfesional from './single-components/ingresos/actividad-profesional.vue';
import IngresosActividadEmpresarial from './single-components/ingresos/actividad-empresarial.vue';
import IngresosActividadEconomica from './single-components/ingresos/actividad-economica.vue';
import IngresosArrendamiento from './single-components/ingresos/arrendamiento.vue';
import IngresosIntereses from './single-components/ingresos/intereses.vue';
import IngresosPremios from './single-components/ingresos/premios.vue';
import IngresosOtros from './single-components/ingresos/otros.vue';
import IngresosEnajenacion from './single-components/ingresos/enajenacion.vue';

// ACTIVOS
import ActivosBienesInmuebles from './single-components/activos/bienes-inmuebles.vue';
import ActivosBienesMuebles from './single-components/activos/bienes-muebles.vue';
import ActivosBienesMueblesNoRegistrables from './single-components/activos/bienes-muebles-no-registrables.vue';
import ActivosInversiones from './single-components/activos/inversiones.vue';
import ActivosEfectivo from './single-components/activos/efectivo-y-metales.vue';
import ActivosFideicomisos from './single-components/activos/fideicomisos.vue';
import ActivosBienesIntangibles from './single-components/activos/bienes-intangibles.vue';
import ActivosCuentasPorCobrar from './single-components/activos/cuentas-por-cobrar.vue';
import ActivosBeneficiosEnEspecie from './single-components/activos/beneficios-en-especie.vue';

// PASIVOS
import PasivosDeudas from './single-components/pasivos/deudas.vue';
import PasivosObligaciones from './single-components/pasivos/otras-obligaciones.vue';


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
  { 
    path : '/perfil/:id', 
    component : Perfil,
    children : [
      {
        //
        // RUTAS PARA INFORMACIÓN
        //
        path : "informacion",
        component : Informacion,
        children : [
          {
            path : '', 
            component : InfoGeneral,
          },
          {
            path : 'puesto-actual', 
            component : InfoPuesto,
          },
          {
            path : 'datos-curriculares', 
            component : InfoCurriculum,
          },
          {
            path : 'experiencia-laboral', 
            component : InfoExperiencia,
          },
          {
            path : 'dependientes-economicos', 
            component : InfoDependientes,
          },
        ]
      },
      {
        //
        // RUTAS PARA INTERESES
        //
        path : "intereses",
        component : Intereses,
        children : [
          {
            path : '', 
            component : InteresesEmpresas,
          },
          {
            path : 'membresias', 
            component : InteresesMembresias,
          },
          {
            path : 'apoyos', 
            component : InteresesApoyos,
          },
          {
            path : 'representacion-activa', 
            component : InteresesRepActiva,
          },
          {
            path : 'representacion-pasiva', 
            component : InteresesRepPasiva,
          },
          {
            path : 'socios', 
            component : InteresesSocios,
          },
          {
            path : 'clientes', 
            component : InteresesClientes,
          },
          {
            path : 'otras', 
            component : InteresesOtras,
          },
          {
            path : 'beneficios', 
            component : InteresesBeneficios,
          }
        ]
      },
      {

        //
        // RUTAS PARA INGRESOS
        // 
        path : "ingresos",
        component : Ingresos,
        children : [
          {
            path : '', 
            component : IngresosSueldosPublicos,
          },
          {
            path : 'sueldos-otros', 
            component : IngresosSueldosOtros,
          },
          {
            path : 'actividad-profesional', 
            component : IngresosActividadProfesional,
          },
          {
            path : 'actividad-empresarial', 
            component : IngresosActividadEmpresarial,
          },
          {
            path : 'actividad-economica-menor', 
            component : IngresosActividadEconomica,
          },
          {
            path : 'arrendamiento', 
            component : IngresosArrendamiento,
          },
          {
            path : 'intereses', 
            component : IngresosIntereses,
          },
          {
            path : 'premios', 
            component : IngresosPremios,
          },
          {
            path : 'otros-ingresos', 
            component : IngresosOtros,
          },
          {
            path : 'enajenacion', 
            component : IngresosEnajenacion,
          }
        ]
      },
      {
        //
        // RUTAS PARA ACTIVOS
        //
        path : "activos",
        component : Activos,
        children : [
          {
            path : '', 
            component : ActivosBienesInmuebles,
          },
          {
            path : 'bienes-muebles', 
            component : ActivosBienesMuebles,
          },
          {
            path : 'bienes-muebles-no-registrables', 
            component : ActivosBienesMueblesNoRegistrables,
          },
          {
            path : 'inversiones', 
            component : ActivosInversiones,
          },
          {
            path : 'efectivo-y-metales', 
            component : ActivosEfectivo,
          },
          {
            path : 'fideicomisos', 
            component : ActivosFideicomisos,
          },
          {
            path : 'bienes-intangibles', 
            component : ActivosBienesIntangibles,
          },
          {
            path : 'cuentas-por-cobrar', 
            component : ActivosCuentasPorCobrar,
          },
          {
            path : 'beneficios-en-especie', 
            component : ActivosBeneficiosEnEspecie,
          }
        ]
      },
      {
        //
        // RUTAS PARA PASIVOS
        //
        path : "pasivos",
        component : Pasivos,
        children : [
          {
            path : '', 
            component : PasivosDeudas,
          },
          {
            path : 'otras-obligaciones', 
            component : PasivosObligaciones,
          }
        ]
      }
    ]
  }
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

    methods : {
      getProfile(id){
        let conf = Object.assign({}, this.fetchObj),
            that = this;
        conf.body = JSON.stringify({id : id});
        fetch(this.endpoint, conf)
          .then(response => response.json())
          .then(d => { 
            if(d._id == id){
              console.log(d);
              that.profile = d;
            }
          });
      }
    },

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
    },
    mounted(){
      console.log(this.$route.path, this.$route);
    }
});