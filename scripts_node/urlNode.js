var http = require( 'http' );
var url = require( 'url' );

http.createServer( function( request, response ) {
	console.log( request.url );

	//Recoger parametros --> guarda un JSON con la petición
	var parametros = url.parse( request.url, true ).query;  /*Parse formatea en modo JSON los parámetros que se envían a la url por get para poder reutilizarlos*/
	console.log( parametros );
	response.writeHead( 200, {'Content-Type': 'text/html'});
	response.write('<h1>Titulo</h1>');
	response.write( 'Ya se manipular peticiones al servidor' );
	response.end( request.url );
}).listen( 8080 );