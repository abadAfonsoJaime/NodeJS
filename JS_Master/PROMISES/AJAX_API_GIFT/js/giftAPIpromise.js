
$(document).ready( function() {

	console.log("Promesas");
	const myDiv = document.querySelector(".container");

	function giftValid( image ) {
		
		$(myDiv).append(
			`<img src="${image}"
			alt="media/error.png">`
		);
	} 

	function apiRestError( serviceError ) {

		$(myDiv).append(
			`<p>${serviceError[1]} - ${serviceError[2]}</p>`
		);
	}

	function giftPromise( response ) {

		let promesa = new Promise (
			function ( giftValid, apiRestError ) {

				if (response.meta.status == 200) {
					
					let gifImage = response.data.image_original_url;
					giftValid( gifImage );
				}
				else {
					
					let error = [
						response.meta.status,
						response.meta.msg
					];
					apiRestError( error );
				}
			}
		);
		return promesa;
	}
	//Cuando el usuario haga click en el boton...
	$("#botonAJAX").click( function() {

		for( var i = 0; i < 5; i++) {
			//...pedir por AJAX a la URL xxx el JSON que me devolverá
			
			console.log("petición git" + i);//cierro $.ajax(
			$.ajax({
				data: {api_key: "dc6zaTOxFJmzC" },
				method: "get",
				url: "http://api.giphy.com/v1/gifs/random",
				dataType: "json"
				
			})
			.done( ( respuesta ) => {
				
				giftPromise( respuesta )
					.then( giftValid )
					.catch( apiRestError );
			})//Cierro el done
		}

	});//Cierro el click

});//Cierro el ready