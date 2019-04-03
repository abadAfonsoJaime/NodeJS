import http from 'http';

const server = http.createServer( (request, response) => {
    if (request.method === 'GET'){
        response.write('<h1>Método no permitido');
        return response.end();
    }
    response.write('<h1> Servidor de Node</h1>');
    return response.end();
});

server.listen(8000, 'localhost', err => {
    if (err) {
        return console.log('Error: ', err);
    }
    console.log('Server abierto en http://localhost:8000')
});