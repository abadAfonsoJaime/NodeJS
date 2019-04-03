import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render(
        'landing-page',
        {
            title: 'OpenWebinars',
            message: 'Curso de NodeJS - Home'
        }
    );
});

export default router;