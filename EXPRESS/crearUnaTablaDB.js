// ++++++++++ Base de Datos ++++++++++ 
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
});

//dbo representa la conexión a la base de datos