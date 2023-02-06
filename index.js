
const fs = require('fs');
const path = require('path');


const isValidRoute = (route) => fs.existsSync(route);// funcion para ver si existe esta ruta 

const isFile = (route) => fs.statSync(route).isFile(); //funcion para ver si la ruta es un archivo 

const isMdFile = (route) => (path.extname(route) === '.md');//FUNCION PARA VER SI TIENE EXTENCION MD

const isDirectory=(route)=> fs.statSync(route).isDirectory();//funcion para ver si es un directorio

const getAbsoluteRoute = (route) => (path.isAbsolute(route) ? route : path.resolve(route));//hacerla absoluta 


const getMdFiles = (routeFile) => {
  let arrayMdFile = [];
  const route = getAbsoluteRoute(routeFile);
  if (isFile(route)) {
    if (isMdFile(route)) {
      arrayMdFile.push(route);
    }
  } else  {
    console.log("noesmd");
    isDirectory (route);
console.log()
    }
    return arrayMdFile;// investigar 
  };


module.exports = {
  isValidRoute,
  isFile,
  isMdFile,
  getAbsoluteRoute,
  getMdFiles,
  isDirectory,
};


/*const route = './testsamplesFiles';
const isRouteValid = isValidRoute(route);

if (//isRouteValid) {
  //console.log(`La ruta "${//route}" existe en el sistema de archivos.`);
} else {
  //console.log(`La ruta "${//route}" NO existe en el sistema de archivos.`);
}*/