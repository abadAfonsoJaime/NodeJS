import Sequelize from 'Sequelize'
// Definimos la conexión
const sequelize = new Sequelize(
    'films',
    '',
    '',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);
// Definimos o Schema
const Film = sequelize.define(
    'Film',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            field: 'title'
        },
        poster: {
            type: Sequelize.STRING,
            field: 'poster'
        }
    },
    {
        freezeTableName: true
    }
);
// Nos conectamos a la DB e insertamos
Film.sync( {force : true} ).then(
    () => Film.create(
        {
            title: '',
            poster: 'https://www.google.com/search?rlz=1C1CHBD_esES804ES804&biw=1584&bih=740&tbm=isch&sa=1&ei=2CSjXJvvMcWNlwTWnqnQCQ&q=luke+skywalker+transparent+background&oq=luke+skywalker+backg&gs_l=img.1.1.0i19j0i8i30i19l3.15853.17589..19474...0.0..0.86.438.6......0....1..gws-wiz-img.......0j0i67j0i30j0i5i30i19.IFTiWpP6rpg'
        }
    )
)
//npm run sequelize

// Comandos
/**
 *     > $ psql postgres
 *     > $ /l
 * postgres=# \c films
 * films=# SELECT * FROM films
 */