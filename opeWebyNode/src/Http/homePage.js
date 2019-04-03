import http from 'http';
import fs from 'fs';

const file = './src/Http/index.html';
const server = http.createServer( (request, response) => {
    
    response.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});

    fs.readFile(file, (err, content) => {
        if (err) {
            return console.log(err);
        }
        response.write(content);
        response.end();
    });
    /*
    response.writeHead(200, {'Content-Type' : 'application/json'});
    response.write( JSON.stringify({"key" : "value"}) );
    response.end();*/
});

server.listen(8000, 'localhost', err => {
    if (err) {
        return console.log('Error: ', err);
    }
    console.log('Server abierto en http://localhost:8000')
});