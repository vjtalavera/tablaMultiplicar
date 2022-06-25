/**
 * Página principal del proyecto
 */

const {crearArchivo} = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear();

console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base, argv.listar);

//const raiz = 4;

crearArchivo(argv.b, argv.l, argv.h)
.then((result) => console.log(result, 'creado'))
.catch((err) => console.log(err));
