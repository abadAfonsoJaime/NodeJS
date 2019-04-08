'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// logger
const SETTINGS = (0, _dotenv.config)();
console.log('SETTINGS', SETTINGS);

// función de configuración que recibe la instancia del servidor

exports.default = app => {
    app.disable('x-powered-by'); // Ocultamos al client no sabrá que la API REST está montada con Express
    // app.set('env', process.env.NODE_ENV);  Seteamos el entorno de desarrollo


    // el entorno lo define el fichero de configuración:
    app.set('environment', SETTINGS.parsed.ENV);
    app.set('config', SETTINGS.parsed); // guarda todos los datos que está en SETTINGS
    app.locals.env = app.get('environment');
    app.locals.config = app.get('config');
    console.log('config', app.locals.config);

    if (process.env.NODE_ENV !== 'test') {
        // habilitamos el logger excepto para los tests
        app.use((0, _morgan2.default)('combined'));
    }

    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: false }));

    app.use((0, _cors2.default)());
};