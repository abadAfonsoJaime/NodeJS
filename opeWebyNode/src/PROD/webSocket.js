import WebSocket from 'ws';
// npm i --save ws

let instance;

export const connect = () => {
    const socket =new WebSocket.Server( {port:8080} );

    socket.on('connection', ws => {
        instance = ws;
        ws.send('Conectado al puto socket');
    });
}

export const send = (method, url, data) => {
    if (instance) {
        instance.send(`${method} ${url} ${JSON.stringify(data)}`)
    }
}