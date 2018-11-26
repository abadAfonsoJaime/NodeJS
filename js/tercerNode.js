//Llamada a la biblioteca Node.js http para la creación de un Servidor Web
var moduloHttp = require( 'http' );

//Mensaje a enviar al visitante de la página
var mensajeParaVisitante = function( peticion, respuesta ) {
	respuesta.writeHead( 200, {"Content-Type": "text/html"} );

	//Preparación del script HTML para enviar al navegador
	respuesta.write( "<!DOCTYPE html" +
		"<html>" + 
		"	<head>" +
		"		<meta charset='UTF-8' />" +
		"		<meta name='viewport' content='width-device-width, initial-scale=1.0' />" + 
		"		<meta http-equiv='X-UA-Compatible' content='ie=edge'/>" +
				"<title>Hello World (tercerNode.js)</title>" +
			"</head>" +
			"<body" +
				"<font face=Arial>Hello <b>World</b>(Documento válido)</font>" +
			"</body>" +
		"</html>");

	//Mensaje enviado al usuario
	resultado.write( "<h1>Hola Mundo! \nQué fácil es incluir 'comillas simples' y \"comillas dobles\"</h1>" );
	respuesta.end( "Ok" );//es un resuesta.write para la última línea
}

//Instanciación del servidor
var servidor = moduloHttp.createServer( mensajeParaVisitante );
//Arranque del servidor en el puerto
servidor.listen( 8080 );