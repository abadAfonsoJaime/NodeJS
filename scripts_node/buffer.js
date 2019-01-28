//Crear un Buffer de datos
// Buffer de 20 octetos sin inicializar octeto = Byte = 8 bits
var miBuffer = new Buffer( 64 );

miBuffer.write( "Para mañana"  );
var espacioNecesario = ( miBuffer.toString( 'utf-8', 0, miBuffer.length ) );//Escribe los 8 primeros Bytes

//Sacar los datos del buffer en formato JSON
var miJSON = miBuffer.toJSON();
console.log( miJSON );

//Concatenar con otro buffer
var mi_buffer2 = new Buffer( 64 );
mi_buffer2.write( "Para cuando la pizza? " );
var bufferConcatenado = Buffer.concat( [miBuffer, mi_buffer2] );
console.log( bufferConcatenado.toString( 'utf-8'));

//Copiar un Buffer
var copiaBuffer = new Buffer( 32 );
mi_buffer2.copy( copiaBuffer );
console.log( copiaBuffer.toString( 'utf-8' ));

//Comparar
var comparacion = miBuffer.compare( mi_buffer2 );
console.log( comparacion );

//escribir en el buffer varias veces
var otroBuffer = new Buffer( 'vamos ostia' )

