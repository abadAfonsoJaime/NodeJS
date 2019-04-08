'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mocks = require('../mocks');

var _mocks2 = _interopRequireDefault(_mocks);

var _middlewares = require('../middlewares');

var _webSocket = require('../webSocket');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', (req, res, next) => {

    (0, _webSocket.send)(req.method, req.baseUrl, _mocks2.default);

    return res.status(200).json(_mocks2.default);
}).post('/', _middlewares.auth, (req, res, next) => {
    console.log('Body received', req.body);
    res.status(201).json(req.body);
});

router.get('/:singer', (req, res, next) => {
    const songsBySinger = _mocks2.default.filter(item => item.singer.toLowerCase() === req.params.singer.toLowerCase());

    (0, _webSocket.send)(req.method, req.baseUrl, songsBySinger);

    res.status(200).json(songsBySinger);
});
// se definen los datos en el directorio raiz mediante el fichero mocks.js

exports.default = router;