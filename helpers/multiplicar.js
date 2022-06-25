const writeFile = require('fs');

const crearArchivo = async (raiz = 5, listar = false, hasta) => {
        try {
            //const tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
            let salida = "";
        
            for (let index = 1; index <= hasta; index++) {
                salida += raiz + " * " + index + " = " + raiz * index + "\n";
            }
        
            if (listar)
                {console.log(salida)};
        
            writeFile.writeFileSync(`tabla-${raiz}.txt`, salida, (err) => {
                !err ? console.log('ok'): console.log(err);
            });
    
            return(`tabla-${raiz}.txt`);
        } catch (error) {
            throw error
        }
};


module.exports = {
    crearArchivo
}
