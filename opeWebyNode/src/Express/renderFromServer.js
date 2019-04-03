import path from 'path'; // propia de NodeJS
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// cargar una instancia dentro de una variable
const app = express();

app.disable('x-powered-by');
app.set('env', 'development');
//process.env

// morgan es un middleware!
app.use( logger('combined') );
// body-parser tiene más funcionlidades a parte de la de middleware
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended : false}) );

app.set( 'views', path.join(__dirname, '../views') ) //  src/views/
app.set('view engine', 'pug');

// 1. Generar las Rutas /
app.get('/', (req, res) => {
    res.write(`
        <h1> Curso NodeJS </h1>
        <a href="/temario">TEMARIO</a>
    `);
    res.end();
});

app.get('/temario', (req, res) => {
    res.write(`
        <h1> Temario del Curso NodeJS </h1>
        <a href="/">Volver</a>
    `);
    res.end();
});

/** MAGIC PARAMS --> siempre al final
 * Al escribir rutas parametrizables debemos ponerlas al final para que express pueda acceder a las demás sin confusión 
 */
// http://localhost:9000/pepito
app.get('/:user', (req, res) => {
    console.log('variable user', req.params.user);
    res.render(
        'user',
        {
            title: 'OpenWebinars - USER',
            message: `Bienvenido usuario ${req.params.user}`
        }
    );
})

/* NO ENTIENDO COMO HA ALMACENADO LOS FICHEROS ESTÁTICOS PERO SOLO FALTARÍA ESTA LÍNEA*/
app.use(
    '/static',
    express.static( path.join(__dirname, 'public') )
);

// 2. Arrancar el servidor en el puerto 9000
app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000');
});