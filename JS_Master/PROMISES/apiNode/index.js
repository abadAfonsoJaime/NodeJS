// SIMPLE EXPRESS SERVER
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userController = require('./userController');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded(
    { extended: true }
));
app.post('/user', userController.createOrAddUser);

app.use(
    (err, req, res, next) => {
        res.status(err.status || 500).send(
            {
                status: err.status ? `${err.status}`: 500,
                message: err.message
            }
        );
    }
);

app.listen(3000, () => {
    console.log(`listening on port 3000`);
})