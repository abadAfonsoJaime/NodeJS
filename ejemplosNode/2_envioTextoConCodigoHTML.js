
//Llamada a la biblioteca Node js http para la creación de un servidor Web
const moduloHttp = require( "http" );

//Mensaje a enviar al usuario de la página
const control = ( peticion, respuesta ) => {

	respuesta.writeHead( 200, {"Content-Type": "text/html"
		/*"charset": "UTF-8", name": "viewport", "content": "width-device-width, initial-scale=1.0", "http-equiv": "X-UA-Compatible", "content": "ie=edge"*/} );//Código 200 (toda va bien) en el encabezado de la page
	respuesta.write( "<h1>Hola Mundo! \nQué fácil es incluir 'comillas simples' y \"comillas dobles\"</h1>" );
	respuesta.end( `
		<font face = 'Arial'>Mi primer servidor <b>Node<b/></font>
		` );
}

//Instanciación del servidor
const servidor = moduloHttp.createServer();

/*Llamamos a la función 'control' cuando el servidor reciba una petición:*/ 
servidor.on( 'request', control );
//Arranque del servidor en el puerto 8080
servidor.listen( 8080 );

console.log( "servidor funcionando" );
