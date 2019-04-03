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

// view engine
app.set( 'views', path.join(__dirname, '../views') ) //  src/views/
app.set('view engine', 'pug');
// app.engine('pug', require('pug').__express)


// 1. Generar las Rutas /
app.get('/', (req, res) => {
    res.render(
        '../views/landing-page',
        {
            title: 'OpenWebinars',
            message: 'Curso de NodeJS - Home'
        }
    );
    res.end();
});

app.get('/temario', (req, res) => {
    res.render(
        '../views/temario',
        {
            title: 'OpenWebinars - NodeJS',
            message: 'Temario del curso de NodeJS'
        }
    );
    res.end();
});

// 2. Arrancar el servidor en el puerto 9000
app.listen('9000', () => {
    console.log('Servidor arrancado en http://localhost:9000');
});