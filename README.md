# Declaraciones patrimoniales
Aplicación frontend para desplegar la información del API de declaraciones patrimoniales.

## Instalación y ejecución

### Requerimientos
Para ejecutar y compilar el proyecto, es necesario tener _git_ y _node.js_ con _npm_. Esto en una terminal de unix/linux. La guía se probó en MacOS, pero es similar en otros sistemas operativos.

Para ejecutarlo en el servidor, el único requisito es que el servidor pueda servir archivos estáticos. (Cualquier servidor Apache, por ejemplo). No es necesario ningún lenguaje de servidor ni de base de datos.

### Instalación local
 los pasos son los siguientes en la terminal:
 
 1. descarga el proyecto del repo
```
git clone https://github.com/elcoruco/declaraciones-sesna.git dec
```

 2. instala las dependencias
```
cd dec
npm install
```

 3. ejecuta el servidor local
```
npm start
```

### Instalación en producción
para ejecutar el proyecto en un servidor de producción, es necesario generar los archivos de producción, y mover el contenido de la carpeta __build__ dentro del directorio en el que se desplegará el sitio.
```
npm run build
```

### organización de archivos de desarrollo
```
📂 SRC
|____
    |
    * index.js (inicial el app)
    * ConstValues.js (Catálogos y configuración del app)
    |
    📂 MAIN-COMPONENTS (templates de secciones principales)
    |____
    |   |
    |   * Activos.js
    |   * Busqueda.js
    |   * Container.js
    |   * Informacion.js
    |   * Ingresos.js
    |   * Intereses.js
    |   * Pasivos.js
    |   * Perfil.js
    |   * Stats.js
    |
    📂 SINGLE-COMPONENTS (componentes y secciones secundarias)
    |____
    |   |
    |   * BusquedaForm.js
    |   * BusquedaFromMaterialUI.js
    |   * BusquedaTable.js
    |   * BusquedaTableMaterialUI.js
    |   📂 activos
    |   |____
    |       |
    |       * templates de las secciones de activos
    |   📂 informacion
    |   |____
    |       |
    |       * templates de las secciones de información
    |   📂 ingresos
    |   |____
    |       |
    |       * templates de las secciones de ingresos
    |   📂 intereses
    |   |____
    |       |
    |       * templates de las secciones de intereses
    |   📂 pasivos
    |   |____
    |       |
    |       * templates de las secciones de pasivos
    |   📂 stats
    |   |____
    |       |
    |       * templates de las secciones de estadísticas
    |       📂 age/education/gob-level/etc...
    |       |____
    |           |
    |           * gráficas de la categoría
    |
```

## Dependencia del API de declaraciones
La aplicación depende por completo de la disponibilidad del API de declaraciones para desplegar información. 

Esta API cuenta con un endpoint, y puede regresar una colección de funcionarios o un funcionario en específico; esto depende del campo de identificación, si está definido o no. El API acepta los siguientes parámetros:
   
* "profile": el nivel del perfil (público o completo)
* "id": si está definido y el usuario existe, regresa la información completa de un solo funcionario.
* "limit": el número resultados que se quiere x página
* "skip": el número de resultados que se omiten al inicio.
* "query": los filtros de búsqueda, se aceptan los siguientes:
	* "metadatos.institucion_responsable": texto,
	* "informacion_personal.informacion_general.nombres": texto,
	* "informacion_personal.informacion_general.primer_apellido": texto,
	* "informacion_personal.informacion_general.segundo_apellido": texto,
	* "informacion_personal.datos_encargo_actual.direccion_encargo.entidad_federativa.cve_ent": el id del estado,
	* "informacion_personal.datos_encargo_actual.direccion_encargo.municipio.cve_mun": el id del municipio,
	* "informacion_personal.datos_encargo_actual.empleo_cargo_comision": texto,
	* "informacion_personal.datos_encargo_actual.nivel_gobierno.codigo": "EST"|"MUN"|"FED",
	* "activos.bienes_inmuebles.superficie_construccion": número,
	* "activos.bienes_inmuebles.superficie_terreno": número,
	* "activos.bienes_inmuebles.forma_adquisicion.codigo": "CES",
	* "activos.bienes_inmuebles.precio_adquisicion.valor": número,
	* "activos.bienes_inmuebles.valor_catastral": número,
 	*  "informacion_personal.datos_encargo_actual.nivel_encargo": texto,
	* "informacion_personal.datos_curriculares.grado_maximo_escolaridad": texto,
	* "ingresos.sueldos_salarios_publicos.ingreso_bruto_anual.valor": número,
	* "ingresos.sueldos_salarios_publicos.ingreso_bruto_anual.moneda.codigo": texto,
	* "informacion_personal.informacion_general.fecha_nacimiento": objeto con las propiedades "desde" y "hasta" (YYYY-mm-dd)

## Notas de React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify