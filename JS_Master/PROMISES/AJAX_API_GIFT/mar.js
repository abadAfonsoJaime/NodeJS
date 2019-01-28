//---------------------------------------------
var request = { //Al hacer una llamada por Ajax, con un JSON (podríamos poner tambien dataType = "json";ESTO ES SOLO JSON
method: "GET",
url: "http://api.giphy.com/v1/gifs/random",
data: {
api_key: "dc6zaTOxFJmzC"
}
};
 
$.when(
$.ajax( request ),
$.ajax( request ),
$.ajax( request ),
$.ajax( request ),
$.ajax( request )
)
.done(function( response1, response2, response3, response4, response5 ) {
 
/* console.log(response1); */
var myGif = response1[0].data.image_original_url;
$("#gif1").attr( "src", myGif);
 
var myGif = response2[0].data.image_original_url;
$("#gif2").attr( "src", myGif);
var myGif = response3[0].data.image_original_url;
$("#gif3").attr( "src", myGif);
 
var myGif = response4[0].data.image_original_url;
$("#gif4").attr( "src", myGif);
 
var myGif = response5[0].data.image_original_url;
$("#gif5").attr( "src", myGif);
 
 
 
});
