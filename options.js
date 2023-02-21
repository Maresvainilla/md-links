// Funcion para ver stats y validacion de route
// const chalk = require('chalk');
// const chalk = await import('chalk');



const statValidateLinks = (input) => {
  const total = input.length;
  const unique = new Set(input.map((link) => link.href)).size;
  const broken = input.filter((link) => link.statusText === 'FAIL').length;
  const result = `\nTotal: ${total} \nUnique: ${unique} \nBroken: ${broken}`;
  return result;
};

// Funcion para ver las stadisticas de la libreria
const statsLinks = (input) => {
  const total = input.length;
  const unique = new Set(input.map((link) => link.href)).size;
  const result = `\nTotal: ${total} \nUnique: ${unique}`;
  return result;
};

// Obtiene objeto para funcion mdLink
const getObjValidate = (arg1, arg2) => {
  if ((arg1 === '--stats' && arg2 === '--validate') || (arg1 === '--validate' && arg2 === '--stats') || (arg1 === '--validate' && arg2 === undefined)) {
    return { validate: true };
  }
  return { validate: false };
};


module.exports = {
  statValidateLinks,
  statsLinks,
  getObjValidate,

};