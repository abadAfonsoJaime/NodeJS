'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.send = exports.connect = undefined;

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// npm i --save ws

let instance;

const connect = exports.connect = () => {
    const socket = new _ws2.default.Server({ port: 8080 });

    socket.on('connection', ws => {
        instance = ws;
        ws.send('Conectado al puto socket');
    });
};

const send = exports.send = (method, url, data) => {
    if (instance) {
        instance.send(`${method} ${url} ${JSON.stringify(data)}`);
    }
};