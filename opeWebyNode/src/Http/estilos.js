import http from 'http';
import fs from 'fs';
import path from 'path';

const file = './src/Http/index.html';
const server = http.createServer( (request, response) => {
    // Los ficheros no están en el raíz sino dentro del directorio /src/
    let filePath = request.url;
    if (filePath === '/') { // NETWORK > HEADERS > Request URL: http://localhost:8000/
        filePath = 'index.html';
    }
    filePath = `./src/${filePath}`;

    // Las cabeceras que indican al navegador el tipo de fichero son distintas para HTML y CSS
    const extname = path.extname(filePath);
    let contentType;
    switch (extname){
        case '.css':
            contentType = 'text/css';
            break;
        case '.html':
            contentType = 'text/html';
            break;
    }

    response.writeHead(200, {'Content-Type' : `${contentType}; charset=UTF-8`});

    fs.readFile(filePath, (err, content) => {
        if (err) {
            return console.log(err);
        }
        response.write(content);
        response.end();
    });
});

server.listen(8000, 'localhost', err => {
    if (err) {
        return console.log('Error: ', err);
    }
    console.log('Server abierto en http://localhost:8000')
});