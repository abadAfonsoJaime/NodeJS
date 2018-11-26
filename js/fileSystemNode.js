/*Node utiliza módulos o librerías (objetos con funciones y métodos)*/

//Módulos
const moduloHTTP = require( 'http' );//Módulo http
var moduloURL = require( 'url' );//Módulo url
var moduloFileSystem = require( 'fs' );//Módulo fs


const mensaje = "Hola Mundo! \nQué fácil es incluir 'comillas simples' y \"comillas dobles\"";


moduloHTTP.createServer( ( request, response ) => {

	moduloFileSystem.readFile( '../fileSystemNode.html', function( error, datos ) {
		//Tiempo real: while read --> write
		response.writeHead( 200, {'Content-Type': 'text/html'});
		response.write('<h1>Escribiendo datos del fichero HTML</h1>');
		response.write( `<h2>${mensaje}</h2>`);
		response.write( datos );//Representa el archivo que lee en la ruta
		response.end();
	}); //Cierro la función CALLBACK

}).listen( 8080 ); //Cierro la función de LÓGICA DEL SERVIDOR