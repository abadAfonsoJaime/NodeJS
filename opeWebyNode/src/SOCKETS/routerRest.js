import user from './rutasRest/me';
import music from './rutasRest/music';
import auth from './rutasRest/auth';

// Agrupamos por recursos
export default app => {
    app.use('/auth', auth);
    app.use('/me', user); // Para la ruta me utiliza las rutas del archivo user
    app.use('/music', music); // Para la ruta /music utiliza las rutas del archivo 
}