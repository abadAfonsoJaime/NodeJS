
//Llamada a la biblioteca Node.js http para la creación de un servidor Web
var http = require( "http" );

//Mensaje a enviar al visitante de la página
var mensajeParaVisitante = function( peticion, respuesta ) {

/*Envío del código 200 en el encabezado de la páginca con el tipo MIME text/html para enviar un envío de código HTML al navegador*/
	respuesta.writeHead( 200, {"Content-Type": "text/html", "charset": "utf-8", "name": "viewport" "content": "width-device-width", "initial-scale=1.0", "http-equiv": "X-UA-Compatible", "content": "ie=edge"} );

	//Mensaje enviado al usuario
	respuesta.end( "<font face = 'Arial'>Hello <b>World<b/></font>" );
}

//Instanciación del servidor
var servidor = http.createServer( mensajeParaVisitante );
//Arranque del servidor en el puerto
servidor.listen( 8080 );