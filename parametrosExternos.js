const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

//const raiz = 4;

const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');

crearArchivo(base)
.then((result) => console.log(result, 'creado'))
.catch((err) => console.log(err));
