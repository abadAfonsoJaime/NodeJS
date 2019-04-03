// $ mongo
// $ use films
// $ show dbs
// $ npm run mongo
// $ show dbs
// $ db.films.find().pretty()
import mongoose from 'mongoose';

// Protocolo --> mongodb:
// Ruta (por defecto localhost) --> 127.0.0.1
// Puerto por defecto --> 27017
// DataBase Name --> films
const host = 'mongodb://127.0.0.1:27017/films';

// Modo debug para trabajar en desarrollo
mongoose.set('debug', true);
// Mongo trabaja con promesas --> usaremos las promesas globales que trae NodeJS
mongoose.Promise = global.Promise;

const conn = mongoose.createConnection(
    host,
    { poolSize : 200 }
);

conn.on('error', err => {
    console.log('Error', err);
    // Si hay error queremos que salga y no deje la conexión abierta
    return process.exit();
});

conn.addListener( 'connected', () => {console.log('Conectado a Mongo')} );

const filmSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: { type: String, trim: true, required: true },
        poster: { type: String, trim: true, required: true }
    },
    {
        strict: false // si la colección recibe un objeto sin alguno de los campos no hay problema --> ALLOW NULL
    }
    
);

// Creacion de un nuevo modelo
const Film = conn.model('Film', filmSchema);

const newDocument = new Film(
    {
        _id: new mongoose.Types.ObjectId(),
        title: 'Star Wars: The last Jedi',
        poster: 'https://www.google.com/search?rlz=1C1CHBD_esES804ES804&biw=1584&bih=740&tbm=isch&sa=1&ei=2CSjXJvvMcWNlwTWnqnQCQ&q=luke+skywalker+transparent+background&oq=luke+skywalker+backg&gs_l=img.1.1.0i19j0i8i30i19l3.15853.17589..19474...0.0..0.86.438.6......0....1..gws-wiz-img.......0j0i67j0i30j0i5i30i19.IFTiWpP6rpg'
    }
);

newDocument.save(err => {
    if (err) {
        throw err
    }
});