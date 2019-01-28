
var http = require( 'http' );
http.createServer( function ( peticion, respuesta ) {
	/*Envío del código 200 en el encabezado de la páginca con el tipo MIME text/html para enviar un envío de código HTML al navegador*/
	respuesta.writeHead( 200, {"Content-Type": "text/html"} );

	//mensaje enviado al usuario
	respuesta.end("<font face = 'Arial'>Hello <b>World<b/></font>")
}).listen( 8080 );

console.log( "servidor funcionando" );