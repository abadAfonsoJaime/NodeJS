//Declarar el modulos.
var file = require("fs");
//Variable para guardar datos
var datos_guardados = ''; 

//Crear Stream de lectura.
var stream_lectura = file.createReadStream('../ejemploNode.html');

//Manejar los eventos del stream 
//Evento para cuando hay datos(datos para leer)
stream_lectura.on('data',function (caracter) {

		datos_guardados += caracter;
});

//Evento una vez ha terminado de leer
stream_lectura.on('end',function(){

	console.log(datos_guardados);
	console.log('+++Fin lectura de fichero+++');
});

//Manejar evento error
stream_lectura.on('error',function(err){

	console.log(err.stack);
});

console.log("***He terminado todo satisfactoriamente***");
