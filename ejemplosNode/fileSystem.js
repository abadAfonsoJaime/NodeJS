//Módulos
const moduloHTTP = require( 'http' );//Módulo http
var moduloURL = require( 'url' );//Módulo url
var moduloFileSystem = require( 'fs' );//Módulo fs


moduloHTTP.createServer( ( request, response ) => {

	moduloFileSystem.readFile( '../form.html', function( error, datos ) {
		//Tiempo real: while read --> write
		response.writeHead( 200, {'Content-Type': 'text/html'});
		response.write( datos );//Representa el archivo que lee en la ruta
		response.end();
	}); //Cierro la función CALLBACK

}).listen( 8080 ); //Cierro la función de LÓGICA DEL SERVIDOR

console.log( "servidor funcionando" );

