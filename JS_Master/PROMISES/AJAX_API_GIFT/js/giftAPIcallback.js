$(document).ready( function() {
	console.log("Hello World");

	function appendGiftToHtml( response, callback ) {
		
		const myDiv = document.querySelector(".container");	
		if (response.meta.status == 200) {

			callback;
			$(myDiv).append(
				`<img src="${response.data.image_original_url}"
				alt="media/error.png">`
			);
		}
		else {
			callback;
			$(myDiv).append(
				`<p>${response.meta.status} - ${response.meta.msg}</p>`
			);
						
		}
	}

	function callbackGiffy( response ) {

		if ( response.meta.status == 200 ) {
			console.log(`OK ${response.data.image_original_url}`);
			return response.data.image_original_url;
		} 
		else { 
			console.log(`${response.meta.status} - ${response.meta.msg}`);
			return response.meta;
		}
	}
	
	$("#botonAJAX").click( function() {
		console.log("Click");
		for ( var i = 0; i < 5; i++ ) {
			console.log(`petición git ${i}`);
			$.ajax({
				data: {api_key: "dc6zaTOxFJmzC"},
				method: "get",
				url: "http://api.giphy.com/v1/gifs/random",
				dataType: "json"
			})
			.done( function (respuesta) {
				appendGiftToHtml(
					respuesta,
					callbackGiffy(respuesta)
				)
			});
		}	
	});//Cierro el click
	

	

});//Cierro el ready
		
