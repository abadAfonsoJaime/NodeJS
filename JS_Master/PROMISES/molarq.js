/* ++++++++++++ FUNCIONES DE LA PROMESA  ++++++++++++ */
function validar(){
    if ( !validaNombre() ||
    	!comprobarClave() )/*!comprobarElSelect() || !comprobarFecha() ||
    	!comprobarCheckbox()  && confirm("Pulsa aceptar si deseas enviar el formulario")*/
    {
        console.log( "alguna funcion falla" );
        /*event.preventDefault();*/
        window.location.assign( "#" );
		return false;
    }
    else 
	{
        console.log( "todas las validaciones OK" );
        return true;
    }
}

function escribirLocalStorage( nombeObjeto, elObjeto )
{
	if ( typeof localStorage != "undefined" && JSON )
	{
		localStorage.setItem( nombreObjeto, elObjeto );
		console.log( "almacenado en Local Storage" );
	}
	else
	{
		alert( "localStorage no soportado por este navegador" );
	}
}


function addUser()
{
	var miPromesa = new Promise( function( resolve, reject )
	{
		if ( validar() )
		{
			resolve();
		}
		else
		{
			reject();
		}
	});	//Cierro condición discriminatoria
	return miPromesa;
}	//Cierro función prometedora

function resolve()
{
	var name = document.getElementById( "username" ).value;
	var email = document.getElementById( "usermail" ).value;
	var birthDate = document.getElementById( "userbdate" ).value;
	var userName = document.getElementById( "usernick" ).value;
	var userPassword = document.getElementById( "userpass2" ).value;
	var occupation = document.getElementById( "occupation" ).value;

	var idUsuarioAlmacenado = localStorage.length + 1;	// .length devuelve un string! => CONCATENACION

	var normalUserJSON =
	{
		"name" : name,
		"email" : email,
		"birthDate" : birthDate,
		"userName" : userName,
		"userPassword" : userPassword,
		"occupation" : userName
	}

	var almacenar = JSON.stringify( normalUserJSON );
	console.log( almacenar );

	escribirLocalStorage( idUsuarioAlmacenado, almacenar );
} //Cierro la función del if

function reject()
{
	console.log( "ERROR: no se ha podido registrar al usuario" );
} //Cierro la función del else


//Explotamos la promesa
document.getElementById("submit1").addEventListener('click', addUser , false);
