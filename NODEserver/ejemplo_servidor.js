//Usar modulo HTTP

var http = require('http');
http.createServer(function(req,res){

	console.log(req.url);
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write('<h1>TITULO</h1>');
	res.write('<p>'+req.url+'</p>');
	
	res.end('Mi primer servidor en Node, camino al FULLSTACK!');
}).listen(8080);

console.log("Servidor ejecutandose en http://localhost:8080");
