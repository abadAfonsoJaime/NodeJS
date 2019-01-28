function ajaxJSON(){

	var resultado = document.getElementById( "capaResultado" );
	httpRequest = new XMLHttpRequest();
	/******** Apertura del archivo.json ********/
	/******** true: modo asíncrono -> el flujo debe estar disponible completamente antes de su procesamiento ********/
	httpRequest.open( "GET", "./coches.json", true ); 
	//true: flujo diponible anbtes de ser tratado por la aplicación cliente
	//GET: la aplicación cliente no envía el argumento
	/******** Definición del tipo de flujo ********/
	httpRequest.setRequestHeader( "Content-Type", "application/json" );

	/******** Procesamiento realizado tan pronto como el flujo esté disponible ********/
	httpRequest.onreadystatechange = proccess()
	}

function proccess() {
	/******** Comprobación de si la consulta ha terminado y comprobación del estado OK ********/
	if ( httpRequest.readyState == 4 && httpRequest.status == 200 ) {
		/******** Conversión del flujo JSON en objeto JavaScript ********/
		var datosJSON = JSON.parse( httpRequest.responseText );
		console.log("hola");
		resultado.innerHTML = "";
		//Recorrido de los objetos JavaScript
		for ( var obj in datosJSON )
		{
			console.log("hola-hola");
			resultado.innerHTML += datosJSON[obj].name + " -> " + datosJSON[obj].max_speed + " km/h <hr/>";
		}
	}
	/******** Sin envío de datos a través de la consulta XMLHttpRequest ********/
	httpRequest.send( null );

	/******** Mensaje mostrado mientras se espera el procesamiento del archivo coches.json ********/
	/*results.innerHTML = "Espere el procesamiento JSON..."; */
console.log( "responseText: " + httpRequest.responseText );
}

ajaxJSON();