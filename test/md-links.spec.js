const  mdLink = require ('../mdLinks.js');
// console.log ("import", mdLink );

const outputTrue = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'C:\Users\HP\Desktop\laboratoria\EJERCICIOS\md-links\samplesFiles\directory1\file2.md ',
    status: 200,
    statusText: 'OK'
    },
    {
    href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
    text: 'Funciones — bloques de código reutilizables - MDN', 
    path: 'C:\Users\HP\Desktop\laboratoria\EJERCICIOS\md-links\samplesFiles\directory1\file2.md',
    status: 'ERROR',
    statusText: 'FAIL'
  },
 
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    path: 'C:UsersHPDesktoplaboratoriaEJERCICIOSmd-linkssamplesFilesdirectory1♀ile2.md',
    status: 404,
    statusText: 'FAIL'
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: 'C:\Users\HP\Desktop\laboratoria\EJERCICIOS\md-links\samplesFiles\file1.md ',
    status: 200,
    statusText: 'OK'
  },
  {
    href: "https://es.wikipedia.org/wiki/Markdown",
    path: "C:\\Users\\HP\\Desktop\\laboratoria\\EJERCICIOS\\md-links\\samplesFiles\\directory1\\file2.md",
    text: "Markdown"
        }
];

const outputFalse = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'C:\\Users\\HP\\Desktop\\laboratoria\\EJERCICIOS\\md-links\\samplesFiles\\directory1\\file2.md'
  },
  {
    href: 'https://esnodejs.org/',
    text: 'Node.js',
    path: 'C:\Users\HP\Desktop\laboratoria\EJERCICIOS\md-links\samplesFiles\directory1\file2.md'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    path: 'C:\\Users\\HP\\Desktop\\laboratoria\\EJERCICIOS\\md-links\\samplesFiles\\file1.md'
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: 'C:\\Users\\HP\\Desktop\\laboratoria\\EJERCICIOS\\md-links\\samplesFiles\\file1.md'
  }
];

describe('Funcion validar los Link encontrados en Archivo md', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof mdLink.mdLinks).toBe('function');
  });

  it.only('Deberia retornar un array de obj sin validar los enlaces', () => expect(mdLink.mdLinks('./samplesFiles')).resolves.toEqual(outputFalse));

  it('Deberia validar los enlaces', (done) => mdLink.mdLinks('./samplesFiles', { validate: true })
    .then((response) => {
      expect(response).toEqual(outputTrue);
      done();
    }));
  it('Deberia no validar los enlaces', (done) => mdLink.mdLinks('./samplesFiles', { validate: false })
    .then((response) => {
      expect(response).toEqual(outputFalse);
      done();
    }));
});