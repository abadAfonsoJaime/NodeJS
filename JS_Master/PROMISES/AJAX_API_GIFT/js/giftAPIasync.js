
$(document).ready( function() {

	//Cuando el usuario haga click en el boton...
	$("#botonAJAX").click( function() {

		var promises = [];

		for( var i = 0; i < 5; i++)
		{
			//...pedir por AJAX a la URL xxx el JSON que me devolverá
			
			console.log("petición git" + i);//cierro $.ajax(
			$.ajax({
				data: {api_key: "dc6zaTOxFJmzC" },
				method: "get",
				url: "http://api.giphy.com/v1/gifs/random",
				dataType: "json",
				
			})
			.done( function( respuesta ) {
				
				var campoImagen = respuesta.data.image_original_url;
				console.log(respuesta);
				var myQuerySelector = "#gif" + i;
				console.log(myQuerySelector);
				$(myQuerySelector).attr( "src", campoImagen);
			})//Cierro el done
		}

	});//Cierro el click

});//Cierro el ready
		
		

/* ++++++++++++++++ CDN ++++++++++++++++ */
/*<script 
	src="https://code.jquery.com/jquery-3.2.1.min.js" 
	integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" 
	crossorigin="anonymous">
</script>*/




/*

var boton = document.getElementById("botonAJAX");

boton.addEventListener('click',pedirGif,false);

    function pedirGif() {

    }*/