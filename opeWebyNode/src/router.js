import home from './routes/landing';
import units from './routes/units';
import user from './routes/user';


export default app => {
    app.use('/', home);
    app.use('/temario', units);
    app.use('/', user); // el magic param está en el archivo user.js
}