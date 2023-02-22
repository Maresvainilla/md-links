#!/usr/bin/env node

 console.log("algo1");
 const fs = require('fs');
const api = require('./mdLinks.js');
const opt = require('./options.js');


console.log("algo2");


const cli = (route, arg1, arg2) => {
  
  if (!fs.existsSync(route)) {
    return Promise.reject(new Error('Invalid path'));
  }
  console.log("imprimir",route,arg1,arg2);
  const validate = opt.getObjValidate(arg1, arg2);
  return api.mdLinks(route, validate)

    .then((response) => {
      console.log("quellega",validate)
      let result = '';
      if (response.length === 0) {
        result = 'md file or link not found';
      }
      if ((arg1 === '--stats' && arg2 === '--validate') || (arg1 === '--validate' && arg2 === '--stats')) {
        result = opt.statValidateLinks(response);
      }
      if (arg1 === '--stats' && arg2 === undefined) {
        console.log("quellegaeeeee")
        result = opt.statsLinks(response);
      }
      // if (arg1 === '--stats' && arg2 !== undefined) {//partenew
      //   result = 'The option does not exist';
      // }
      if (arg1 === '--validate' && arg2 === undefined) {
        response.forEach((element) => {
          if (element.statusText !== 'OK') {
            result += `\n${element.path} \n${element.href} \n${element.status} \n${element.statusText} \n${element.text} ✘`;
          } else {
            result += `\n${element.path} \n${element.href} \n${element.status} \n${element.statusText} \n${element.text} ✔`;
          }
        });
      }
      if (arg1 === undefined && arg2 === undefined) {
        // console.log("sinvalidate")
        response.forEach((element) => {

          result += `\n${element.path}\n${element.href}\n${element.text}\n`;
        });
      }
      if (arg1 !== '--stats' && arg1 !== '--validate' && arg1 !== undefined) {
        result = 'The option does not exist';
      }
      // if (arg1 !== undefined && arg1 !== undefined && arg1 !== undefined) {
      //   result = 'something go wrong try again';
      // }
      return result;
    })
    .catch(() => 'Invalid path');
};
const [,,route,arg1,arg2] = process.argv;
cli(route,arg1,arg2)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// // module.exports.cli = cli;
module.exports = { cli }; 