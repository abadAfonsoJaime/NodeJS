var modulo = require( 'express' );
var app = modulo();

// Módulos a utilizar
var myMongo = require('mongodb');
// Cliente Mongo para interactuar con BBDD
var myMongoClient = myMongo.MongoClient;
//mongodb://<dbuser>:<dbpassword>@ds233238.mlab.com:33238/dbName
var url = 'mongodb://ElMonguer:JaimeDB@ds233238.mlab.com:33238/remote_db';

myMongoClient.connect(url, function(err, objectDB) {

  if (err) throw err;
  console.log("my DB works");

  //Representar la DB
  var dbo = objectDB.db("remote_db");


  	app.get( '/lista_usuarios', function( request, response ){
	
	/*Recuperar la petición en la consola*/
	console.log( "ID:-->" + request.query._id );
	console.log( "Nombre:-->" + request.query.nombre );
	console.log( "Nombre:-->" + request.query.nombre );
	/*Para que lo pinte en el navegador: árbol DOM*/
	response.write( "Nombre:-->" + request.query.nombre );
	response.end( "ID:-->" + request.query._id );
	console.log( "Petición GET para /lista" );

	//Introducir datos en la DDBB
	var usuarioX = { _id: request.query.id, name: request.query.nombre, address: request.query.address };

		dbo.collection("usuariosRegistrados").insertOne(usuarioX, function( err, res ) {
			if (err) throw err;
			console.log( "usuario Insertado" )
		});
	});



	// Bloque de escucha 
	app.listen( 8080, function(){
		console.log( 'escuchando en el puerto 8080' );

	});

});


/*		http://localhost:8080/lista_usuarios/?_id=1&nombre=Jaime&address=kelly  */
/*el parametro _id no lo mete porque ya está predefinido en la tabla (collection) de la DDBB*/