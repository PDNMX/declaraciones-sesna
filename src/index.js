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

// otra cosa
const OFICINAS = ["ADMINISTRACION DEL PATRIMONIO DE LA BENEFICENCIA PUBLICA","ADMINISTRACION FEDERAL DE SERVICIOS EDUCATIVOS EN EL DISTRITO FEDERAL","ADMINISTRACION PORTUARIA INTEGRAL DE ALTAMIRA S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE COATZACOALCOS S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE DOS BOCAS S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE ENSENADA S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE GUAYMAS S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE LAZARO CARDENAS S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE MANZANILLO S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE MAZATLAN S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE PROGRESO S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE PUERTO MADERO, S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE PUERTO VALLARTA S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE SALINA CRUZ S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE TAMPICO S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE TOPOLOBAMPO S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE TUXPAN S.A. DE C.V.","ADMINISTRACION PORTUARIA INTEGRAL DE VERACRUZ S.A. DE C.V.","AEROPUERTO INTERNACIONAL DE LA CIUDAD DE MEXICO S.A. DE C.V.","AEROPUERTOS Y SERVICIOS AUXILIARES","AGENCIA ESPACIAL MEXICANA","AGENCIA MEXICANA DE COOPERACIÓN INTERNACIONAL PARA EL DESARROLLO","AGENCIA NACIONAL DE SEGURIDAD INDUSTRIAL Y DE PROTECCIÓN AL MEDIO AMBIENTE DEL SECTOR HIDROCARBUROS","AGROASEMEX S.A.","APOYOS Y SERVICIOS A LA COMERCIALIZACION AGROPECUARIA","ARCHIVO GENERAL DE LA NACION","AUTORIDAD FEDERAL PARA EL DESARROLLO DE LAS ZONAS ECONÓMICAS ESPECIALES","BANCO DEL AHORRO NACIONAL Y SERVICIOS FINANCIEROS S N C","BANCO NACIONAL DE COMERCIO EXTERIOR S.N.C.","BANCO NACIONAL DE CREDITO RURAL S.N.C.","BANCO NACIONAL DE OBRAS Y SERVICIOS PUBLICOS S.N.C.","BANCO NACIONAL DEL EJERCITO FUERZA AEREA Y ARMADA S.N.C.","CAMINOS Y PUENTES FEDERALES DE INGRESOS Y SERVICIOS CONEXOS","CASA DE MONEDA DE MEXICO","CENTRO DE CAPACITACION CINEMATOGRAFICA A.C.","CENTRO DE ENSEÑANZA TECNICA INDUSTRIAL.","CENTRO DE ESTUDIOS SUPERIORES EN TURISMO","CENTRO DE EVALUACION Y DESARROLLO HUMANO","CENTRO DE INGENIERIA Y DESARROLLO INDUSTRIAL","CENTRO DE INVESTIGACION CIENTIFICA DE YUCATAN A.C.","CENTRO DE INVESTIGACION CIENTIFICA Y DE EDUCACION SUPERIOR DE ENSENADA B.C.","CENTRO DE INVESTIGACION EN ALIMENTACION Y DESARROLLO A.C.","CENTRO DE INVESTIGACION EN GEOGRAFIA Y GEOMATICA ING. JORGE L. TAMAYO A.C.","CENTRO DE INVESTIGACION EN MATEMATICAS A.C.","CENTRO DE INVESTIGACION EN MATERIALES AVANZADOS S.C.","CENTRO DE INVESTIGACION EN QUIMICA APLICADA","CENTRO DE INVESTIGACION Y ASISTENCIA EN TECNOLOGIA Y DISEÑO DEL ESTADO DE JALISCO A.C.","CENTRO DE INVESTIGACION Y DE ESTUDIOS AVANZADOS DEL INSTITUTO POLITECNICO NACIONAL","CENTRO DE INVESTIGACION Y DESARROLLO TECNOLOGICO EN ELECTROQUIMICA S.C.","CENTRO DE INVESTIGACION Y DOCENCIA ECONOMICAS A.C.","CENTRO DE INVESTIGACION Y SEGURIDAD NACIONAL","CENTRO DE INVESTIGACIONES BIOLOGICAS DEL NOROESTE S.C.","CENTRO DE INVESTIGACIONES EN OPTICA A.C.","CENTRO DE INVESTIGACIONES Y ESTUDIOS SUPERIORES EN ANTROPOLOGIA SOCIAL","CENTRO DE PRODUCCION DE PROGRAMAS INFORMATIVOS Y ESPECIALES","CENTRO NACIONAL DE CONTROL DE ENERGÍA","CENTRO NACIONAL DE CONTROL DE GAS NATURAL","CENTRO NACIONAL DE EQUIDAD DE GENERO Y SALUD REPRODUCTIVA","CENTRO NACIONAL DE EXCELENCIA TECNOLOGICA EN SALUD","CENTRO NACIONAL DE LA TRANSFUSION SANGUINEA","CENTRO NACIONAL DE METROLOGIA","CENTRO NACIONAL DE PLANEACION, ANALISIS E INFORMACION PARA EL COMBATE A LA DELINCUENCIA","CENTRO NACIONAL DE PREVENCION DE DESASTRES","CENTRO NACIONAL DE TRASPLANTES","CENTRO NACIONAL DE VIGILANCIA EPIDEMIOLOGICA Y CONTRTOL DE ENFERMEDADES","CENTRO NACIONAL PARA LA PREVENCION Y CONTROL DEL VIH/SIDA","CENTRO NACIONAL PARA LA PREVENCIÓN Y EL CONTROL DE LAS ADICCIONES","CENTRO NACIONAL PARA LA SALUD DE LA INFANCIA Y ADOLESCENCIA","CENTRO REGIONAL DE ALTA ESPECIALIDAD EN CHIAPAS","CENTROS DE INTEGRACION JUVENIL A.C.","CFE CORPORATIVO","CFE DISTRIBUCIÓN","CFE GENERACIÓN I","CFE GENERACIÓN II","CFE GENERACIÓN III","CFE GENERACIÓN IV","CFE GENERACIÓN V","CFE GENERACIÓN VI","CFE SUMINISTRADOR DE SERVICIOS BÁSICOS","CFE TRANSMISIÓN","CIATEC, A.C. CENTRO DE INNOVACION APLICADA EN TECNOLOGIAS COMPETITIVAS","CIATEQ, A.C. CENTRO DE TECNOLOGIA AVANZADA","COLEGIO DE BACHILLERES","COLEGIO DE POSTGRADUADOS","COLEGIO NACIONAL DE EDUCACION PROFESIONAL TECNICA","COLEGIO SUPERIOR AGROPECUARIO DEL ESTADO DE GUERRERO","COMISION DE APELACION Y ARBITRAJE DEL DEPORTE","COMISION DE OPERACION Y FOMENTO DE ACTIVIDADES ACADEMICAS DEL INSTITUTO POLITECNICO NACIONAL","COMISIÓN EJECUTIVA DE ATENCIÓN A VÍCTIMAS","COMISION FEDERAL DE ELECTRICIDAD","COMISION FEDERAL DE MEJORA REGULATORIA","COMISION FEDERAL DE TELECOMUNICACIONES","COMISION FEDERAL PARA LA PROTECCION CONTRA RIESGOS SANITARIOS","COMISION NACIONAL BANCARIA Y DE VALORES","COMISION NACIONAL DE ACUACULTURA Y PESCA","COMISION NACIONAL DE ARBITRAJE MEDICO","COMISION NACIONAL DE AREAS NATURALES PROTEGIDAS","COMISION NACIONAL DE BIOETICA","COMISION NACIONAL DE CULTURA FISICA Y DEPORTE","COMISIÓN NACIONAL DE HIDROCARBUROS","COMISION NACIONAL DE LAS ZONAS ARIDAS","COMISION NACIONAL DE LIBROS DE TEXTO GRATUITOS","COMISION NACIONAL DE LOS SALARIOS MINIMOS","COMISION NACIONAL DE PROTECCION SOCIAL EN SALUD","COMISION NACIONAL DE SEGURIDAD NUCLEAR Y SALVAGUARDIAS","COMISION NACIONAL DE SEGUROS Y FIANZAS","COMISION NACIONAL DE VIVIENDA","COMISION NACIONAL DEL AGUA","COMISION NACIONAL DEL SISTEMA DE AHORRO PARA EL RETIRO","COMISION NACIONAL FORESTAL","COMISION NACIONAL PARA EL DESARROLLO DE LOS PUEBLOS INDIGENAS","COMISION NACIONAL PARA EL USO EFICIENTE DE LA ENERGIA","COMISION NAL. PARA LA PROTECCION Y DEFENSA DE LOS USUARIOS DE SERVICIOS FINANCIEROS","COMISION PARA LA REGULARIZACION DE LA TENENCIA DE LA TIERRA","COMISION PARA PREVENIR Y ERRADICAR LA VIOLENCIA CONTRA LAS MUJERES","COMISION REGULADORA DE ENERGIA","COMITE NACIONAL MIXTO DE PROTECCION AL SALARIO","COMITÉ NACIONAL PARA EL DESARROLLO SUSTENTABLE DE LA CAÑA DE AZÚCAR","COMPAÑIA MEXICANA DE EXPLORACIONES S.A. DE C.V.","COMPAÑIA OPERADORA DEL CENTRO CULTURAL Y TURISTICO DE TIJUANA S.A. DE C.V.","CONSEJERIA JURIDICA DEL EJECUTIVO FEDERAL","CONSEJO DE MENORES","CONSEJO DE PROMOCION TURISTICA DE MEXICO S.A. DE C.V.","CONSEJO NACIONAL DE CIENCIA Y TECNOLOGIA","CONSEJO NACIONAL DE EVALUACION DE LA POLITICA DE DESARROLLO SOCIAL","CONSEJO NACIONAL DE FOMENTO EDUCATIVO","CONSEJO NACIONAL DE NORMALIZACION Y CERTIFICACION DE COMPETENCIA LABORALES","CONSEJO NACIONAL PARA EL DESARROLLO Y LA INCLUSIÓN DE LAS PERSONAS CON DISCAPACIDAD","CONSEJO NACIONAL PARA LA CULTURA Y LAS ARTES","CONSEJO NACIONAL PARA PREVENIR LA DISCRIMINACION","COORDINACION GENERAL DE LA COMISION MEXICANA DE AYUDA A REFUGIADOS","COORDINACION NACIONAL DEL PROGRAMA DE DESARROLLO HUMANO OPORTUNIDADES","CORPORACIÓN ÁNGELES VERDES","CORPORACION MEXICANA DE INVESTIGACION EN MATERIALES S.A. DE C.V.","DICONSA S.A. DE C.V.","EDUCAL S.A. DE C.V.","EL COLEGIO DE LA FRONTERA NORTE A.C.","EL COLEGIO DE LA FRONTERA SUR","EL COLEGIO DE MEXICO, A.C.","EL COLEGIO DE MICHOACAN A.C.","EL COLEGIO DE SAN LUIS A.C","ESTUDIOS CHURUBUSCO AZTECA S.A.","EXPORTADORA DE SAL S.A.DE C.V.","FERROCARRIL DEL ISTMO DE TEHUANTEPEC S.A. DE C.V.","FERROCARRILES NACIONALES DE MEXICO","FIDEICOMISO DE FOMENTO MINERO","FIDEICOMISO DE FORMACION Y CAPACITACION PARA EL PERSONAL DE LA MARINA MERCANTE NACIONAL","FIDEICOMISO DE RIESGO COMPARTIDO","FIDEICOMISO FONDO DE CAPITALIZACION E INVERSION DEL SECTOR RURAL","FIDEICOMISO FONDO NACIONAL DE FOMENTO EJIDAL","FIDEICOMISO FONDO NACIONAL DE HABITACIONES POPULARES","FIDEICOMISO PARA LA CINETECA NACIONAL","FIDEICOMISO PROMEXICO","FINANCIERA RURAL","FONATUR CONSTRUCTORA, S.A. DE C.V.","FONATUR MANTENIMIENTO TURISTICO, S.A. DE C.V.","FONATUR OPERADORA PORTUARIA, S.A. DE C.V.","FONATUR PRESTADORA DE SERVICIOS, S.A. DE C.V.","FONDO DE CULTURA ECONOMICA","FONDO DE EMPRESAS EXPROPIADAS DEL SECTOR AZUCARERO","FONDO DE GARANTIA Y FOMENTO PARA LA AGRICULTURA, GANADERIA Y AVICULTURA","FONDO DE GARANTIA Y FOMENTO PARA LAS ACTIVIDADES PESQUERAS","FONDO DE INFORMACION Y DOCUMENTACION PARA LA INDUSTRIA","FONDO DE LA VIVIENDA DEL ISSSTE","FONDO DE OPERACION Y FINANCIAMIENTO BANCARIO A LA VIVIENDA","FONDO ESPECIAL DE ASISTENCIA TECNICA Y GARANTIA PARA LOS CREDITOS AGROPECUARIOS","FONDO ESPECIAL PARA FINANCIAMIENTOS AGROPECUARIOS","FONDO NACIONAL DE FOMENTO AL TURISMO","FONDO NACIONAL PARA EL FOMENTO DE LAS ARTESANIAS","FONDO PARA EL DESARROLLO DE LOS RECURSOS HUMANOS","GRUPO AEROPORTUARIO DE LA CIUDAD DE MEXICO S.A. DE C.V.","HOSPITAL GENERAL DE MEXICO","HOSPITAL GENERAL DR. MANUEL GEA GONZALEZ","HOSPITAL INFANTIL DE MEXICO FEDERICO GOMEZ","HOSPITAL JUAREZ DE MEXICO","HOSPITAL REGIONAL DE ALTA ESPECIALIDAD DE CIUDAD VICTORIA BICENTENARIO 2010","HOSPITAL REGIONAL DE ALTA ESPECIALIDAD DE IXTAPALUCA","HOSPITAL REGIONAL DE ALTA ESPECIALIDAD DE LA PENINSULA DE YUCATAN","HOSPITAL REGIONAL DE ALTA ESPECIALIDAD DE OAXACA","HOSPITAL REGIONAL DE ALTA ESPECIALIDAD DEL BAJIO","I.I.I. SERVICIOS S.A. DE C.V.","IMPRESORA Y ENCUADERNADORA PROGRESO S.A. DE C.V.","INSTALACIONES INMOBILIARIAS PARA INDUSTRIAS, S.A. DE C.V.","INSTITUTO DE ADMINISTRACION Y AVALUOS DE BIENES NACIONALES","INSTITUTO DE CAPACITACION Y PROFESIONALIZACION EN PROCURACION DE JUSTICIA FEDERAL","INSTITUTO DE ECOLOGIA A.C. (INV)","INSTITUTO DE INVESTIGACIONES DR. JOSE MARIA LUIS MORA","INSTITUTO DE INVESTIGACIONES ELECTRICAS","INSTITUTO DE LOS MEXICANOS EN EL EXTERIOR","INSTITUTO DE SEGURIDAD SOCIAL PARA LAS FUERZAS ARMADAS MEXICANAS","INSTITUTO DE SEGURIDAD Y SERVICIOS SOCIALES DE LOS TRABAJADORES DEL ESTADO","INSTITUTO DEL FONDO NACIONAL PARA EL CONSUMO DE LOS TRABAJADORES","INSTITUTO FEDERAL DE ACCESO A LA INFORMACION PUBLICA","INSTITUTO FEDERAL DE TELECOMUNICACIONES","INSTITUTO MATIAS ROMERO DE ESTUDIOS DIPLOMATICOS","INSTITUTO MEXICANO DE CINEMATOGRAFIA","INSTITUTO MEXICANO DE LA JUVENTUD","INSTITUTO MEXICANO DE LA PROPIEDAD INDUSTRIAL","INSTITUTO MEXICANO DE LA RADIO","INSTITUTO MEXICANO DE TECNOLOGIA DEL AGUA","INSTITUTO MEXICANO DEL PETROLEO","INSTITUTO MEXICANO DEL SEGURO SOCIAL","INSTITUTO MEXICANO DEL TRANSPORTE","INSTITUTO NACIONAL DE ANTROPOLOGIA E HISTORIA","INSTITUTO NACIONAL DE ASTROFISICA OPTICA Y ELECTRONICA","INSTITUTO NACIONAL DE BELLAS ARTES Y LITERATURA","INSTITUTO NACIONAL DE CANCEROLOGIA","INSTITUTO NACIONAL DE CARDIOLOGIA IGNACIO CHAVEZ","INSTITUTO NACIONAL DE CIENCIAS MEDICAS Y NUTRICION SALVADOR ZUBIRAN (INV)","INSTITUTO NACIONAL DE CIENCIAS PENALES","INSTITUTO NACIONAL DE DESARROLLO SOCIAL","INSTITUTO NACIONAL DE ECOLOGIA","INSTITUTO NACIONAL DE ECOLOGÍA Y CAMBIO CLIMÁTICO","INSTITUTO NACIONAL DE ENFERMEDADES RESPIRATORIAS","INSTITUTO NACIONAL DE ESTUDIOS HISTORICOS DE LAS REVOLUCIONES DE MEXICO","INSTITUTO NACIONAL DE GERIATRÍA","INSTITUTO NACIONAL DE INFRAESTRUCTURA FÍSICA EDUCATIVA","INSTITUTO NACIONAL DE INVESTIGACIONES FORESTALES AGRICOLAS Y PECUARIAS","INSTITUTO NACIONAL DE INVESTIGACIONES NUCLEARES","INSTITUTO NACIONAL DE LA ECONOMÍA SOCIAL","INSTITUTO NACIONAL DE LA PESCA","INSTITUTO NACIONAL DE LAS MUJERES","INSTITUTO NACIONAL DE LAS PERSONAS ADULTAS MAYORES","INSTITUTO NACIONAL DE LENGUAS INDIGENAS","INSTITUTO NACIONAL DE MEDICINA GENOMICA","INSTITUTO NACIONAL DE MIGRACION","INSTITUTO NACIONAL DE NEUROLOGIA Y NEUROCIRUGIA DR. MANUEL VELASCO SUAREZ","INSTITUTO NACIONAL DE PEDIATRIA","INSTITUTO NACIONAL DE PERINATOLOGIA ISIDRO ESPINOSA DE LOS REYES","INSTITUTO NACIONAL DE PSIQUIATRIA RAMON DE LA FUENTE MUÑIZ","INSTITUTO NACIONAL DE REHABILITACION","INSTITUTO NACIONAL DE SALUD PUBLICA","INSTITUTO NACIONAL DEL DERECHO DE AUTOR","INSTITUTO NACIONAL PARA EL DESARROLLO DE CAPACIDADES DEL SECTOR RURAL A.C.","INSTITUTO NACIONAL PARA EL FEDERALISMO Y EL DESARROLLO MUNICIPAL","INSTITUTO NACIONAL PARA LA EDUCACION DE LOS ADULTOS","INSTITUTO NACIONAL PARA LA EVALUACION DE LA EDUCACION","INSTITUTO PARA EL DESARROLLO TECNICO DE LAS HACIENDAS PUBLICAS","INSTITUTO PARA LA PROTECCION AL AHORRO BANCARIO","INSTITUTO POLITECNICO NACIONAL","INSTITUTO POTOSINO DE INVESTIGACION CIENTIFICA Y TECNOLOGICA, A.C.","LABORATORIOS DE BIOLOGICOS Y REACTIVOS DE MEXICO S.A. DE C.V.","LICONSA S.A. DE C.V.","LOTERIA NACIONAL PARA LA ASISTENCIA PUBLICA","NACIONAL FINANCIERA S.N.C.","NOTIMEX, AGENCIA DE NOTICIAS DEL ESTADO MEXICANO","NOTIMEX S.A. DE C.V.","PATRONATO DE OBRAS E INSTALACIONES DEL INSTITUTO POLITECNICO NACIONAL","PEMEX-EXPLORACION Y PRODUCCION","PEMEX-GAS Y PETROQUIMICA BASICA","PEMEX-PETROQUIMICA","PEMEX-REFINACION","PETROLEOS MEXICANOS","P.M.I. COMERCIO INTERNACIONAL S.A. DE C.V.","POLICIA FEDERAL","PRESIDENCIA DE LA REPUBLICA","PREVENCION Y READAPTACION SOCIAL","PROCURADURIA AGRARIA","PROCURADURIA DE LA DEFENSA DEL CONTRIBUYENTE","PROCURADURIA FEDERAL DE LA DEFENSA DEL TRABAJO","PROCURADURIA FEDERAL DE PROTECCION AL AMBIENTE","PROCURADURIA FEDERAL DEL CONSUMIDOR","PROCURADURIA GENERAL DE LA REPUBLICA","PRODUCTORA NACIONAL DE BIOLOGICOS VETERINARIOS","PRONOSTICOS PARA LA ASISTENCIA PUBLICA","RADIO EDUCACION","REGISTRO AGRARIO NACIONAL","SECCION MEXICANA DE LA COMISION INTERNACIONAL DE LIMITES Y AGUAS MEXICO-ESTADOS UNIDOS DE AMERICA","SECCION MEXICANA DE LA COMISION INTERNACIONAL DE LIMITES Y AGUAS MEXICO-GUATEMALA-BELICE","SECRETARIA DE AGRICULTURA GANADERIA DESARROLLO RURAL PESCA Y ALIMENTACION","SECRETARIA DE COMUNICACIONES Y TRANSPORTES","SECRETARÍA DE CULTURA","SECRETARIA DE DESARROLLO AGRARIO, TERRITORIAL Y URBANO","SECRETARIA DE DESARROLLO SOCIAL","SECRETARIA DE ECONOMIA","SECRETARIA DE EDUCACION PUBLICA","SECRETARIA DE ENERGIA","SECRETARIA DE GOBERNACION","SECRETARIA DE HACIENDA Y CREDITO PUBLICO","SECRETARIA DE LA DEFENSA NACIONAL","SECRETARIA DE LA FUNCION PUBLICA","SECRETARIA DE MARINA","SECRETARIA DE MEDIO AMBIENTE Y RECURSOS NATURALES","SECRETARIA DE RELACIONES EXTERIORES","SECRETARIA DE SALUD","SECRETARIA DE TURISMO","SECRETARIA DEL TRABAJO Y PREVISION SOCIAL","SECRETARÍA EJECUTIVA DEL SISTEMA NACIONAL ANTICORRUPCIÓN","SECRETARIA GENERAL DEL CONSEJO NACIONAL DE POBLACION","SECRETARIA TECNICA DE LA COMISION CALIFICADORA DE PUBLICACIONES Y REVISTAS ILUSTRADAS","SECRETARIADO EJECUTIVO DEL SISTEMA NACIONAL ANTICORRUPCIÓN","SECRETARIADO EJECUTIVO DEL SISTEMA NACIONAL DE SEGURIDAD PUBLICA","SERVICIO DE ADMINISTRACION TRIBUTARIA","SERVICIO DE ADMINISTRACION Y ENAJENACION DE BIENES","SERVICIO DE INFORMACION AGROALIMENTARIA Y PESQUERA","SERVICIO DE PROTECCIÓN FEDERAL","SERVICIO GEOLOGICO MEXICANO","SERVICIO NACIONAL DE INSPECCION Y CERTIFICACION DE SEMILLAS","SERVICIO NACIONAL DE SANIDAD INOCUIDAD Y CALIDAD AGROALIMENTARIA","SERVICIO POSTAL MEXICANO","SERVICIOS A LA NAVEGACION EN EL ESPACIO AEREO MEXICANO","SERVICIOS AEROPORTUARIOS DE LA CIUDAD DE MEXICO S.A. DE C.V.","SERVICIOS DE ALMACENAMIENTO DEL NORTE S.A.","SERVICIOS DE ATENCION PSIQUIATRICA","SISTEMA NACIONAL PARA EL DESARROLLO INTEGRAL DE LA FAMILIA","SISTEMA PÚBLICO DE RADIODIFUSIÓN DEL ESTADO MEXICANO","SOCIEDAD HIPOTECARIA FEDERAL S.N.C.","TALLERES GRAFICOS DE MEXICO","TECNOLOGICO NACIONAL DE MEXICO","TELECOMUNICACIONES DE MEXICO","TELEVISION METROPOLITANA S.A. DE C.V.","TRANSPORTADORA DE SAL S.A. DE C.V.","TRIBUNAL FEDERAL DE CONCILIACION Y ARBITRAJE","TRIBUNAL FEDERAL DE JUSTICIA FISCAL Y ADMINISTRATIVA CON SEDE EN EL DISTRITO FEDERAL","TRIBUNAL SUPERIOR AGRARIO.","TRIBUNALES UNITARIOS AGRARIOS","UNIVERSIDAD ABIERTA Y A DISTANCIA DE MÉXICO","UNIVERSIDAD AUTONOMA AGRARIA ANTONIO NARRO","UNIVERSIDAD AUTONOMA DE CHAPINGO","UNIVERSIDAD AUTONOMA METROPOLITANA","UNIVERSIDAD PEDAGOGICA NACIONAL","XE-IPN CANAL 11"];


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
    	names    : PROP_NAMES,
      offices  : OFICINAS,
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
      //console.log(this.$route.path, this.$route);
    },

    computed : {
      isProfile(){
        return this.$route.path.indexOf("perfil") != -1;
      }
    }
});