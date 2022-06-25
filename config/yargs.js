const argv = require('yargs')
.option (
    'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de tabla de multiplicar'
    }
)
.option (
    'h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Número de factores'
    }
)
.option (
    'l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra o no la tabla'
    }
)
.check ((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.h)) {
        throw 'La base y el hasta tienen que se un número'
    }
    return true;
})
.argv;


module.exports = argv;