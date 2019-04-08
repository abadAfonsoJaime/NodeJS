import express from 'express';

import config from './config';
import router from './routerRest';

import { connect } from './webSocket';

let _server;

const server = {
    start() {
        
        const app = express();
        // le pasamos la instancia del servidor a la función del fichero ./config
        config(app);
        // RUTAS
        router(app);
        
        _server = app.listen('9000', () => {
            connect();

            const address = _server.address();
            const host = address.address === '::'
                ? 'localhost'
                : address;
            const port = app.locals.config.PORT;

            if (process.env.NODE_ENV !== 'test') {
                console.log(`Servidor abierto y escuchando en http://${host}:${port}`);
            }           
        });

        return _server;
    },
    close() {
        _server.close();
    }
}

export default server

if ( !module.parent ) {
    server.start();
}