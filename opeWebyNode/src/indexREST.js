import express from 'express';

import config from 'API_REST/config';

let _server;

const server = {
    start() {
        const app = express();
        // le pasamos la instancia del servidor a la función del fichero ./config
        config(app);

        // RUTAS
        app.get('/', (req, res, next) => {
            res
                .status(200)
                .json( {data : 'método get'} );
        });

        app.post('/', (req, res, next) => {
            res
                .status(201)
                .json( {data : 'método post'} );
        });

        app.put('/', (req, res, next) => {
            res
                .status(201)
                .json( {data : 'método put'} );
        });

        app.delete('/', (req, res, next) => {
            res
                .status(200)
                .json( {data : 'método delete'} );
        });



        _server = app.listen('9000', () => {
            if (process.env.NODE_ENV !== 'test') {
                console.log('Servidor abierto y escuchando en http://localhost:9000');
            }           
        })
    },
    close() {
        _server.close();
    }
}

export default server

if ( !module.parent ) {
    server.start();
}