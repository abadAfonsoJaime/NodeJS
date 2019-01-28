
$(document).ready( function() {

	//Cuando el usuario haga click en el boton...
	$("#botonAJAX").click( function() {

		for( var i = 0; i < 5; i++)
		{
			//...pedir por AJAX a la URL xxx el JSON que me devolverá
		$.ajax(
		{
			data: {api_key: "dc6zaTOxFJmzC" },
			method: "get",
			url: "http://api.giphy.com/v1/gifs/random",
			dataType: "json",
			
		})//cierro $.ajax(

		.done( function( respuesta ) {
			/*if ( console && console.log ) 
				{
					console.log( "La solicitud se ha completado correctamente." );
 	    		}*/
 		
			//Traducir el JSON stringificado
			
			/*var respuesta = JSON.parse( respuesta.data ); para poder acceder a los campos*/
			//Pintar por pantalla el gif
			var campoImagen = respuesta.data.image_original_url;
			console.log(respuesta);
			/*$(".container").html( campoImagen );*/
			$("#gif1").attr( "src", campoImagen);
		})//Cierro el done
		/*.fail(function( error ) {
     		if ( console && console.log ) 
     		{
         		console.log( "La solicitud a fallado: " +  textStatus);
     		}*/
	});//Cierro el click

});//Cierro el ready
		}

		

/* ++++++++++++++++ CDN ++++++++++++++++ */
/*<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>*/




/*

var boton = document.getElementById("botonAJAX");

boton.addEventListener('click',pedirGif,false);

    function pedirGif() {

    }*/