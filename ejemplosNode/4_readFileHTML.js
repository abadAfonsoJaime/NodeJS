/*Node utiliza módulos o librerías (objetos con funciones y métodos)*/

//Módulos
const moduloHTTP = require( 'http' );//Módulo http
const moduloFileSystem = require( 'fs' );//Módulo fs


const mensaje = "Hola Mundo! \nQué fácil es incluir 'comillas simples' y \"comillas dobles\"";


moduloHTTP.createServer( ( request, response ) => {

	moduloFileSystem.readFile( './fileSystemNode.html', function( error, datos ) {//la ruta ./ significa al mismo nivel y se podría omitir
		//Tiempo real: while read --> write
		response.writeHead( 200, {'Content-Type': 'text/html'});
		response.write('<h1>Escribiendo datos del fichero HTML (Escrito en el JS)</h1>');
		response.write( `<h2>${mensaje} (Escrito en el JS)</h2>`);
		response.write( datos );//Representa el archivo que lee en la ruta
		response.end();
	}); //Cierro la función CALLBACK

}).listen( 8080 ); //Cierro la función de LÓGICA DEL SERVIDOR

console.log(`server is listening on 8080 port`)