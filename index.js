
const fs = require('fs');
const path = require('path');


const isValidRoute = (route) => fs.existsSync(route);// funcion para ver si existe esta ruta 

const isFile = (route) => fs.statSync(route).isFile(); //funcion para ver si la ruta es un archivo 

const isMdFile = (route) => (path.extname(route) === '.md');//FUNCION PARA VER SI TIENE EXTENCION MD

// const isDirectory=(route)=> fs.statSync(route).isDirectory();//funcion para ver si es un directorio

const getAbsoluteRoute = (route) => (path.isAbsolute(route) ? route : path.resolve(route));//hacerla absoluta 




const getMdFiles = (routeFile) => {//funcion RECURSICVA
  let arrayMdFile = [];
  const route = getAbsoluteRoute(routeFile);
  if (isFile(route)) {
    if (isMdFile(route)) {
      arrayMdFile.push(route);
    }
  } else {
    const arrayOfFiles = fs.readdirSync(route);
    arrayOfFiles.forEach((file) => {
      const arrayMd = getMdFiles(path.join(route, file));
      arrayMdFile = arrayMdFile.concat(arrayMd);
    });
  }
  return arrayMdFile;

};



const getLinksMd = (route) => {
  return new Promise((resolve, reject) => {
    try {
      const arrayMdFiles = getMdFiles(route);
      const arrayofLinks = [];
      const regex = /\[(.*)\]\((https?:\/\/\S+)\)/g;
      let filesProcessed = 0;
      arrayMdFiles.forEach((filePath) => {
        fs.readFile(filePath, 'utf8', (err, file) => {
          if (err) {
            reject(err);
          }
          let match;
          while ((match = regex.exec(file)) !== null) {
            arrayofLinks.push({
              href: match[2],
              text: match[1],
              path: filePath,
            });
          }
          filesProcessed += 1;
          if (filesProcessed === arrayMdFiles.length) {
            // console.log("verificandoarraysdelinks",arrayofLinks)
            resolve(arrayofLinks);
          }
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};





module.exports = {
  isValidRoute,
  isFile,
  isMdFile,
  getAbsoluteRoute,
  getMdFiles,
  getLinksMd,
 

};

