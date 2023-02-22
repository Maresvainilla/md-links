
// const { isValidRoute,isFile,isMdFile,getAbsoluteRoute,getMdFiles, getLinksMd,} = require('./index.js');
const path = require('path');

//  const sampleFile = './samplesFiles';  // prueba incorrecta: /path/to/sample/file  prueba correcta ./samplesFiles
  
const { validateLinks } = require('./axiosvalidate.js');


// Utilizando la promesa con .then() y .catch()
// getLinksMd('./samplesFiles')

//   .then((arrayofLinks) => {
//     console.log(arrayofLinks);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

  // **************************
  const route = require('./index.js');
  const validate = require('./axiosvalidate.js');
  
  const mdLinks = (inputPath, options = { validate: false }) => new Promise((resolve) => {
    if (route.isValidRoute(inputPath)) {
      if (options.validate === true) {
        resolve(validate.validateLinks(inputPath));
      } else {
        // console.log("linksMd");
        resolve(route.getLinksMd(inputPath));
        console.log("Links resolved successfully!");
      }
    }
  });
  module.exports = { mdLinks };
  //****************************************************************** */

  
 




// if (isValidRoute(sampleFile)) {
//   console.log(`${sampleFile} exists.`); 
// } else {
//   console.log(`${sampleFile} does not exist.`);
// }
 
// if (isFile(sampleFile)) {
//     console.log(`${sampleFile} is a file`);
//   } else {
//     console.log(`${sampleFile} is not a file`);
//   }

//   if (isMdFile(sampleFile)) {
//     console.log(`${sampleFile} is an  .md file `);
//   } else {
//     console.log(`${sampleFile} is NOPT a .md file`);
//   }

//   const absoluteRoute = getAbsoluteRoute(sampleFile);

// if (path.isAbsolute(absoluteRoute)) {
//   console.log(`La ruta es absoluta: ${absoluteRoute}`);
// } else {
//   console.log(`La ruta no es absoluta, aquí está resuelta: ${absoluteRoute}`);
// }
// const mdFiles = getMdFiles(sampleFile);
// mdFiles.forEach(file => console.log(getLinksMd(file)));


// validateLinks('./samplesFiles')
//   .then((res) => console.log(res));

// const arrayLinks = getLinksMd(sampleFile);
// console.log(arrayLinks);
//************************************ */
// validateLinks(sampleFile)

//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));


// console.log(getLinksMd(mdFiles));  getLinksMd esta esperando una ruta de archivo en forma de cadena pero en lugar de eso 
// tieneun arreglo de archivos (mdFiles)asi que
//hay que  iterar sobre el arreglo de archivos y llamar getLinksMd para cada archivo inddividualmente
// if (isDirectory(sampleFile)) {
//   console.log(`${sampleFile} es un directorio.`);
// } else {
//   console.log(`${sampleFile} no es un directorio.`);
// }  



// if (isValidRoute(sampleFile)) {
//     const mdFiles = getMdFiles(sampleFile);
//     console.log('MD files:', mdFiles);
//     getLinksMd(sampleFile).then((links) => {
//       console.log('Links:', links);
//     }).catch((err) => {
//       console.error(err);
//     });
//   } else {
//     console.error(`The route ${sampleFile} doesn't exist`);
//   }
