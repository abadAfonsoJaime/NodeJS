

//Llamada a la biblioteca Node js http para la creación de un servidor Web
var moduloHttp = require( "http" );

//Mensaje a enviar al usuario de la página
var mensajeParaVisitante = function( peticion, resultado ) {

	resultado.writeHead( 200 );//Código 200 (toda va bien) en el encabezado de la page
	resultado.write( "<h1>Hola Mundo! \nQué fácil es incluir 'comillas simples' y \"comillas dobles\"</h1>" );
	resultado.end( `
		Mi primer servidor Node
		` );
}

//Instanciación del servidor
var servidor = moduloHttp.createServer( mensajeParaVisitante );
//Arranque del servidor en el puerto 8080
servidor.listen( 8080 );

console.log( "servidor funcionando" );