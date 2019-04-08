'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routerRest = require('./routerRest');

var _routerRest2 = _interopRequireDefault(_routerRest);

var _webSocket = require('./webSocket');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _server;

const server = {
    start() {

        const app = (0, _express2.default)();
        // le pasamos la instancia del servidor a la función del fichero ./config
        (0, _config2.default)(app);
        // RUTAS
        (0, _routerRest2.default)(app);

        _server = app.listen('9000', () => {
            (0, _webSocket.connect)();

            const address = _server.address();
            const host = address.address === '::' ? 'localhost' : address;
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
};

exports.default = server;


if (!module.parent) {
    server.start();
}