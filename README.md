# declaraciones-sesna
Declaraciones patrimoniales

## Instalación y ejecución
### Requerimientos
Para ejecutar y compilar el proyecto, es necesario tener github y node.js con npm. Esto en una terminal de unix/linux. La guía se probó en MacOS, pero es similar en otros sistemas operativos.

Para ejecutarlo en el servidor, el único requisito es que el servidor pueda servir archivos estáticos. (Cualquier servidor Apache, por ejemplo). No es necesario ningún lenguaje de servidor ni de base de datos.

### Instalación local
 los pasos son los siguientes en la terminal:
 1. descarga el proyecto del repo
```
https://github.com/elcoruco/declaraciones-sesna.git declaraciones
```
 2. instala las dependencias
```
cd declaraciones
npm install
```
 3. ejecuta el servidor local
```
npm start
```

### Instalación en producción
para ejecutar el proyecto en un servidor de producción, solo es necesario generar el "build", y después copiar estos archivos en la carpeta del servidor en el que se ejecutará el app. Esta carpeta que se genera, se llama "build".
```
npm run build
```
Esto está pensado para servirse desde un dominio o subdominio en el nivel superior de la navegación, es decir, en el root "/"
