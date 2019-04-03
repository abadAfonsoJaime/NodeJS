import path from 'path'; // propia de NodeJS
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Importamos el router
import router from './router';

// cargar una instancia dentro de una variable
const app = express();

app.disable('x-powered-by');
app.set('env', 'development');
//process.env

// morgan es un middleware!
app.use( logger('tiny') );
// body-parser tiene más funcionlidades a parte de la de middleware
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended : false}) );

// view engine
app.set( 'views', path.join(__dirname, './views') ) //  src/views/
app.set('view engine', 'pug');
// app.engine('pug', require('pug').__express)


/**
 * Ejecutamos el Router enviando la instancia de app de nuestro servidor
 * para que así asocie todas las rutas a nuestro propio servidor
 */

// 1. Rutas --> en lugar de importar todos los ficheros y ejecutarlos:
router(app);

/* STATIC FILES */
app.use(
    '/static',
    express.static( path.join(__dirname, 'public') )
);

/* Errores Middleware */
app.use( (req, res, next) => {
    // una vez terminadas las operaciones del middeware next()
    res.render(
        '404',
        {
            title: 'oh no! - Error',
            message: 'La ruta que está intentando acceder no existe!'
        }
    );
    // si no hay ningún error que vaya a la ruta siguiente 
    next(err);
    // next()
})


// 2. Arrancar el servidor en el puerto 9000
app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000');
});