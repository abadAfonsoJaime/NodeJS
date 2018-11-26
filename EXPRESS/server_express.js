/* 
	BASH
	$ npm install express –save
*/


/* ++++++++++ ExpressFirst_JS ++++++++++ */


// Módulos a utilizar
var modulo = require( 'express' );

var app = modulo();

/*// ++++++++++ Base de Datos ++++++++++ 
var myMongo = require('mongodb');
// Cliente Mongo para interactuar con BBDD
var myMongoClient = myMongo.MongoClient;
//cogemos la url de mi remote_db en la web mLab: mongodb://<dbuser>:<dbpassword>@ds233238.mlab.com:33238/remote_db
var url = 'mongodb://ElMonguer:JaimeDB@ds233238.mlab.com:33238/remote_db';

// ++++++++++ CONEXION a la Base de Datos ++++++++++ 
//El método connect: conecta y abre devolviendo un objeto db con el que podemos interactuar
myMongoClient.connect(url, function(err, objetoDB) {
  if (err) throw err;
  console.log("Database created and working!");
  
  // Representa la BBDD
   var dbo = objetoDB.db("remote_db");//remote_db es el nombre de la DB
   // Crear la Tabla
  dbo.createCollection("usuariosRegistrados", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    objetoDB.close();
  });
});*/


// ++++++++++ Base de Datos ++++++++++ 
//Ya está creada la tabla
//Crear objeto JSON para insertar

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

/*  //Crear 1 objeto JSON para insertar
  var usuario1 = {
  	name: "Company Inc",
  	address: "Highway 37"
  };

  dbo.collection("usuariosRegistrados").insertOne(usuario1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted"); */


/*  //Insertar varios objetos JSON

  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("usuariosRegistrados").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    objectDB.close();
  });
});*/


/*//Devuelve el primer objeto de la BBDD
dbo.collection("usuariosRegistrados").findOne({}, function(err, result) {
    if (err) throw err;
    console.log( result );//Devuelve como result el primero que encuentra
    console.log( result._id );
    console.log(result.name);
    console.log( result.address );
    objectDB.close();
  });
}); */

/*//Devuelve todos los objetos de la BBDD
dbo.collection("usuariosRegistrados").find({}).toArray( function(err, result) {
    if (err) throw err;
    console.log( result );//Devuelve como result un array de JSON
    console.log( result[3]._id );
    console.log( result[2].name );
    console.log( result[1].address );
    objectDB.close();
  });
}); */

/*//Devuelve un objeto en concreto de la BBDD
dbo.collection("usuariosRegistrados").find({"name": "Amy"}).toArray( function(err, result) {
    if (err) throw err;
    console.log( result );//Devuelve como result un array de JSON
    console.log( result[0].name );
    console.log( result[0].address );

    objectDB.close();
  });
});*/ 

/*//Filtrar por EXPRESION REGULAR en los objetos la BBDD
var peticionPorLetra = { name: /^M/, address:"Valley 345" };
dbo.collection( "usuariosRegistrados" ).find( peticionPorLetra ).toArray( function(err, result) {
    if (err) throw err;
    console.log( result );//Devuelve como result un array de JSON
    console.log( result[0].name );
    console.log( result[0].address );

    objectDB.close();
  });
});
*/

/*//Otra manera de Filtrar por EXPRESION REGULAR en los objetos la BBDD
var peticion = { name: /^M/, name: /^J/ };
dbo.collection( "usuariosRegistrados" ).find( peticion ).toArray( function(err, result) {
    if (err) throw err;
    console.log( result );//Devuelve como result un array de JSON
    console.log( result[0].name );
    console.log( result[0].address );

    objectDB.close();
  });
});*/

/*//Pedir datos y ordenarlos 
var orden = { name: -1};
//{ name: 1} --> ascending A-Z	{ name: -1} --> descending Z-A

var peticion = {};
dbo.collection( "usuariosRegistrados" ).find( peticion ).sort(orden).toArray( function(err, result) {
    if (err) throw err;
    console.log( result );//Devuelve como result un array de JSON
    console.log( result[0].name );
    console.log( result[0].address );

    objectDB.close();
  });
})*/

/*var orden = { name: -1};
//{ name: 1} --> ascending A-Z	{ name: -1} --> descending Z-A

//Pedir solo una cantidad de objetos de la DDBB --> limit(los x primeros que encuentre)
var peticion = {};
dbo.collection( "usuariosRegistrados" ).find( peticion )limit(3).sort(orden).toArray( function(err, result) {
    if (err) throw err;
    console.log( result );//Devuelve como result un array de JSON
    console.log( result[0].name );
    console.log( result[0].address );

    objectDB.close();
  });*/

/* //Borrar una entrada
 var peticion_borrar = { name: "Amy" }; //Elimina la primera entrada con nombre Michael que encuentre
 dbo.collection( "usuariosRegistrados" ).deleteOne( peticion_borrar, function(err, result) {
    if (err) throw err;
    console.log( "Amy ha sido borrado!")
    //console.log( result );Devuelve un chorizo espeeectaaculaaar

    objectDB.close();
  });
})*/



//Insert many
/*  var myobj = { name: 'John', address: 'Highway 71'};

  dbo.collection("usuariosRegistrados").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    objectDB.close();
  });
});
*/

/*HASTA AQUI MONGO A SECAS: COMIENZA A MEZCLAR CON EXPRESS*/

//Bloque de Petición get --> app.get( path, callback ); 
app.get( '/', function( request, response ){ /*  '/' --> root directory */
	
	response.sendFile( __dirname + '/html/Express.html'); /*sendFile requiere la ruta completa desde la raíz del disco duro*/
	console.log( __dirname );

} );

app.get( '/users', function( request, response ){ 
	
	response.write( '<h1>Mi primer servidor express</h1>' );
	response.end( 'peticion "get" terminada' );
/*si pones write se queda en bucle esperando más, pero si pones .send() hace lo mismo que .write() pero sin necesidad de luego terminar con .end()*/
} );

app.get( '/otra', function( request, response ){ 
	
	response.send( '<h1>Ejemplo con el método .send()</h1>' );

} );


/*Manejar petición get con query*/
/*http://localhost:8080/?id=25&Nombre=Pepe*/
/*Objeto query para guardar los parámetros de la URL*/
app.get( '/lista', function( request, response ){
	
	/*Recuperar la petición en la consola*/
	console.log( "ID:-->" + request.query.id );
	console.log( "Nombre:-->" + request.query.nombre );
	/*Para que lo pinte en el navegador: árbol DOM*/
	response.write( "Nombre:-->" + request.query.nombre );
	response.end( "ID:-->" + request.query.id );
	console.log( "Petición GET para /lista" );
});

/*Manejar petición get con params*/
//Parámetros son los /directorios/. La url no requiere "?"
//localhost:8080/lista_fotos/24/profile/pepe
//localhost:8080/lista_fotos/21/profile/raul
app.get( '/lista_fotos/:foto/profile/:nombre', function( request, response ){
	//Los : del string indican que el dato no es fijo y debe guardarse en request.params
	console.log( request.params );
	response.write( "ID:-->" + request.params.foto );
	response.end( "Nombre:-->" + request.params.nombre );
	console.log( "Petición GET para /lista_fotos" );
});

/* Redirección */
app.get('/redirection', function( request, response ){
	response.redirect( 302, '/'); //codigo 302 --> direction found!
})

/* MIDDLEWARE */
//is then logic code between the request and the response.

//First middleware before response is sent
app.use( function ( req, res, next ){
	console.log( 'Start' );
	next();
})
//Route handler
app.get( '/middleware', function( req, res, next ){
	res.send( 'Middle' );
	next();
});
app.use( '/middleware', function( req, res ){
	console.log( 'End' );
})


// Bloque de escucha 
app.listen( 8080, function(){
	console.log( 'escuchando en el puerto 8080' );
} );
