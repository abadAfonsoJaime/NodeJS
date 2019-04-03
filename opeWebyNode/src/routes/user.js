import express from 'express';

const router = express.Router();

/*
 * MAGIC PARAMS --> Siempre deben ir al final ya que Express evalua rutas de arriba a abajo
 * hay que tener mucho cuidado de esto para que no entren todas las rutas por el magic param
 * y se ignoren el resto de las rutas
 */


// http://localhost:9000/pepito
router.get('/:user', (req, res) => {
    console.log('variable user', req.params.user); // Cmd
    res.render(
        'user',
        {
            title: 'Profile - User',
            message: `Bienvenido ${req.params.user}`
        }
    );
});

export default router;