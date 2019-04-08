'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.post('/', (req, res, next) => {
    const payload = {
        email: req.params.email
    };
    const token = _jwtSimple2.default.encode(payload, req.app.locals.config.TOKEN);
    res.status(201).send({ token });
});

exports.default = router;

// POST --> http://localhost:9000/auth  --> email: correo@email.com
// obtenemos el token
// Añadimos en la petición la cabecera --> Authorization: "JWT churrazo"
// En Postman también va la cabecera Content-Type: application/x-www-form-urlencoded