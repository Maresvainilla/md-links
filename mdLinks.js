
const { isValidRoute,isFile,isMdFile,getAbsoluteRoute,getMdFiles } = require('./index.js');
const path = require('path');

const sampleFile = 'README.md';  // prueba incorrecta: /path/to/sample/file  prueba correcta ./samplesFiles

if (isValidRoute(sampleFile)) {
  console.log(`${sampleFile} exists.`); 
} else {
  console.log(`${sampleFile} does not exist.`);
}
 
if (isFile(sampleFile)) {
    console.log(`${sampleFile} is a file`);
  } else {
    console.log(`${sampleFile} is not a file`);
  }

  if (isMdFile(sampleFile)) {
    console.log(`${sampleFile} is an  .md file `);
  } else {
    console.log(`${sampleFile} is NOPT a .md file`);
  }

  const absoluteRoute = getAbsoluteRoute(sampleFile);

if (path.isAbsolute(absoluteRoute)) {
  console.log(`La ruta es absoluta: ${absoluteRoute}`);
} else {
  console.log(`La ruta no es absoluta, aquí está resuelta: ${absoluteRoute}`);
}

const arrayMdFile = getMdFiles(sampleFile);
if (arrayMdFile.length > 0) {
    console.log(arrayMdFile);
    } else {
    console.log('No es un archivo markdown');
    }

    

// const validator = require('./index.js');

// const route = './samplesFiles';
// console.log(validator.isValidRoute(route));


// // const route = './samplesFiles';
// const isRouteValid = validator.isValidRoute(route);

// if (isRouteValid) {
//   console.log(`La ruta "${route}" existe en el sistema de archivos.`);
// } else {
//   console.log(`La ruta "${route}" NO existe en el sistema de archivos.`);
// }