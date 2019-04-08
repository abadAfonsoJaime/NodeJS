'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _me = require('./rutasRest/me');

var _me2 = _interopRequireDefault(_me);

var _music = require('./rutasRest/music');

var _music2 = _interopRequireDefault(_music);

var _auth = require('./rutasRest/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Agrupamos por recursos
exports.default = app => {
    app.use('/auth', _auth2.default);
    app.use('/me', _me2.default); // Para la ruta me utiliza las rutas del archivo user
    app.use('/music', _music2.default); // Para la ruta /music utiliza las rutas del archivo 
};