<?php
	//Definición del header
	header( "Content-Type: application/json" );

	//Definición de la consulta SQL a enviar a la base de datos MySQL
	$consulta_sql = "SELECT
	car_code, car_name, max_speed
	FROM cars ORDER BY car_code";

	//Argumentos SGBD MySQL
	$mysql_server = "localhost";
	$mysql_user = "";
	$mysql_password = "";

	//Comprobación de la conexión
	if ( ( $conn = @mysql_connect( $mysql_server, $mysql_user, $mysql_password ) ) === FALSE )
	{
		//Mensaje de error enviado al cliente
		echo "Se sienteee!";
	}
	else {
		if ( ( @mysql_select_db( $db, $conn ) ) === FALSE ) {
			echo "Manris";
		}
		else {
			//Envio de la consulta SQL al motor de SQL de MySQL
			$resultado_sql = @mysql_query( $consulta_sql, $conn );

			//Comprobación del número de registros seleccionados
			if ( @mysql_num_rows( $resultado_sql ) < 1 ) {
				echo "No hay registros";
			}
			else {
				while ( $register = mysql_fetch_assoc( $resultado_sql) ) {
					//Inserción de los 3 campos del registro actual en la tabla //registros (que contendrá al final todos los datos)
					$registros[] = $register;
				}
				//Descodificación en formato JSON de la tabla $registros
				$datos_json = json_encode( $registros );

				//Envio del resultado al cliente
				echo $datos_json;
			}
		}
	}	

?>