import bodyParser from 'body-parser';
import logger from 'morgan'; // logger
import cors from 'cors';

import { config } from 'dotenv';
const SETTINGS = config();
console.log('SETTINGS', SETTINGS);

// función de configuración que recibe la instancia del servidor
export default app =>  {
    app.disable('x-powered-by'); // Ocultamos al client no sabrá que la API REST está montada con Express
    // app.set('env', process.env.NODE_ENV);  Seteamos el entorno de desarrollo
    
    
    // el entorno lo define el fichero de configuración:
    app.set('environment', SETTINGS.parsed.ENV);
    app.set('config', SETTINGS.parsed); // guarda todos los datos que está en SETTINGS
    app.locals.env = app.get('environment');
    app.locals.config = app.get('config');
    console.log('config', app.locals.config);

    if (process.env.NODE_ENV !== 'test') { // habilitamos el logger excepto para los tests
        app.use( logger('combined') );
    }

    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded({extended : false}) );

    app.use( cors() );
}