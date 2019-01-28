<?php
	//Recuperación del argumento pasado por la aplicación cliente
	$codigo = $_POST("codigo");

	//Definición de la consulta a enviar a la base de datos MySQL
	$sql_query = "SELECT car_code, car_name, max_speed FROM cars WHERE car_code='$codigo';";
?>