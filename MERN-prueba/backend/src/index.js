const app = require('./app.js');
require('./database.js');

async function main (){
    await app.listen(app.get('port'));
    console.log('Servidor escuchando en el puerto', app.get('port'));
}

main();