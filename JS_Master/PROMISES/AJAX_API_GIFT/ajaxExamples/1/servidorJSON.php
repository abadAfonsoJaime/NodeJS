<?php
	//Tipo de flujo
	header( "Content-Type: application/json" );

	//Lectura del archivo coches.json
	$datosJSON = file_get_contents( "coches.json" );

	//Envío del flujo JSON a la aplicación cliente
	echo $datosJSON;
?>