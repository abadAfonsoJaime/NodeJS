import express from 'express';

import mocks from '../mocks';

import { auth } from '../middlewares';
import { send as wSend } from '../webSocket';

const router = express.Router();

router
    .get('/', (req, res, next) => {

        wSend(req.method, req.baseUrl, mocks);

        return res
            .status(200)
            .json(mocks);
    })
    .post('/', auth, (req, res, next) => {
        console.log('Body received', req.body);
        res
            .status(201)
            .json(req.body);
    });

router.get('/:singer', (req, res, next) => {
    const songsBySinger = mocks.filter(
        item => item.singer.toLowerCase() === req.params.singer.toLowerCase()
    );

    wSend( req.method, req.baseUrl, songsBySinger );
    
    res
        .status(200)
        .json(songsBySinger);
});
// se definen los datos en el directorio raiz mediante el fichero mocks.js

export default router;