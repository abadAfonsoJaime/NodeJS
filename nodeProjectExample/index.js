/*Node utiliza módulos o librerías (objetos con funciones y métodos)*/
const moduloHttp = require('http')
/*http: módulo, objeto, librería o paquete importado con una serie de métodos (listen, end) y atributos (url)*/

const requestHandler = ( peticion, respuesta ) => {
  respuesta.writeHead( 200, {'content-type': 'text-plain'});
  respuesta.write( 'Hello Node.js Server!' );
  console.log( peticion.url )//atributo url del objeto http: consolea--> /
  respuesta.end();
}
/*Con el objeto de respuesta (parametro), nos podremos comunicar con el client y, lo primero que haremos, será mandar la cabecera HTTP con una confirmación correcta (200) y con el tipo de contenido que vamos a mandar*/

//Instanciación del servidor
const servidor = moduloHttp.createServer( requestHandler )

//Arranque del servidor
const puerto = 4000

servidor.listen( puerto, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${puerto}`)
});