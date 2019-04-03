import express from 'express';

const router = express.Router();

router.get('/temario', (req, res) => {
    res.render(
        'temario',
        {
            title: 'OpenWebinars - NodeJS',
            message: 'Temario del curso de NodeJS'
        }
    );
});

export default router;