import http from 'http';

const server = http.createServer( (request, response) => {
    // response.writeHead( 200, {'Content-Type' : 'text/html; charset=UTF-8'});
    // otrs forma
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 301; // Path redirected
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

/*
 *  Si quisieramos devolver una imagen, el content-type sería del tipo
 * mime-type de la extensión de la imagen
 */