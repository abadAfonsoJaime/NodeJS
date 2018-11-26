// Modulo para manejar eventos

var events = require('events');

//Objetos emisor de eventos

var emisor_eventos = new events.EventEmitter();

//Funcion manejadora del evento

var alarma_horno = function(){
	
	console.log('Ya huele a pizza!!!');
}

//Asignar mi manejador de eventos
//Dar una accion
emisor_eventos.on('pizza_lista',alarma_horno);

//Lanzar el evento
emisor_eventos.emit('pizza_lista');
