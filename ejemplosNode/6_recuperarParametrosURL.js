/*https://www.joezimjs.com/javascript/3-ways-to-parse-a-query-string-in-a-url/*/

/*Llamada a la biblioteca querystring para recuperar los parametros contenidos en la url solicitada*/

const moduloHTTP = require( 'http' );
const moduloURL = require( 'url' );
const moduloQuerystring = require( 'querystring' );

const controlHandler = ( peticion, respuesta ) => {

	const main = moduloURL.parse( peticion.url );
	//Recuperar los parametros de la url
	const params = querystring.parse( main ).query;

	respuesta.writeHead( 200, { 'content-tpe': 'text/html' } );

	//Comprobacion de la presencia de los parametros userName y Password en la url
	respuesta.write( '<font face="Arial">');
	if ( userName in params && Password in params )
	{
		respuesta.write( "Usuario " + params["userName"] + "<br/>Contraseña: " + params["Password"] );
	}
	else
	{
		respuesta.write( 'Debe introducir un usuario y contraseña' );
	}
	respuesta.write( '</font>' );

	//Mensaje enviado al usuario
	respuesta.end();
}


//Instanciación del servidor
const servidor = moduloHTTP.createServer( controlHandler )
//Arranque del servidor
const puerto = 8080;

servidor.listen( puerto, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${puerto}`)
});