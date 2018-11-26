const moduloHTTP = require( 'http' );
const moduloURL = require( 'url' );

const controlHandler = ( peticion, respuesta ) => {
	
	//Determinación de la URL solicitada
	const page = moduloURL.parse( peticion.url ).pathname;
	
	/*Envío del código 200 (todo OK) en el encabezado de la página con el tipo MIME text/html para indicar un envío de código HTML al navegador*/
	respuesta.writeHead( 200, {'content-type': 'text/html'} );

	/*Preparación del script para enviar al navegador*/
	respuesta.write( '<font face="Arial">' );
	
	switch(page) {

		case '/':
		respuesta.write( "Se encuentra en la página principal" );
		respuesta.write( "<br/> Incluya /profile o /events o /sites en su URL" );
		break;

		case '/profile':
		respuesta.write( "Esta es su cuenta de perfil");
		break;

		case '/events':
		respuesta.write( 'Aquí podrá encontrar todos los eventos disponibles');
		break;

		case '/sites':
		respuesta.write( 'Aquí se listan todos los yacimientos registrados en Molarq');
	}
	
	/*if ( page == '/')
	{
		respuesta.write( "Se encuentra en la página principal" );
		respuesta.write( "<br/> Incluya /profile o /events o /sites en su URL" );
	}
	else
	{
		if ( page == '/profile' )
		{
			respuesta.write( "Esta es su cuenta de perfil");
		}
		else
		{
			if ( page == '/events' )
			{
				respuesta.write( 'Aquí podrá encontrar todos los eventos disponibles')
			}
			else
			{
				if ( page == '/sites' )
				{
					respuesta.write( 'Aquí se listan todos los yacimientos registrados en Molarq');
				}
			}
		}
	}*/
	respuesta.write( '</font>' );

	
};

//Instanciación del servidor
const servidor = moduloHTTP.createServer( controlHandler );
//Arranque del servidor
const puerto = 8080;

servidor.listen( puerto, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${puerto}`)
});